import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { CoursesContent } from './CoursesContent'

export const metadata: Metadata = {
  title: 'Courses & Hospital Specialties',
  description:
    'Explore BSc Nursing, GNM, and paramedical diplomas (D.OPT, D.EMT, D.OTT), plus hospital departments including Gynaecology, NICU, and 24/7 Emergency care at Utkarsh, Kanpur.',
  alternates: { canonical: `${siteConfig.url}/courses` },
  openGraph: {
    title: `Courses & Hospital Specialties | ${siteConfig.name}`,
    description:
      'Explore BSc Nursing, GNM, and paramedical diplomas, plus hospital departments including Gynaecology, NICU, and 24/7 Emergency care at Utkarsh, Kanpur.',
    url: `${siteConfig.url}/courses`,
  },
}

export default function CoursesAndServicesPage() {
  return <CoursesContent />
}
