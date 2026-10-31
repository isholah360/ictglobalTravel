import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#071f1b] px-5 pb-8 pt-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">Thoughtfully guided journeys for moments of faith, reflection and connection.</p>
            <div className="mt-5 flex gap-3">
              <a className="social-link" href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a>
              <a className="social-link" href="https://facebook.com" aria-label="Facebook"><Facebook size={17} /></a>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Explore</p>
            <div className="flex flex-col gap-3 text-sm text-white/65">
              <Link to="/about" className="hover:text-gold">Our story</Link><Link to="/services" className="hover:text-gold">Hajj & Umrah services</Link><Link to="/help" className="hover:text-gold">Help centre</Link><Link to="/contact" className="hover:text-gold">Contact us</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <div className="flex flex-col gap-4 text-sm text-white/65">
              <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> hello@ictglobaltravel.com</p>
              <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +234 703 784 7763</p>
              <p className="flex items-center gap-3"><MapPin size={16} className="text-gold" /> Nigeria</p>
            </div>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-gold">Speak with our team <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Sacred Journeys. Replace with your registered agency name.</p>
          <p>Travel with care. Journey with purpose.</p>
        </div>
      </div>
    </footer>
  )
}
