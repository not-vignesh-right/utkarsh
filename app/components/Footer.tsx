import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Album / Gallery', href: '/album' },
  { label: 'About Us', href: '/about' },
  { label: 'Courses & Services', href: '/courses' },
  { label: 'Contact Us', href: '/courses#contact' },
]

const courses = [
  'BSc Nursing (BScN)',
  'GNM Nursing',
  'Diploma in Optometry',
  'Diploma in EMT',
  'Diploma in OTT',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Top CTA strip */}
      <div className="bg-[#8B0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Need emergency care or admission enquiry?</p>
            <p className="text-red-200 text-sm">Our team is available 24 hours, 7 days a week.</p>
          </div>
          <a
            href="tel:9532700007"
            className="flex-shrink-0 flex items-center gap-2.5 bg-white text-[#8B0000] px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Call 9532700007
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#8B0000]/40 shadow-lg flex-shrink-0 bg-white">
                <Image
                  src="/images/logo-with-bg.jpg"
                  alt="Utkarsh Hospital & College Crest"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="leading-tight">
                <p className="text-white font-black text-sm tracking-wide">UTKARSH</p>
                <p className="text-slate-400 text-xs font-medium">Hospital & College</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A trusted multi-speciality hospital and healthcare education institution serving Kanpur since 2007.
            </p>
            <p className="text-[#C41E3A] italic font-semibold text-sm">"Touching Lives Forever"</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-slate-700">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-slate-700">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1 h-1 bg-[#C41E3A] rounded-full flex-shrink-0" />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5 pb-2 border-b border-slate-700">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Naubasta, Kanpur<br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:9532700007"
                    className="text-white font-semibold text-sm hover:text-red-300 transition-colors"
                  >
                    9532700007
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">24/7 Care For You</p>
                </div>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 bg-green-900/30 border border-green-700/40 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 text-xs font-semibold">24/7 Emergency Care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Utkarsh Hospital & College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
