'use client'

import { useState, useEffect, useRef, KeyboardEvent, useCallback } from 'react'
import { JournalBlock, DayEntry } from '../../lib/journal'
import { createJournalBlock, updateJournalBlockAction, deleteJournalBlockAction } from '../../lib/actions'

interface JournalEditorProps {
  date: string
  initialEntry: DayEntry
}

export default function JournalEditor({ date, initialEntry }: JournalEditorProps) {
  const [blocks, setBlocks] = useState<JournalBlock[]>(initialEntry.blocks)
  const [autoLocation, setAutoLocation] = useState('')
  const [autoCoordinates, setAutoCoordinates] = useState('')
  const autoSaveTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map())

  // Auto-detect location on component mount
  useEffect(() => {
    detectLocation()
  }, [])

  const detectLocation = async () => {
    if (!navigator.geolocation) return

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 5000,
          enableHighAccuracy: false
        })
      })

      const { latitude, longitude } = position.coords
      const coordinates = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
      setAutoCoordinates(coordinates)
      
      // Use reverse geocoding to get city name
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
        const data = await response.json()
        if (data.city) {
          setAutoLocation(data.city)
        }
      } catch {
        // If geocoding fails, just use coordinates
        setAutoLocation(coordinates)
      }
    } catch {
      // Location detection failed - that's okay
    }
  }

  const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }

  const createNewBlock = useCallback(async (content: string = ''): Promise<string | null> => {
    try {
      const result = await createJournalBlock(
        date,
        content,
        undefined,
        autoLocation || undefined,
        autoCoordinates || undefined
      )
      
      if (result.success && result.block) {
        setBlocks(prev => [...prev, result.block])
        return result.block.id
      }
    } catch {
      console.error('Failed to create block')
    }
    return null
  }, [date, autoLocation, autoCoordinates])

  const debouncedUpdate = useCallback((blockId: string, content: string) => {
    // Clear existing timeout for this block
    const existingTimeout = autoSaveTimeouts.current.get(blockId)
    if (existingTimeout) {
      clearTimeout(existingTimeout)
    }

    // Set new timeout
    const timeoutId = setTimeout(async () => {
      try {
        await updateJournalBlockAction(date, blockId, content)
        autoSaveTimeouts.current.delete(blockId)
      } catch {
        console.error('Failed to auto-save block')
      }
    }, 500) // 500ms debounce

    autoSaveTimeouts.current.set(blockId, timeoutId)
  }, [date])

  const handleBlockContentChange = (blockId: string, content: string) => {
    // Update local state immediately
    setBlocks(prev => prev.map(block => 
      block.id === blockId 
        ? { ...block, content }
        : block
    ))

    // Debounced auto-save
    debouncedUpdate(blockId, content)
  }

  const handleDeleteBlock = async (blockId: string) => {
    try {
      await deleteJournalBlockAction(date, blockId)
      setBlocks(prev => prev.filter(block => block.id !== blockId))
      
      // Clear any pending auto-save for this block
      const timeout = autoSaveTimeouts.current.get(blockId)
      if (timeout) {
        clearTimeout(timeout)
        autoSaveTimeouts.current.delete(blockId)
      }
    } catch {
      console.error('Failed to delete block')
    }
  }

  const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>, blockId?: string) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const newBlockId = await createNewBlock()
      if (newBlockId) {
        // Focus the new block after a brief delay
        setTimeout(() => {
          const newTextarea = document.querySelector(`[data-block-id="${newBlockId}"]`) as HTMLTextAreaElement
          if (newTextarea) {
            newTextarea.focus()
          }
        }, 50)
      }
    } else if (e.key === 'Backspace' && blockId) {
      const textarea = e.target as HTMLTextAreaElement
      const block = blocks.find(b => b.id === blockId)
      
      // Delete block if it's empty and user presses backspace
      if (block && !block.content.trim() && textarea.selectionStart === 0) {
        e.preventDefault()
        
        // Focus previous block if it exists
        const blockIndex = blocks.findIndex(b => b.id === blockId)
        if (blockIndex > 0) {
          const prevBlock = blocks[blockIndex - 1]
          setTimeout(() => {
            const prevTextarea = document.querySelector(`[data-block-id="${prevBlock.id}"]`) as HTMLTextAreaElement
            if (prevTextarea) {
              prevTextarea.focus()
              prevTextarea.setSelectionRange(prevTextarea.value.length, prevTextarea.value.length)
            }
          }, 50)
        }
        
        await handleDeleteBlock(blockId)
      }
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const getRelativeTime = (timestamp: string) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diff = now.getTime() - time.getTime()
    const minutes = Math.floor(diff / 60000)
    
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    return formatTime(timestamp)
  }

  // Create initial empty block if no blocks exist
  useEffect(() => {
    if (blocks.length === 0) {
      createNewBlock()
    }
  }, [blocks.length, createNewBlock])

  return (
    <div className="max-w-none">
      {/* Journal entries for this day */}
      <div>
        {blocks.map((block, index) => (
          <div key={block.id} className={index === 0 ? "mt-4" : "mt-4"}>
            <BlockComponent
              block={block}
              onContentChange={(content) => handleBlockContentChange(block.id, content)}
              onKeyDown={(e) => handleKeyDown(e, block.id)}
              getRelativeTime={getRelativeTime}
              autoResizeTextarea={autoResizeTextarea}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

interface BlockComponentProps {
  block: JournalBlock
  onContentChange: (content: string) => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  getRelativeTime: (timestamp: string) => string
  autoResizeTextarea: (textarea: HTMLTextAreaElement) => void
}

function BlockComponent({ 
  block, 
  onContentChange,
  onKeyDown,
  getRelativeTime,
  autoResizeTextarea
}: BlockComponentProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      autoResizeTextarea(textareaRef.current)
    }
  }, [block.content, autoResizeTextarea])

  return (
    <div className="flex items-start gap-4">
      {/* Time indicator and metadata */}
      <div className="flex-shrink-0 w-28">
        <div className="text-xs text-gray-400">
          <div className="font-medium">{getRelativeTime(block.timestamp)}</div>
          {block.location && (
            <div className="truncate">{block.location}</div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <textarea
          ref={textareaRef}
          data-block-id={block.id}
          value={block.content}
          onChange={(e) => {
            onContentChange(e.target.value)
            autoResizeTextarea(e.target)
          }}
          onKeyDown={onKeyDown}
          placeholder="What's on your mind?"
          className="w-full resize-none border-0 outline-none text-gray-900 placeholder-gray-400 text-base leading-relaxed bg-transparent focus:ring-0 p-0 min-h-[2.5rem]"
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  )
} 