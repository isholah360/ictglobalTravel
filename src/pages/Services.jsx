import { ArrowUpRight, Plane, Building2, Bus, BookOpenCheck, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import PackageCard from '../components/PackageCard'
import { packages } from '../data'

const services = [
  [Plane,'Travel coordination','Discuss travel windows and flight arrangements with our team.'],
  [Building2,'Accommodation planning','Understand available accommodation options and their distance from key sites.'],
  [Bus,'Ground transfers','Ask about airport transfers and transport between destinations.'],
  [BookOpenCheck,'Preparation guidance','Get a practical checklist and guidance on preparing for your journey.'],
]

export default function Services() {
  return (
    <>
      <section className="inner-hero"><div className="inner-hero-image" style={{backgroundImage:"linear-gradient(90deg,rgba(5,28,24,.94),rgba(5,28,24,.48)),url('https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=2200&q=85')"}}/><div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-44 sm:px-8 sm:pb-28"><p className="eyebrow text-gold">Our services</p><h1 className="mt-5 max-w-3xl font-display text-6xl leading-[.98] text-white sm:text-8xl">Every detail,<br /><em className="text-gold">considered.</em></h1><p className="mt-6 max-w-xl text-base leading-7 text-white/65">Explore support options for your pilgrimage and find out what to ask before making a booking.</p></div></section>
      <section className="section-pad bg-ivory"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><SectionHeading eyebrow="Support for your journey" title="Thoughtful support, from planning to return" text="Your needs and the available arrangements may vary by season. Speak with our team for current details and a written breakdown of each package." /></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2">{services.map(([Icon,title,desc],i)=><Reveal delay={i*.08} key={title}><div className="flex gap-5 rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-emerald/8 text-emerald"><Icon size={22}/></span><div><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/60">{desc}</p></div></div></Reveal>)}</div></div></section>
      <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><SectionHeading eyebrow="Explore packages" title="A starting point for your plans" text="These sample package cards are placeholders. Replace them with confirmed dates, prices, inclusions and availability before launch." /></Reveal><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{packages.map((item,i)=><PackageCard item={item} index={i} key={item.name}/>)}</div><div className="mt-8 rounded-2xl border border-gold/40 bg-ivory p-6"><p className="flex items-start gap-3 text-sm leading-6 text-ink/70"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald" size={19}/> Before paying, request written confirmation of the total price, inclusions, exclusions, cancellation terms, accommodation details and official travel requirements.</p></div></div></section>
      <section className="bg-emerald px-5 py-16 text-center sm:px-8"><Reveal><h2 className="font-display text-4xl text-white sm:text-5xl">Not sure which option fits?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">Tell us what matters to you and we'll help you understand the options currently available.</p><Link to="/contact" className="btn-gold mt-7">Discuss your needs <ArrowUpRight size={16}/></Link></Reveal></section>
    </>
  )
}
