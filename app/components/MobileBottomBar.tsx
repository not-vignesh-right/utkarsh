'use client'

import Link from 'next/link'
import { Phone, GraduationCap, MapPin, Send } from 'lucide-react'

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3">
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto items-center">
        {/* Call Emergency */}
        <a
          href="tel:9532700007"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#8B0000] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-0.5 shadow-sm">
            <Phone className="w-4 h-4 text-[#8B0000] animate-pulse" />
          </div>
          <span className="text-[10px] font-black tracking-tight leading-none text-slate-800">Call 24/7</span>
        </a>

        {/* Courses */}
        <Link
          href="/courses"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-600 hover:text-[#8B0000] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-0.5">
            <GraduationCap className="w-4 h-4 text-slate-700" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-none text-slate-700">Courses</span>
        </Link>

        {/* Location */}
        <a
          href="https://maps.google.com/?q=Utkarsh+Hospital+Naubasta+Kanpur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-600 hover:text-[#8B0000] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-0.5">
            <MapPin className="w-4 h-4 text-slate-700" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-none text-slate-700">Map</span>
        </a>

        {/* Admission Enquiry CTA */}
        <Link
          href="/courses#contact"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-[#8B0000] active:scale-95 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center mb-0.5 shadow-sm">
            <Send className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-black tracking-tight leading-none text-[#8B0000]">Enquire</span>
        </Link>
      </div>
    </div>
  )
}
