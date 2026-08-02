import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { AlbumContent } from './AlbumContent'

export const metadata: Metadata = {
  title: 'Photo Album',
  description:
    'A visual tour of Utkarsh Hospital & College — modular operation theatres, Neonatal ICU, campus training facilities, and our leadership team in Naubasta, Kanpur.',
  alternates: { canonical: `${siteConfig.url}/album` },
  openGraph: {
    title: `Photo Album | ${siteConfig.name}`,
    description:
      'A visual tour of Utkarsh Hospital & College — modular operation theatres, Neonatal ICU, campus training facilities, and our leadership team.',
    url: `${siteConfig.url}/album`,
  },
}

export default function AlbumPage() {
  return <AlbumContent />
}
