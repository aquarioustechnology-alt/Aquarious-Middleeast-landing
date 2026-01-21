"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "scale-up"
}

export function ScrollReveal({ children, className = "", delay = 0, animation = "fade-up" }: ScrollRevealProps) {
  const { ref, isInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animationClasses = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-down": "-translate-y-12 opacity-0",
    "fade-left": "translate-x-12 opacity-0",
    "fade-right": "-translate-x-12 opacity-0",
    "fade-in": "opacity-0",
    "scale-up": "scale-95 opacity-0",
  }

  const initialClass = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "translate-y-0 translate-x-0 scale-100 opacity-100" : initialClass
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
