'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: import('lenis').default | null = null

    ;(async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

      const raf = (time: number) => {
        lenis!.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })()

    return () => lenis?.destroy()
  }, [])

  return null
}
