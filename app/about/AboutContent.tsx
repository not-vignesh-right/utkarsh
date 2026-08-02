'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Award,
  Building2,
  Users,
  HeartHandshake,
  CheckCircle2,
  GraduationCap,
  Hospital,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react'
import { Navbar } from '@/app/components/Navbar'
import { Footer } from '@/app/components/Footer'
import { Leadership } from '@/app/components/Leadership'

const keyHighlights = [
  {
    icon: Building2,
    title: 'Established in 2007',
    description: 'Over 17 years of unwavering commitment to healthcare & clinical education in Naubasta, Kanpur.',
  },
  {
    icon: Hospital,
    title: '100-Bed Multi-Speciality Hospital',
    description: 'Equipped with Modular OTs, Neonatal ICU (NICU), Adult ICU, Emergency 24/7, and Pathology.',
  },
  {
    icon: GraduationCap,
    title: '3 Expansive Campuses',
    description: 'Providing nursing (BSc, GNM) & paramedical diplomas (D.OPT, D.EMT, D.OTT) with state-approved practical labs.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-First Excellence',
    description: 'Dedicated team of expert doctors, compassionate nurses, and skilled healthcare administrators.',
  },
]

const campuses = [
  {
    name: 'Main Campus & Hospital Unit',
    location: 'Naubasta, Kanpur, Uttar Pradesh',
    details: 'Houses our 100-bed hospital, 24/7 Emergency Trauma Unit, Neonatal ICU, and Diagnostic Center.',
  },
  {
    name: 'Nursing Science Academic Block',
    location: 'Kanpur Campus II',
    details: 'Dedicated degree and diploma learning center with digital classrooms, simulation labs, and library.',
  },
  {
    name: 'Paramedical & Allied Health Campus',
    location: 'Kanpur Campus III',
    details: 'Advanced practical training labs for Optometry, Emergency Medicine, and OT Technology.',
  },
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-[#8B0000] to-[#700000] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <Award className="w-3.5 h-3.5" />
              Serving Kanpur Since 2007
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              About Utkarsh Hospital & College
            </h1>
            <p className="mt-4 text-red-100 text-sm sm:text-base max-w-2xl mx-auto">
              Combining 100-bed multi-speciality patient care with premier nursing and paramedical education across 3 campuses in Kanpur.
            </p>
          </div>
        </section>

        {/* Institution Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[#8B0000] font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Our Foundation & Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Touching Lives Forever Through Healthcare & Higher Education
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 2007 in Naubasta, Kanpur, <strong>Utkarsh Hospital and College</strong> was created with a mission to bridge the gap between advanced multi-speciality healthcare services and high-quality medical education.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                With a 100-bed multi-speciality hospital facility and 3 dedicated campuses, Utkarsh provides round-the-clock emergency care, specialized maternity and neonatal care (NICU), and trains the next generation of healthcare professionals through rigorous hands-on practical education.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#8B0000]">17+ Years</p>
                  <p className="text-slate-500 text-xs font-medium">Healthcare Legacy</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#8B0000]">100 Beds</p>
                  <p className="text-slate-500 text-xs font-medium">Multi-Speciality Facility</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <Image
                src="/images/in-operation-1.jpg"
                alt="Utkarsh Hospital Operation Theatre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-base">Modern Hospital Infrastructure</p>
                  <p className="text-xs text-slate-200">Modular operation theatres & advanced patient care facilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Utkarsh Stands Out</h2>
            <p className="text-slate-500 text-sm mt-2">Built on clinical excellence, state-of-the-art facilities, and experienced leadership.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#8B0000] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mt-20">
          <Leadership />
        </section>

        {/* 3 Campuses Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl mb-10">
              <span className="text-[#C41E3A] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Our 3 Campuses
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-3">Integrated Infrastructure Across Kanpur</h2>
              <p className="text-slate-400 text-sm mt-2">
                Designed to provide seamless hospital services to patients and modern academic spaces for nursing and paramedical students.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {campuses.map((c, i) => (
                <div key={i} className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/60">
                  <div className="flex items-center gap-2 text-[#C41E3A] font-semibold text-xs mb-2">
                    <MapPin className="w-4 h-4" />
                    {c.location}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{c.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{c.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-red-400" />
                <p className="text-slate-300 text-sm font-medium">Hospital OPD & Emergency: Available 24 Hours / 7 Days</p>
              </div>
              <Link
                href="/courses#contact"
                className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#700000] transition-colors"
              >
                Contact Admissions & OPD <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
