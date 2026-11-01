'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let lenis: import('lenis').default | null = null
    let frame = 0
    let destroyed = false

    ;(async () => {
      const Lenis = (await import('lenis')).default
      if (destroyed) return
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: { offset: -64 } })

      const raf = (time: number) => {
        lenis?.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    })()

    return () => {
      destroyed = true
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}
