'use server'

import { revalidatePath } from 'next/cache'
import { addJournalBlock, updateJournalBlock, deleteJournalBlock } from './journal'

export async function createJournalBlock(
  date: string, 
  content: string, 
  category?: string, 
  location?: string,
  coordinates?: string
) {
  try {
    const block = await addJournalBlock(date, content, category, location, coordinates)
    revalidatePath('/journal')
    revalidatePath(`/journal/${date}`)
    return { success: true, block }
  } catch (error) {
    console.error('Failed to create journal block:', error)
    return { success: false, error: 'Failed to create block' }
  }
}

export async function updateJournalBlockAction(
  date: string, 
  blockId: string, 
  content: string, 
  category?: string, 
  location?: string,
  coordinates?: string
) {
  try {
    await updateJournalBlock(date, blockId, { content, category, location, coordinates })
    revalidatePath('/journal')
    revalidatePath(`/journal/${date}`)
    return { success: true }
  } catch (error) {
    console.error('Failed to update journal block:', error)
    return { success: false, error: 'Failed to update block' }
  }
}

export async function deleteJournalBlockAction(date: string, blockId: string) {
  try {
    await deleteJournalBlock(date, blockId)
    revalidatePath('/journal')
    revalidatePath(`/journal/${date}`)
    return { success: true }
  } catch (error) {
    console.error('Failed to delete journal block:', error)
    return { success: false, error: 'Failed to delete block' }
  }
} 