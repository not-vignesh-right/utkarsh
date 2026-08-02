'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Award, Quote } from 'lucide-react'
import Image from 'next/image'
import { SectionHeader } from '@/app/components/ui/SectionHeader'
import { AnimatedSection } from '@/app/components/ui/AnimatedSection'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const leaders = [
  {
    name: 'Dr. Rajesh Trivedi',
    title: 'Chairman & Founder',
    organization: 'Utkarsh Hospital & Nursing College',
    image: '/images/dr-rajesh-trivedi.jpg',
    highlights: [
      'Visionary leader with 15+ years of experience',
      'Committed to quality healthcare & education',
      'Building a healthier tomorrow for Kanpur',
    ],
  },
  {
    name: 'Dr. Yashashwini Trivedi',
    title: 'Gynaecologist & Obstetrician',
    organization: 'Utkarsh Hospital',
    image: '/images/dr-yashashwini-trivedi-gynecologist.jpg',
    highlights: [
      'Specialist in obstetrics & women\'s health',
      'Dedicated to safe motherhood & newborn care',
      'Compassionate patient-first approach',
    ],
  },
  {
    name: 'Mrs. Vidyotma Trivedi',
    title: 'Co-Chairman & Co-Founder',
    organization: 'Utkarsh Hospital & Nursing College',
    image: '/images/mrs-vidyotma-trivedi-cochairman-and-cofounder.jpg',
    highlights: [
      'Driving institutional vision alongside leadership',
      'Passionate advocate for women in healthcare',
      'Instrumental in building Utkarsh\'s culture',
    ],
  },
  {
    name: 'Mr. Krishna Tiwari',
    title: 'Hospital Manager',
    organization: 'Utkarsh Hospital',
    image: '/images/mr-krishna-tiwari-manager.jpg',
    highlights: [
      'Overseeing seamless day-to-day hospital operations',
      'Ensuring patient satisfaction & service quality',
      'Committed to operational excellence',
    ],
  },
]

export function Leadership() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 })

  const bannerRef = useRef<HTMLDivElement>(null)
  const bannerInView = useInView(bannerRef, { once: true, amount: 0.25 })

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-center mb-14 lg:mb-16">
          <SectionHeader
            badge="Meet Our Team"
            title={<>Our <span className="text-[#8B0000]">Leadership</span></>}
            description="Guided by experienced physicians and visionary leaders committed to excellence in healthcare and education."
          />
        </div>

        {/* 4-card grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 44 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden cursor-default flex flex-col"
            >
              {/* Shimmer sweep on hover */}
              <span className="pointer-events-none absolute inset-0 z-10 -translate-x-full skew-x-[-18deg] group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Photo */}
              <div className="relative h-56 shrink-0 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/80 via-[#8B0000]/10 to-transparent" />

                {/* Name overlay on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-black text-sm leading-tight">{leader.name}</p>
                  <p className="text-red-200 text-[10px] font-semibold mt-0.5">{leader.title}</p>
                </div>

                {/* Award badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#8B0000] flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block mb-4 px-2.5 py-0.5 bg-red-50 text-[#8B0000] text-[10px] font-bold rounded-full border border-red-100">
                  {leader.organization}
                </span>

                <ul className="space-y-2.5 flex-1">
                  {leader.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B0000] mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-xs leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team banner */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 36 }}
          animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5"
        >
          <Image
            src="/images/inoperationig2.jpg"
            alt="Utkarsh Hospital Clinical Team"
            width={1200}
            height={420}
            className="w-full h-56 sm:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/90 via-[#8B0000]/60 to-black/40 flex items-center">
            <div className="px-5 sm:px-8 lg:px-14 max-w-xl">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white/40 mb-2" />
              <p className="text-white text-lg sm:text-2xl lg:text-3xl font-black leading-tight">
                Dedicated to Touching Lives Forever
              </p>
              <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium">
                Our doctors, nurses & paramedics work together every day to deliver the best care.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
