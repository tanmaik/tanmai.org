import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Skip auth check for the auth page itself
  if (request.nextUrl.pathname === '/journal/auth') {
    return NextResponse.next()
  }

  // Only protect /journal routes
  if (!request.nextUrl.pathname.startsWith('/journal')) {
    return NextResponse.next()
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('journal-auth')
  if (!authCookie) {
    return NextResponse.redirect(new URL('/journal/auth', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/journal/:path*',
  ],
}