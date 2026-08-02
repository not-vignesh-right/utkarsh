'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Stethoscope,
  BookOpen,
  CheckCircle2,
  Phone,
  MapPin,
  Send,
  Baby,
  Activity,
  Heart,
  Clock,
  ShieldCheck
} from 'lucide-react'
import { Navbar } from '@/app/components/Navbar'
import { Footer } from '@/app/components/Footer'
import { siteConfig } from '@/lib/site-config'

const faqs = [
  {
    question: 'What is the admission process for nursing and paramedical courses?',
    answer: 'Fill out the enquiry form on this page or call/WhatsApp us directly. Our admissions team will guide you through eligibility, document verification, and seat confirmation.',
  },
  {
    question: 'Do I need to book an appointment for OPD consultation?',
    answer: 'Walk-ins are welcome during OPD hours, but calling ahead helps us confirm the specialist you need is available.',
  },
  {
    question: 'Is emergency care available at night and on holidays?',
    answer: 'Yes, our Emergency & Trauma Care unit operates 24 hours a day, 7 days a week, including all holidays.',
  },
  {
    question: 'Are hostel facilities available for nursing/paramedical students?',
    answer: 'For hostel availability, fees, and other admission details, please contact our admissions team directly via the enquiry form or phone.',
  },
]

const nursingCourses = [
  {
    code: 'BScN',
    title: 'BSc Nursing',
    duration: '4 Years Degree',
    eligibility: '10+2 with Physics, Chemistry & Biology',
    description: 'Comprehensive degree course preparing students for high-level clinical nursing, patient care management, and hospital operations.',
  },
  {
    code: 'GNM',
    title: 'General Nursing & Midwifery',
    duration: '3 Years Diploma',
    eligibility: '10+2 (Science / Arts stream with minimum 40%)',
    description: 'Practical-focused diploma training in maternal health, bedside patient care, clinical procedures, and emergency assistance.',
  },
]

const paramedicalCourses = [
  {
    code: 'D.OPT',
    title: 'Diploma in Optometry',
    duration: '2 Years Diploma',
    description: 'Specialized training in eye examination, refractive error correction, optical instruments, and assisting ophthalmologists.',
  },
  {
    code: 'D.EMT',
    title: 'Diploma in Emergency Medical Technology',
    duration: '2 Years Diploma',
    description: 'Fast-paced clinical training for trauma care, emergency resuscitation, cardiac support, and ambulance triage.',
  },
  {
    code: 'D.OTT',
    title: 'Diploma in Operation Theatre Technology',
    duration: '2 Years Diploma',
    description: 'Expert instruction in managing sterile surgical suites, operating room equipment, anesthesia setup, and surgical tools.',
  },
]

const hospitalDepartments = [
  {
    title: 'General Medicine & Surgery',
    icon: Stethoscope,
    description: 'Outpatient consultation (OPD), inpatient surgical procedures, post-op care, and diagnostic evaluations.',
  },
  {
    title: 'Gynaecology & Obstetrics',
    icon: Heart,
    description: 'Headed by Dr. Yashashwini Trivedi, offering full maternal care, safe delivery rooms, and women’s health consultations.',
  },
  {
    title: 'Neonatal ICU (NICU)',
    icon: Baby,
    description: 'Specialized intensive care for premature and critical newborn babies with 24/7 neonatologist supervision.',
  },
  {
    title: 'Emergency & Trauma Care (24/7)',
    icon: Activity,
    description: 'Round-the-clock emergency casualty, cardiac response, modular operating theatres, and ambulance response.',
  },
]

export function CoursesContent() {
  const [activeTab, setActiveTab] = useState<'all' | 'nursing' | 'paramedical' | 'hospital' | 'contact'>('all')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'College Admission Enquiry',
    courseOrDept: 'BSc Nursing (BScN)',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = [
      `New Enquiry from Website`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Category: ${formData.category}`,
      `Course/Specialty: ${formData.courseOrDept}`,
      formData.message ? `Message: ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-b from-[#8B0000] to-[#700000] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Programs & Medical Services
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Courses & Hospital Specialties
            </h1>
            <p className="mt-3 text-red-100 text-xs sm:text-base max-w-2xl mx-auto">
              Explore our Nursing and Paramedical courses, multi-speciality medical departments, and contact our team for admissions or OPD appointments.
            </p>
          </div>
        </section>

        {/* Mobile Filter Pill Bar */}
        <div className="sticky top-[70px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {[
              { id: 'all', label: 'All Offerings' },
              { id: 'nursing', label: 'Nursing Degree/Diploma' },
              { id: 'paramedical', label: 'Paramedical Courses' },
              { id: 'hospital', label: 'Hospital Specialties' },
              { id: 'contact', label: 'Contact & Inquiry' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any)
                  if (tab.id !== 'all') {
                    const el = document.getElementById(tab.id)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8B0000] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Nursing College Section */}
        <section id="nursing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-[#8B0000] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Nursing College Programs</h2>
              <p className="text-slate-500 text-xs">Affiliated & Recognized Nursing Degree & Diploma Courses</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nursingCourses.map((course) => (
              <div
                key={course.code}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-0 opacity-60" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#8B0000] text-white text-xs font-bold rounded-full">
                      {course.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    <strong className="text-slate-800">Eligibility:</strong> {course.eligibility}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Admissions Open 2026-27
                  </span>
                  <a
                    href="#contact"
                    className="text-[#8B0000] text-xs font-bold hover:underline"
                  >
                    Apply / Enquire Now &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Paramedical College Section */}
        <section id="paramedical" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#8B0000] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Paramedical Diplomas</h2>
              <p className="text-slate-500 text-xs">High-demand technical healthcare career training</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paramedicalCourses.map((course) => (
              <div
                key={course.code}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-red-50 text-[#8B0000] border border-red-100 text-xs font-bold rounded-lg">
                      {course.code}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">{course.duration}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{course.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="text-[#8B0000] text-xs font-bold hover:underline inline-flex items-center gap-1 pt-3 border-t border-slate-100"
                >
                  Enquire for {course.code} &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Hospital Medical Specialties Section */}
        <section id="hospital" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 scroll-mt-24">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-2xl mb-10">
              <span className="text-[#C41E3A] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                100-Bed Multi-Speciality
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-3">Hospital Departments & Specialities</h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Providing specialized healthcare, 24/7 casualty trauma care, and inpatient facilities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hospitalDepartments.map((dept, idx) => {
                const Icon = dept.icon
                return (
                  <div
                    key={idx}
                    className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#8B0000] text-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-white text-base mb-2">{dept.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {dept.description}
                      </p>
                    </div>
                    <span className="text-xs text-red-300 font-medium flex items-center gap-1.5 pt-3 border-t border-slate-700/50">
                      <Clock className="w-3.5 h-3.5 text-red-400" /> 24/7 Available
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. Contact & Inquiry Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid lg:grid-cols-12">

            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#8B0000] to-[#700000] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 text-red-100 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-white/20">
                  Direct Contact & Location
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">Get in Touch With Utkarsh</h2>
                <p className="text-red-100 text-xs sm:text-sm mt-3 leading-relaxed">
                  Have questions about BSc Nursing admissions, GNM intake, paramedical courses, or hospital OPD appointments? Reach out directly.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-red-200 uppercase font-semibold tracking-wider">Phone / WhatsApp</p>
                      <a href="tel:9532700007" className="text-lg font-bold text-white hover:underline">
                        +91 9532700007
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-red-200 uppercase font-semibold tracking-wider">Main Campus Location</p>
                      <p className="text-sm font-semibold text-white">Naubasta, Kanpur, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-red-200 uppercase font-semibold tracking-wider">Hospital Emergency</p>
                      <p className="text-sm font-semibold text-white">24 Hours / 7 Days Casualty Unit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/20 text-xs text-red-200">
                Utkarsh Hospital & Nursing/Paramedical College, Naubasta Kanpur.
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              <h3 className="text-xl font-black text-slate-900 mb-2">Send an Official Inquiry</h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Fill out the details below to request course prospectus or doctor appointment slot.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">WhatsApp Opened!</h4>
                  <p className="text-emerald-700 text-xs mt-2">
                    Thank you, <strong>{formData.name}</strong>. Just hit send in the WhatsApp chat that opened, and our admissions & medical team will get back to you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 text-xs text-emerald-800 font-bold underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="enquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Category
                      </label>
                      <select
                        id="enquiry-category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      >
                        <option value="College Admission Enquiry">College Admission Enquiry</option>
                        <option value="Hospital OPD Appointment">Hospital OPD Appointment</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="enquiry-course" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Course or Specialty
                      </label>
                      <select
                        id="enquiry-course"
                        value={formData.courseOrDept}
                        onChange={(e) => setFormData({ ...formData, courseOrDept: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                      >
                        <option value="BSc Nursing (BScN)">BSc Nursing (BScN)</option>
                        <option value="GNM Nursing">GNM Nursing</option>
                        <option value="Diploma in Optometry (D.OPT)">Diploma in Optometry (D.OPT)</option>
                        <option value="Diploma in EMT (D.EMT)">Diploma in EMT (D.EMT)</option>
                        <option value="Diploma in OTT (D.OTT)">Diploma in OTT (D.OTT)</option>
                        <option value="Gynaecology OPD">Gynaecology OPD</option>
                        <option value="NICU Emergency">NICU Emergency</option>
                        <option value="General Surgery">General Surgery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Additional Details
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      placeholder="Share any specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#8B0000] text-white font-bold text-sm rounded-xl hover:bg-[#700000] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-6 rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 sm:h-80">
            <iframe
              title="Utkarsh Hospital & College Location Map"
              src="https://maps.google.com/maps?q=Utkarsh%20Hospital%20Naubasta%20Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* 5. OPD Timings */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[#8B0000] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">OPD Timings</h3>
                <p className="text-slate-600 text-sm">9:00 AM – 8:00 PM, All Days</p>
                <p className="text-slate-400 text-xs mt-1">Call ahead to confirm doctor availability for your specialty.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[#8B0000] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Emergency & Casualty</h3>
                <p className="text-slate-600 text-sm">Open 24 Hours, 7 Days a Week</p>
                <p className="text-slate-400 text-xs mt-1">Walk-in or call {siteConfig.phone} for immediate assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm mt-2">Common questions about admissions and hospital visits.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-sm text-slate-900 list-none">
                  {faq.question}
                  <span className="text-[#8B0000] shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
                </summary>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
