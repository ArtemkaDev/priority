import { NextRequest, NextResponse } from 'next/server'

// Простий in-memory rate limiter
const rateLimiter = new Map<string, number[]>()

export function middleware(request: NextRequest) {
  // Rate limiting тільки для API роутів
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    const now = Date.now()
    const windowMs = 60000 // 1 хвилина
    const maxRequests = 5 // максимум 5 запитів за хвилину
    
    // Отримати історію запитів для цього IP
    const requests = rateLimiter.get(ip) || []
    
    // Видалити старі запити
    const recentRequests = requests.filter(time => now - time < windowMs)
    
    // Перевірити ліміт
    if (recentRequests.length >= maxRequests) {
      return NextResponse.json(
        { 
          error: 'Забагато запитів. Спробуйте пізніше.',
          retryAfter: Math.ceil(windowMs / 1000)
        },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil(windowMs / 1000).toString(),
            'X-RateLimit-Limit': maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(now + windowMs).toISOString(),
          }
        }
      )
    }
    
    // Додати поточний запит
    recentRequests.push(now)
    rateLimiter.set(ip, recentRequests)
    
    // Додати заголовки rate limit до відповіді
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', maxRequests.toString())
    response.headers.set('X-RateLimit-Remaining', (maxRequests - recentRequests.length).toString())
    response.headers.set('X-RateLimit-Reset', new Date(now + windowMs).toISOString())
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
} 