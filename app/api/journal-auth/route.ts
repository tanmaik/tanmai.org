import { NextRequest, NextResponse } from 'next/server'

const JOURNAL_SECRET = process.env.JOURNAL_SECRET || 'your-secret-key-change-this'

export async function POST(request: NextRequest) {
  try {
    const { secret } = await request.json()
    
    if (secret === JOURNAL_SECRET) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
} 