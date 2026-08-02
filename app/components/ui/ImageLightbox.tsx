'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryItem {
  id: string
  title: string
  category: string
  src: string
  description: string
}

interface ImageLightboxProps {
  items: GalleryItem[]
  selectedIndex: number | null
  onClose: () => void
  onSelectIndex: (index: number) => void
}

export function ImageLightbox({ items, selectedIndex, onClose, onSelectIndex }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') {
        onSelectIndex((selectedIndex - 1 + items.length) % items.length)
      }
      if (e.key === 'ArrowRight') {
        onSelectIndex((selectedIndex + 1) % items.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, items.length, onClose, onSelectIndex])

  if (selectedIndex === null) return null

  const currentItem = items[selectedIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
      >
        {/* Top toolbar */}
        <div className="flex items-center justify-between z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-[#8B0000] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
              {currentItem.category}
            </span>
            <span className="ml-3 text-slate-400 text-xs font-medium">
              {selectedIndex + 1} / {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main image viewer with prev/next buttons */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          <button
            onClick={() => onSelectIndex((selectedIndex - 1 + items.length) % items.length)}
            className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#8B0000] text-white transition-colors shadow-lg cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center"
          >
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              className="object-contain rounded-lg"
              priority
            />
          </motion.div>

          <button
            onClick={() => onSelectIndex((selectedIndex + 1) % items.length)}
            className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#8B0000] text-white transition-colors shadow-lg cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="text-center z-10 max-w-2xl mx-auto">
          <h3 className="text-white font-bold text-lg md:text-xl">{currentItem.title}</h3>
          <p className="text-slate-300 text-sm mt-1">{currentItem.description}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
