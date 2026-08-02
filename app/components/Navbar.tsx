'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Album', href: '/album' },
  { label: 'About Us', href: '/about' },
  { label: 'Courses & Services', href: '/courses' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.10)]' : 'border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#8B0000]/20 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-white flex items-center justify-center">
              <Image
                src="/images/logo-with-bg.jpg"
                alt="Utkarsh Hospital & College Logo"
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[#8B0000] font-black text-xs sm:text-sm tracking-widest">UTKARSH</p>
              <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium tracking-wide">Hospital & College</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'relative font-medium text-sm transition-colors duration-150 group py-1',
                    isActive ? 'text-[#8B0000] font-semibold' : 'text-slate-600 hover:text-[#8B0000]'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute left-0 bottom-0 h-[2px] bg-[#8B0000] rounded-full transition-all duration-250',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:9532700007"
              className="flex items-center gap-1.5 text-slate-500 hover:text-[#8B0000] text-sm font-medium transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              9532700007
            </a>
            <Link
              href="/courses#contact"
              className="px-5 py-2 bg-[#8B0000] text-white text-sm font-semibold rounded-full hover:bg-[#700000] active:scale-95 transition-all duration-150 shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile right actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9532700007"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-50 text-[#8B0000] text-xs font-bold border border-red-100 active:scale-95 transition-transform"
            >
              <Phone className="w-3 h-3 text-[#8B0000] animate-pulse" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#8B0000] hover:bg-red-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-xl font-medium text-sm transition-colors',
                        isActive
                          ? 'bg-red-50 text-[#8B0000] font-semibold'
                          : 'text-slate-700 hover:text-[#8B0000] hover:bg-red-50/50'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:9532700007"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-slate-600 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  9532700007
                </a>
                <Link
                  href="/courses#contact"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 bg-[#8B0000] text-white text-center text-sm font-semibold rounded-xl"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

