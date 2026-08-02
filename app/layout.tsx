import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site-config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Utkarsh Hospital Kanpur',
    'Naubasta hospital',
    'nursing college Kanpur',
    'BSc Nursing Kanpur',
    'GNM Kanpur',
    'paramedical college Kanpur',
    'multi speciality hospital Kanpur',
  ],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

import { MobileBottomBar } from '@/app/components/MobileBottomBar'
import { WhatsAppButton } from '@/app/components/WhatsAppButton'

const hospitalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneIntl,
  email: siteConfig.email,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  foundingDate: String(siteConfig.foundedYear),
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.locality,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  medicalSpecialty: [
    'General Medicine & Surgery',
    'Gynaecology & Obstetrics',
    'Neonatal ICU',
    'Emergency & Trauma Care',
  ],
  availableService: [
    { '@type': 'MedicalProcedure', name: 'Emergency & Trauma Care' },
    { '@type': 'MedicalProcedure', name: 'Neonatal Intensive Care' },
  ],
  hasMap: `https://maps.google.com/?q=Utkarsh+Hospital+Naubasta+Kanpur`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
      </head>
      <body className="antialiased pb-14 md:pb-0 overflow-x-hidden">
        {children}
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  )
}
