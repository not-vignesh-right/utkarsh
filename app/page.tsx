import Link from 'next/link'
import Image from 'next/image'
import { Camera, ArrowRight, Award, GraduationCap, Building2, Phone } from 'lucide-react'
import { Navbar } from '@/app/components/Navbar'
import { Hero } from '@/app/components/Hero'
import { Services } from '@/app/components/Services'
import { Leadership } from '@/app/components/Leadership'
import { Footer } from '@/app/components/Footer'

const featuredAlbumItems = [
  {
    title: 'Neonatal ICU (NICU)',
    category: 'NICU & ICU',
    src: '/images/nicu.jpg',
  },
  {
    title: 'Modular Operation Theatre',
    category: 'Operation OT',
    src: '/images/in-operation-1.jpg',
  },
  {
    title: 'Surgical Team in Action',
    category: 'Operation OT',
    src: '/images/in-operation-2.jpg',
  },
  {
    title: 'Clinical Procedure & Care',
    category: 'Operation OT',
    src: '/images/inoperationig2.jpg',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services & Courses Teaser */}
      <Services />

      {/* 3. Featured Campus Gallery Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-3 border border-red-100">
                <Camera className="w-3.5 h-3.5" />
                Featured Campus Album
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Inside Utkarsh Hospital & Campuses
              </h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl">
                Take a visual tour of our modern operating suites, intensive care units, and campus practical training facilities.
              </p>
            </div>
            <Link
              href="/album"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B0000] text-white text-xs font-bold hover:bg-[#700000] transition-colors shrink-0 shadow-sm"
            >
              Browse Full Photo Album &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAlbumItems.map((item, i) => (
              <Link
                key={i}
                href="/album"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase font-bold text-red-300 tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm group-hover:text-red-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Institutional Story Section */}
      <section className="py-20 bg-slate-50">
        <Leadership />
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#8B0000] text-[#8B0000] text-xs font-bold hover:bg-red-50 transition-colors"
          >
            Learn More About Our 17-Year History <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </main>
  )
}
