import { ArrowDown, ArrowRight, ArrowUpRight, Check, Compass, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import GeometricScene from '../components/GeometricScene'
import SectionHeading from '../components/SectionHeading'
import PackageCard from '../components/PackageCard'
import WhatsAppLink from '../components/WhatsAppLink'
import { packages } from '../data'
import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'

const heroImage = 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&q=90'


const heroSlides = [
  {
    eyebrow: 'A journey of faith, guided with care',
    title: 'Your sacred',
    accent: 'beautifully',
    ending: 'guided.',
    description:
      'Thoughtfully planned Hajj and Umrah experiences, with attentive support at every step of your pilgrimage.',
    image:
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2400&q=90',
    alt: 'The sacred mosque in Makkah',
    position: 'center',
  },
  {
    eyebrow: 'Find stillness in the sacred city',
    title: 'Closer to',
    accent: 'what matters',
    ending: 'most.',
    description:
      'Make room for reflection, devotion and unforgettable moments with a journey planned around your needs.',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2400&q=90',
    alt: 'Sacred architecture in the holy cities',
    position: 'center',
  },
  {
    eyebrow: 'Every step, thoughtfully considered',
    title: 'Your pilgrimage',
    accent: 'your purpose',
    ending: 'our care.',
    description:
      'From your first enquiry to your return home, find guidance and clarity for your Hajj or Umrah journey.',
    image:
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=2400&q=90',
    alt: 'An atmospheric view of Islamic architecture',
    position: 'center',
  },
]

export default function Home() {
  return (
    <>
      
      
      {/* <section className="hero-section relative flex min-h-[780px] items-end overflow-hidden bg-emerald pb-16 pt-36 sm:min-h-[850px] sm:pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="The sacred mosque in Makkah" fetchPriority="high" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061e1a]/95 via-[#061e1a]/65 to-[#061e1a]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061e1a]/80 via-transparent to-[#061e1a]/35" />
        </div>
        <div className="absolute right-[6%] top-[22%] hidden h-80 w-80 opacity-70 lg:block"><GeometricScene /></div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl">
              <span className="size-1.5 rounded-full bg-gold" /> A journey of faith, guided with care
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="font-display text-6xl leading-[.94] tracking-tight text-white sm:text-7xl lg:text-[6.8rem]">
              Your sacred<br />journey, <em className="font-normal text-gold">beautifully</em><br />guided.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }} className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Thoughtfully planned Hajj and Umrah experiences, with attentive support at every step of your pilgrimage.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="btn-gold">Explore our journeys <ArrowUpRight size={17} /></Link>
              <WhatsAppLink className="btn-glass"><span>Speak with our team</span><ArrowRight size={16} /></WhatsAppLink>
            </motion.div>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
              <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Personal guidance</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Clear travel information</span>
              <span className="flex items-center gap-2"><Check size={15} className="text-gold" /> Support from enquiry to return</span>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .4 }} className="glass-panel hidden max-w-sm justify-self-end p-6 lg:block">
            <p className="eyebrow text-gold">Your next chapter</p>
            <p className="mt-3 font-display text-3xl leading-tight text-white">Make space for what matters most.</p>
            <p className="mt-3 text-sm leading-6 text-white/60">Tell us what you have in mind. We'll help you understand the next steps.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-gold">Start a conversation <ArrowUpRight size={16} /></Link>
          </motion.div>
        </div>
        <a href="#welcome" className="absolute bottom-7 right-7 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 md:flex">Scroll to discover <ArrowDown size={15} /></a>
      </section> */}

      <HeroSection slides={heroSlides} />

      <section id="welcome" className="section-pad bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">More than a trip</p>
            <h2 className="font-display text-5xl leading-[1.02] text-ink sm:text-6xl">A meaningful journey deserves <em className="text-emerald">thoughtful care.</em></h2>
          </Reveal>
          <Reveal delay={.12}>
            <p className="text-base leading-8 text-ink/65">Your pilgrimage is deeply personal. Our role is to help make the practical details clearer, so you can prepare with confidence and focus on the purpose of your journey.</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-3 border-b border-gold pb-2 text-sm font-semibold text-emerald">Discover our approach <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-3">
          {[
            [Compass, 'Guidance at every step', 'Understand the process with clear information and thoughtful preparation.'],
            [HeartHandshake, 'Care that feels personal', 'A human team ready to listen to your questions and travel preferences.'],
            [ShieldCheck, 'Clarity you can trust', 'Straightforward communication about package inclusions and next steps.'],
          ].map(([Icon, title, text], i) => <Reveal key={title} delay={i * .1}><div className="feature-card h-full"><span className="mb-7 grid size-12 place-items-center rounded-full border border-gold/50 text-emerald"><Icon size={22} strokeWidth={1.5} /></span><h3 className="font-display text-2xl text-ink">{title}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{text}</p></div></Reveal>)}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <Reveal><SectionHeading eyebrow="Journeys to explore" title={<>Find the journey<br /><em className="text-emerald">that speaks to you.</em></>} text="Every traveller has different needs. Explore our sample journeys, then speak with us about current availability and tailored options." /></Reveal>
            <Reveal delay={.1}><Link to="/services" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald">View all services <ArrowUpRight size={16} /></Link></Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{packages.map((item, i) => <PackageCard key={item.name} item={item} index={i} />)}</div>
          <p className="mt-5 text-xs leading-5 text-ink/45">Package examples are illustrative. Confirm prices, dates, eligibility, availability and inclusions directly with the agency before publishing.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-emerald px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute -right-20 -top-32 size-96 rounded-full border border-white/10" /><div className="absolute -right-4 -top-16 size-64 rounded-full border border-gold/20" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.65fr] lg:items-center">
          <Reveal><SectionHeading light eyebrow="Begin with a conversation" title={<>The first step can be<br /><em className="text-gold">a simple hello.</em></>} text="Share your questions, preferred travel period or the kind of support you need. We'll help you work out what comes next." /></Reveal>
          <Reveal delay={.15}><div className="glass-panel p-7 sm:p-9"><Sparkles className="text-gold" size={25} /><h3 className="mt-5 font-display text-3xl text-white">Let's plan with purpose.</h3><p className="mt-3 text-sm leading-6 text-white/60">No pressure — just clear answers to help you take the next step.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link to="/contact" className="btn-gold">Contact our team <ArrowUpRight size={16} /></Link><Link to="/help" className="btn-glass">Visit help centre</Link></div></div></Reveal>
        </div>
      </section>
    </>
  )
}
