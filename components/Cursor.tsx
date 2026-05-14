'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let isHover = false

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const onEnter = () => { isHover = true }
    const onLeave = () => { isHover = false }

    window.addEventListener('mousemove', onMove)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
      if (ringRef.current) {
        const size = isHover ? 56 : 36
        ringRef.current.style.width  = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.transform = `translate(${rx - size / 2}px, ${ry - size / 2}px)`
        ringRef.current.style.opacity = isHover ? '1' : '0.5'
      }
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          width: 8, height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(110,231,183,0.6)',
          transition: 'width 0.25s, height 0.25s, opacity 0.25s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
