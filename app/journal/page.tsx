import Link from 'next/link'
import { getJournalDates, getJournalEntry, formatDateForDisplay, getTodayDate } from '../../lib/journal'
import Breadcrumbs from '../components/Breadcrumbs'

export default async function JournalIndexPage() {
  const allDates = await getJournalDates()
  const today = getTodayDate()

  // Get entry counts for each date
  const datesWithCounts = await Promise.all(
    allDates.map(async (date) => {
      const entry = await getJournalEntry(date)
      return {
        date,
        count: entry.blocks.length
      }
    })
  )

  return (
    <section className="max-w-[42rem] mx-auto mt-8 px-4 mb-16">
      <Breadcrumbs />
      
      <header className="mt-6 mb-4">
        <h1 className="text-3xl font-extrabold mb-4">Journal</h1>
      </header>
      
      <article className="space-y-1">
        {datesWithCounts.length > 0 ? (
          <div className="space-y-2">
            {datesWithCounts.map(({ date, count }) => (
              <div key={date} className="flex justify-between items-center">
                <Link href={`/journal/${date}`} className="text-blue-600 underline">
                  {formatDateForDisplay(date)}
                </Link>
                <span className="text-sm text-gray-500">
                  {count} {count === 1 ? 'entry' : 'entries'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No journal entries yet.{' '}
            <Link href="/journal/today" className="text-blue-600 underline">
              Create your first entry
            </Link>
          </p>
        )}
      </article>
    </section>
  )
} 