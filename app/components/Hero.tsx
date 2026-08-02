'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Calendar, BedDouble, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const stats = [
  { icon: Calendar, value: '17+', label: 'Years of Trust' },
  { icon: BedDouble, value: '100', label: 'Bed Hospital' },
  { icon: Users, value: '3', label: 'Campuses' },
  { icon: Clock, value: '24/7', label: 'Emergency' },
]

const doctors = [
  {
    name: 'Dr. Rajesh Trivedi',
    title: 'Chairman & Founder',
    image: '/images/dr-rajesh-trivedi.jpg',
  },
  {
    name: 'Dr. Yashashwini Trivedi',
    title: 'Gynaecologist',
    image: '/images/dr-yashashwini-trivedi-gynecologist.jpg',
  },
  {
    name: 'Mrs. Vidyotma Trivedi',
    title: 'Co-Chairman & Co-Founder',
    image: '/images/mrs-vidyotma-trivedi-cochairman-and-cofounder.jpg',
  },
  {
    name: 'Mr. Krishna Tiwari',
    title: 'Hospital Manager',
    image: '/images/mr-krishna-tiwari-manager.jpg',
  },
]

/* ─── stagger helpers ──────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden pt-[70px] flex items-center"
    >
      {/* ── Background accents ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle dot-grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#8B0000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Crimson left stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8B0000] via-[#C41E3A]/70 to-transparent" />

        {/* Warm glow top-right */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-red-50/80 blur-3xl" />
        {/* Warm glow bottom-left */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rose-50/60 blur-3xl" />
      </div>

      {/* ── Main grid ───────────────────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Text content ─────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            {/* Badge */}
            <motion.div variants={slideUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#8B0000] text-[11px] font-black tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] animate-pulse" />
                Since 2007 · Naubasta, Kanpur
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideUp}
              className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-slate-900 leading-[1.05] tracking-tight"
            >
              Utkarsh{' '}
              <span className="relative inline-block text-[#8B0000]">
                Hospital
                {/* Underline squiggle */}
                <svg
                  viewBox="0 0 220 8"
                  fill="none"
                  className="absolute -bottom-1 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q55 1 110 5 Q165 9 218 4"
                    stroke="#8B0000"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
              {' '}&{' '}
              <br className="hidden sm:block" />
              College
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={slideUp}
              className="text-[#8B0000] text-xl sm:text-2xl font-bold italic"
            >
              "Touching Lives Forever"
            </motion.p>

            {/* Body */}
            <motion.p
              variants={slideUp}
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              A trusted multi-speciality hospital and healthcare education institute in Kanpur,
              delivering compassionate care and quality nursing & paramedical education since 2007.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-3">
              <Link
                href="/courses#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#8B0000] text-white text-sm font-bold shadow-lg shadow-red-900/20 hover:bg-[#700000] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-900/25 active:scale-95 transition-all duration-150 overflow-hidden group/btn"
              >
                {/* shine sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] group-hover/btn:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <Phone className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Book Appointment</span>
              </Link>
              <Link
                href="/courses"
                className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#8B0000] text-[#8B0000] text-sm font-bold hover:bg-red-50 active:scale-95 transition-all duration-150 overflow-hidden group/btn2"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] group-hover/btn2:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-[#8B0000]/10 to-transparent" />
                <span className="relative z-10">Explore Courses</span>
              </Link>
            </motion.div>

            {/* Location + phone */}
            <motion.div variants={slideUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
                Naubasta, Kanpur
              </span>
              <span className="hidden sm:block w-px h-4 bg-slate-200" />
              <a href="tel:9532700007" className="flex items-center gap-1.5 hover:text-[#8B0000] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#8B0000]" />
                9532700007
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center py-3.5 px-3 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-200 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-[#8B0000] flex items-center justify-center mb-2 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[#8B0000] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none">{value}</p>
                  <p className="text-slate-500 text-[11px] font-semibold mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo mosaic ─────────────────────────────────── */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 grid-rows-[1.35fr_1fr] gap-3 h-[560px]">

              {/* Main OT image — spans 2 cols, row 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.2, ease }}
                className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="/images/in-operation-1.jpg"
                  alt="Utkarsh Hospital Operation Theatre"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                  sizes="(max-width: 1280px) 40vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white text-xs font-semibold opacity-90">State-of-the-art Operation Theatre</p>
                </div>

                {/* Logo badge inside OT image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5, ease }}
                  className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-1.5 shadow-lg"
                >
                  <Image
                    src="/images/logo-with-bg.jpg"
                    alt="Utkarsh Logo"
                    width={52}
                    height={52}
                    className="w-13 h-13 object-contain rounded-lg"
                  />
                </motion.div>
              </motion.div>

              {/* Dr. Rajesh — col 3, row 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32, ease }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-default"
              >
                <Image
                  src="/images/dr-rajesh-trivedi.jpg"
                  alt="Dr. Rajesh Trivedi"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-[#8B0000]/90 transition-all duration-350" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-black leading-tight">Dr. Rajesh Trivedi</p>
                  <p className="text-red-200 text-[9px] font-semibold mt-0.5">Chairman & Founder</p>
                </div>
              </motion.div>

              {/* Dr. Yashashwini — col 1, row 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.44, ease }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-default"
              >
                <Image
                  src="/images/dr-yashashwini-trivedi-gynecologist.jpg"
                  alt="Dr. Yashashwini Trivedi"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-[#8B0000]/90 transition-all duration-350" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-black leading-tight">Dr. Yashashwini Trivedi</p>
                  <p className="text-red-200 text-[9px] font-semibold mt-0.5">Gynaecologist</p>
                </div>
              </motion.div>

              {/* Mrs. Vidyotma — col 2, row 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.56, ease }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-default"
              >
                <Image
                  src="/images/mrs-vidyotma-trivedi-cochairman-and-cofounder.jpg"
                  alt="Mrs. Vidyotma Trivedi"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-[#8B0000]/90 transition-all duration-350" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-black leading-tight">Mrs. Vidyotma Trivedi</p>
                  <p className="text-red-200 text-[9px] font-semibold mt-0.5">Co-Chairman & Co-Founder</p>
                </div>
              </motion.div>

              {/* Mr. Krishna — col 3, row 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.68, ease }}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-default"
              >
                <Image
                  src="/images/mr-krishna-tiwari-manager.jpg"
                  alt="Mr. Krishna Tiwari"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-[#8B0000]/90 transition-all duration-350" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-black leading-tight">Mr. Krishna Tiwari</p>
                  <p className="text-red-200 text-[9px] font-semibold mt-0.5">Hospital Manager</p>
                </div>
              </motion.div>

            </div>

            {/* ESTD badge — floats outside the grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease }}
              className="absolute -bottom-4 left-0 bg-[#8B0000] rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-white font-black text-lg tracking-tight leading-none">ESTD. 2007</p>
              <p className="text-red-200 text-[10px] font-semibold mt-0.5">Touching Lives Forever</p>
            </motion.div>
          </div>
        </div>

        {/* ── Mobile doctor strip ──────────────────────────────────── */}
        <div className="lg:hidden mt-8 border-t border-slate-100 pt-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-xs font-black text-slate-800 uppercase tracking-wider">Leadership & Specialists</p>
            <span className="text-[10px] text-[#8B0000] font-bold">Swipe &rarr;</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide px-1">
            {doctors.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4, ease }}
                className="shrink-0 snap-start w-36 bg-white rounded-2xl p-2 border border-slate-200/80 shadow-sm"
              >
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-2">
                  <Image src={d.image} alt={d.name} fill className="object-cover object-top" sizes="144px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2">
                    <p className="text-white text-[11px] font-black leading-tight line-clamp-1">{d.name}</p>
                  </div>
                </div>
                <p className="text-[#8B0000] text-[10px] font-bold leading-tight line-clamp-1">{d.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
