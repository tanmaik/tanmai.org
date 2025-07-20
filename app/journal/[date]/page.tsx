import { notFound } from 'next/navigation'
import { getJournalEntry, formatDateForDisplay } from '../../../lib/journal'
import JournalEditor from '../../components/JournalEditor'
import Breadcrumbs from '../../components/Breadcrumbs'

interface Props {
  params: Promise<{ date: string }>
}

export default async function JournalDatePage({ params }: Props) {
  const { date } = await params
  
  // Validate date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    notFound()
  }

  const entry = await getJournalEntry(date)

  return (
    <section className="max-w-[42rem] mx-auto mt-8 px-4 mb-12">
      <Breadcrumbs />
      
      {/* Date Journal */}
      <article className="bg-white mt-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {formatDateForDisplay(date)}
          </h2>
        </div>
        
        <JournalEditor date={date} initialEntry={entry} />
      </article>
    </section>
  )
} 