'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello Utkarsh Hospital & College, I'd like to know more about your services.`
  )

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 relative z-10" strokeWidth={2.25} />
    </a>
  )
}
