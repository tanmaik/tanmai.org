import { redirect } from 'next/navigation'
import { getJournalDates } from '../../../lib/journal'

export default async function JournalTodayPage() {
  const dates = await getJournalDates()
  
  // If there are no entries, redirect to today's date
  if (dates.length === 0) {
    const today = new Date().toISOString().split('T')[0]
    redirect(`/journal/${today}`)
  }
  
  // Redirect to the most recent entry
  redirect(`/journal/${dates[0]}`)
} 