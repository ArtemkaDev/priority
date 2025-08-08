"use client"

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from './use-intersection-observer'

interface UseCounterAnimationOptions {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
}

export function useCounterAnimation({
  end,
  duration = 2000,
  start = 0,
  suffix = '',
  prefix = ''
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(start)
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (!isIntersecting) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * easeOut

      setCount(Math.floor(current))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isIntersecting, end, start, duration])

  const displayValue = `${prefix}${count}${suffix}`

  return { ref, displayValue, isAnimating: isIntersecting }
} 