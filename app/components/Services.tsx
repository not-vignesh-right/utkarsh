'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Stethoscope, Building2, ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/app/components/ui/SectionHeader'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const services = [
  {
    icon: GraduationCap,
    title: 'Nursing College',
    subtitle: 'Professional Nursing Education',
    tags: ['BScN', 'GNM'],
    courses: [
      'Bachelor of Science in Nursing (BScN)',
      'General Nursing & Midwifery (GNM)',
    ],
    description: 'Shaping skilled, compassionate nursing professionals ready for the demands of modern healthcare.',
    id: 'nursing',
  },
  {
    icon: Stethoscope,
    title: 'Paramedical College',
    subtitle: 'Allied Health Sciences',
    tags: ['D.OPT', 'D.EMT', 'D.OTT'],
    courses: [
      'Diploma in Optometry (D.OPT)',
      'Diploma in Emergency Medical Technology (D.EMT)',
      'Diploma in Operation Theatre Technology (D.OTT)',
    ],
    description: 'Training the next generation of paramedical experts with rigorous hands-on clinical exposure.',
    id: 'paramedical',
  },
  {
    icon: Building2,
    title: 'Utkarsh Hospital',
    subtitle: '100 Beds · Multi-Speciality',
    tags: ['100 Beds', 'Multi-Speciality', '24/7'],
    courses: [
      'General Medicine & Surgery',
      'Gynaecology & Obstetrics',
      'Neonatal ICU (NICU)',
      'Emergency & Trauma Care',
    ],
    description: 'A comprehensive multi-speciality hospital offering round-the-clock quality healthcare to the community.',
    id: 'hospital',
  },
]

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 lg:mb-16 flex justify-center">
          <SectionHeader
            badge="Our Offerings"
            title={<>Healthcare & <span className="text-[#8B0000]">Education</span> Under One Roof</>}
            description="A unique ecosystem combining world-class medical care with quality healthcare education — all on a single campus."
          />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.id}
              initial={{ opacity: 0, y: 48 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
              transition={{ duration: 0.6, delay: i * 0.13, ease }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden flex flex-col cursor-default"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#8B0000] via-[#C41E3A] to-rose-400 shrink-0" />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-red-50 group-hover:bg-[#8B0000] flex items-center justify-center mb-5 transition-colors duration-250 shadow-sm shrink-0">
                  <service.icon className="w-6 h-6 text-[#8B0000] group-hover:text-white transition-colors duration-250" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{service.title}</h3>
                <p className="text-[#8B0000] text-[10px] font-black uppercase tracking-[0.1em] mb-3">{service.subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-red-50 text-[#8B0000] text-[10px] font-black rounded-full border border-red-100 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Course list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.courses.map((course) => (
                    <li key={course} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#8B0000] shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1.5 text-[#8B0000] text-sm font-bold group/link mt-auto"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

