'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface SectionHeaderProps {
  badge: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease }}
      className={cn(
        align === 'center' && 'text-center mx-auto',
        align === 'left' && 'text-left',
        'max-w-3xl',
        className
      )}
    >
      <span className="inline-block px-4 py-1.5 bg-red-50 text-[#8B0000] text-[11px] font-black rounded-full mb-4 border border-red-100 tracking-[0.12em] uppercase">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
