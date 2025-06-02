import { promises as fs } from 'fs'
import path from 'path'

const JOURNAL_DIR = path.join(process.cwd(), 'data', 'journal')

export interface JournalBlock {
  id: string
  timestamp: string // ISO string
  location?: string
  coordinates?: string
  category?: string
  content: string
  createdAt: string
}

export interface DayEntry {
  date: string // YYYY-MM-DD
  blocks: JournalBlock[]
}

// Ensure journal directory exists
async function ensureJournalDir() {
  try {
    await fs.access(JOURNAL_DIR)
  } catch {
    await fs.mkdir(JOURNAL_DIR, { recursive: true })
  }
}

// Get filename for a date
function getJournalFilename(date: string) {
  return `${date}.json`
}

// Get journal entry for a specific date
export async function getJournalEntry(date: string): Promise<DayEntry> {
  await ensureJournalDir()
  const filename = getJournalFilename(date)
  const filePath = path.join(JOURNAL_DIR, filename)
  
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch {
    // If file doesn't exist, return empty day entry
    return {
      date,
      blocks: []
    }
  }
}

// Save journal entry for a specific date
export async function saveJournalEntry(date: string, dayEntry: DayEntry): Promise<void> {
  await ensureJournalDir()
  const filename = getJournalFilename(date)
  const filePath = path.join(JOURNAL_DIR, filename)
  
  await fs.writeFile(filePath, JSON.stringify(dayEntry, null, 2), 'utf-8')
}

// Add a new block to a day
export async function addJournalBlock(
  date: string, 
  content: string, 
  category?: string, 
  location?: string,
  coordinates?: string
): Promise<JournalBlock> {
  const dayEntry = await getJournalEntry(date)
  const now = new Date()
  
  const newBlock: JournalBlock = {
    id: crypto.randomUUID(),
    timestamp: now.toISOString(),
    location,
    coordinates,
    category: undefined, // No longer using categories
    content,
    createdAt: now.toISOString()
  }
  
  dayEntry.blocks.push(newBlock)
  await saveJournalEntry(date, dayEntry)
  
  return newBlock
}

// Update a specific block
export async function updateJournalBlock(
  date: string, 
  blockId: string, 
  updates: Partial<Pick<JournalBlock, 'content' | 'category' | 'location' | 'coordinates'>>
): Promise<void> {
  const dayEntry = await getJournalEntry(date)
  const block = dayEntry.blocks.find(b => b.id === blockId)
  
  if (block) {
    Object.assign(block, updates)
    await saveJournalEntry(date, dayEntry)
  }
}

// Delete a specific block
export async function deleteJournalBlock(date: string, blockId: string): Promise<void> {
  const dayEntry = await getJournalEntry(date)
  dayEntry.blocks = dayEntry.blocks.filter(b => b.id !== blockId)
  await saveJournalEntry(date, dayEntry)
}

// Get list of all journal entries (dates)
export async function getJournalDates(): Promise<string[]> {
  await ensureJournalDir()
  
  try {
    const files = await fs.readdir(JOURNAL_DIR)
    const dates = files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
      .sort((a, b) => b.localeCompare(a)) // Sort newest first
    
    return dates
  } catch {
    return []
  }
}

// Get today's date in YYYY-MM-DD format
export function getTodayDate(): string {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

// Format date for display
export function formatDateForDisplay(date: string): string {
  const dateObj = new Date(date + 'T00:00:00')
  return dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
} 