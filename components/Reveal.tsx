'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView(0.1)

  return (
    <div ref={ref} className="reveal" data-in={inView}>
      {children}
    </div>
  )
}
