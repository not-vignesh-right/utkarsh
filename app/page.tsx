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
    title: 'Modular Operation Suite',
    category: 'Operation OT',
    src: '/images/in-operation-2.jpg',
  },
  {
    title: 'Clinical Procedure & Care',
    category: 'Operation OT',
    src: '/images/inoperationig.jpg',
  },
  {
    title: 'Community Health Campaign',
    category: 'Community & Events',
    src: '/images/poster-kannada.jpg',
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

      {/* 2.5 Faculty & Medical Team Showcase Banner */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-red-300 text-xs font-bold uppercase tracking-wider border border-white/15">
                <Award className="w-3.5 h-3.5 text-red-400" />
                Faculty & Healthcare Leadership
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Guided by Experienced Doctors & Dedicated Educators
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Utkarsh Hospital & College, our strength lies in our unified team of senior physicians, clinical nursing instructors, and healthcare administrators working together to deliver top-tier medical services and hands-on clinical training.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70">
                  <p className="text-xl font-black text-red-400">17+ Years</p>
                  <p className="text-slate-400 text-xs font-semibold mt-0.5">Clinical & Academic Excellence</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70">
                  <p className="text-xl font-black text-red-400">100% Mentorship</p>
                  <p className="text-slate-400 text-xs font-semibold mt-0.5">Hands-on Hospital Training</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#8B0000] text-white text-xs font-bold hover:bg-[#700000] transition-colors shadow-lg shadow-red-900/30"
                >
                  Learn About Our Faculty & Founders <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Featured Group Photo Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 aspect-[16/10]">
                <Image
                  src="/images/group-pic.jpg"
                  alt="Utkarsh Hospital & College Faculty Group"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs uppercase font-bold text-red-300 tracking-widest mb-1">
                    Official Institutional Group Photo
                  </span>
                  <h3 className="text-white font-black text-lg sm:text-xl">
                    Utkarsh Hospital & College Faculty
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 leading-snug">
                    Dedicated team of doctors, nursing instructors, and administrative managers at Utkarsh Hospital & College.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
