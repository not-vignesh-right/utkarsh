import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { AboutContent } from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Utkarsh Hospital & College’s 17+ year legacy in Naubasta, Kanpur — a 100-bed multi-speciality hospital and nursing/paramedical college across 3 campuses.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      'Learn about Utkarsh Hospital & College’s 17+ year legacy in Naubasta, Kanpur — a 100-bed multi-speciality hospital and nursing/paramedical college across 3 campuses.',
    url: `${siteConfig.url}/about`,
  },
}

export default function AboutPage() {
  return <AboutContent />
}
