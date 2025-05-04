import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();

    // Log the received location data
    console.log('Received location data:', body);

    // Here you would typically store this data in a database
    // For now, we'll just acknowledge receipt

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing location data:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
