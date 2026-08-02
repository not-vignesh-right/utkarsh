'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Maximize2, Sparkles, Filter, CheckCircle2 } from 'lucide-react'
import { Navbar } from '@/app/components/Navbar'
import { Footer } from '@/app/components/Footer'
import { SectionHeader } from '@/app/components/ui/SectionHeader'
import { ImageLightbox, GalleryItem } from '@/app/components/ui/ImageLightbox'

const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Neonatal ICU (NICU) Unit',
    category: 'NICU & ICU',
    src: '/images/nicu.jpg',
    description: 'State-of-the-art Neonatal Intensive Care Unit equipped with advanced incubators and vital monitoring systems.',
  },
  {
    id: '2',
    title: 'Modular Operation Theatre',
    category: 'Operation OT',
    src: '/images/in-operation-1.jpg',
    description: 'Sterile high-precision operating room for complex general, gynaecological, and emergency surgeries.',
  },
  {
    id: '3',
    title: 'Surgical Team in Action',
    category: 'Operation OT',
    src: '/images/in-operation-2.jpg',
    description: 'Expert surgeons performing specialized procedure under high-efficiency shadowless OT lights.',
  },
  {
    id: '4',
    title: 'Advanced Surgical Suite',
    category: 'Operation OT',
    src: '/images/inoperationig.jpg',
    description: 'Modern patient monitoring and laparoscopic surgical setup inside our hospital campus.',
  },
  {
    id: '5',
    title: 'Clinical Procedure & Care',
    category: 'Operation OT',
    src: '/images/inoperationig2.jpg',
    description: 'Hands-on clinical treatment performed by experienced medical professionals.',
  },
  {
    id: '6',
    title: 'Hospital & College Faculty Group',
    category: 'Leadership & Events',
    src: '/images/group-pic.jpg',
    description: 'Dedicated team of doctors, nursing instructors, and administrative managers at Utkarsh Hospital & College.',
  },
  {
    id: '7',
    title: 'Dr. Rajesh Trivedi',
    category: 'Leadership & Events',
    src: '/images/dr-rajesh-trivedi.jpg',
    description: 'Chairman & Founder leading Utkarsh Hospital and Nursing College since 2007.',
  },
  {
    id: '8',
    title: 'Dr. Yashashwini Trivedi',
    category: 'Leadership & Events',
    src: '/images/dr-yashashwini-trivedi-gynecologist.jpg',
    description: 'Senior Gynaecologist & Obstetrician heading women’s healthcare services.',
  },
  {
    id: '9',
    title: 'Mrs. Vidyotma Trivedi',
    category: 'Leadership & Events',
    src: '/images/mrs-vidyotma-trivedi-cochairman-and-cofounder.jpg',
    description: 'Co-Chairman & Co-Founder guiding academic excellence and student development.',
  },
  {
    id: '10',
    title: 'Mr. Krishna Tiwari',
    category: 'Leadership & Events',
    src: '/images/mr-krishna-tiwari-manager.jpg',
    description: 'Hospital Manager overseeing 24/7 patient services and hospital operations.',
  },
  {
    id: '11',
    title: 'Community Healthcare Drive',
    category: 'Leadership & Events',
    src: '/images/poster-kannada.jpg',
    description: 'Awareness banner and health campaign organized by Utkarsh healthcare team.',
  },
  {
    id: '12',
    title: 'Utkarsh Institutional Crest',
    category: 'Leadership & Events',
    src: '/images/logo-with-bg.jpg',
    description: 'Official emblem of Utkarsh Multi-Speciality Hospital & Nursing/Paramedical College.',
  },
]

const categories = ['All', 'Operation OT', 'NICU & ICU', 'Leadership & Events']

export function AlbumContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Banner Section */}
        <section className="bg-gradient-to-b from-[#8B0000] to-[#700000] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-red-100 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <Camera className="w-3.5 h-3.5" />
              Official Campus Gallery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Life at Utkarsh Hospital & College
            </h1>
            <p className="mt-4 text-red-100 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our modern modular operation theatres, specialized NICU units, practical training labs, and vibrant campus moments.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#8B0000] text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-red-50 hover:text-[#8B0000]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                onClick={() => setSelectedIndex(galleryData.indexOf(item))}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Fullscreen
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold rounded-md shadow-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#8B0000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        <ImageLightbox
          items={galleryData}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onSelectIndex={(index) => setSelectedIndex(index)}
        />
      </main>

      <Footer />
    </div>
  )
}
