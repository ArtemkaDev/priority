"use client"

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'zoomIn'
  delay?: number
  duration?: number
}

const animationClasses = {
  fadeInUp: 'translate-y-8 opacity-0',
  fadeInDown: 'translate-y-[-32px] opacity-0',
  fadeInLeft: 'translate-x-[-32px] opacity-0',
  fadeInRight: 'translate-x-8 opacity-0',
  fadeIn: 'opacity-0',
  zoomIn: 'scale-95 opacity-0'
}

const activeAnimationClasses = {
  fadeInUp: 'translate-y-0 opacity-100',
  fadeInDown: 'translate-y-0 opacity-100',
  fadeInLeft: 'translate-x-0 opacity-100',
  fadeInRight: 'translate-x-0 opacity-100',
  fadeIn: 'opacity-100',
  zoomIn: 'scale-100 opacity-100'
}

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 600
}: ScrollAnimationProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${isIntersecting ? activeAnimationClasses[animation] : animationClasses[animation]}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
} 