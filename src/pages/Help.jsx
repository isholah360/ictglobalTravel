import { useState } from 'react'
import { Search, Plus, Minus, MessageCircle, FileCheck, CalendarDays, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data'
import WhatsAppLink from '../components/WhatsAppLink'

export default function Help() {
  const [query,setQuery] = useState('')
  const [active,setActive] = useState(0)
  const filtered = faqs.filter(f => `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <section className="inner-hero"><div className="inner-hero-image" style={{backgroundImage:"linear-gradient(90deg,rgba(5,28,24,.94),rgba(5,28,24,.58)),url('https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=2200&q=85')"}}/><div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-44 sm:px-8 sm:pb-28"><p className="eyebrow text-gold">Help centre</p><h1 className="mt-5 max-w-3xl font-display text-6xl leading-[.98] text-white sm:text-8xl">Clear answers.<br /><em className="text-gold">Peace of mind.</em></h1><p className="mt-6 max-w-xl text-base leading-7 text-white/65">Find answers to common questions and know where to turn when you need personal guidance.</p></div></section>
      <section className="section-pad bg-ivory"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]"><div><Reveal><SectionHeading eyebrow="How can we help?" title={<>Answers for<br /><em className="text-emerald">your next step.</em></>} text="Search common questions or browse the topics below. Requirements can change, so confirm important details with the agency and official sources." /></Reveal><div className="mt-8 space-y-3"><div className="help-topic"><FileCheck className="text-emerald" size={20}/><div><h3 className="text-sm font-semibold">Documents & preparation</h3><p className="mt-1 text-xs leading-5 text-ink/55">Checklists and travel readiness</p></div></div><div className="help-topic"><CalendarDays className="text-emerald" size={20}/><div><h3 className="text-sm font-semibold">Dates & bookings</h3><p className="mt-1 text-xs leading-5 text-ink/55">Planning and availability</p></div></div><div className="help-topic"><MessageCircle className="text-emerald" size={20}/><div><h3 className="text-sm font-semibold">Personal assistance</h3><p className="mt-1 text-xs leading-5 text-ink/55">Speak to a member of our team</p></div></div></div></div>
      <Reveal delay={.1}><div className="rounded-3xl border border-ink/10 bg-white p-5 sm:p-8"><label className="flex items-center gap-3 rounded-xl border border-ink/10 bg-ivory px-4 py-3"><Search size={18} className="text-ink/45"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions..." className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"/></label><div className="mt-5 divide-y divide-ink/10">{filtered.map((faq,i)=><div key={faq.q} className="py-5"><button onClick={()=>setActive(active===i?-1:i)} className="flex w-full items-start justify-between gap-5 text-left"><span className="font-display text-xl text-ink sm:text-2xl">{faq.q}</span><span className="mt-1 text-emerald">{active===i?<Minus size={18}/>:<Plus size={18}/>}</span></button><AnimatePresence initial={false}>{active===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-2xl pt-4 text-sm leading-7 text-ink/60">{faq.a}</p></motion.div>}</AnimatePresence></div>)}{filtered.length===0&&<p className="py-8 text-sm text-ink/60">No matching questions. Try another search or contact our team.</p>}</div></div></Reveal></div></section>
      <section className="bg-emerald px-5 py-16 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><p className="eyebrow text-gold">Still need help?</p><h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">We're happy to talk it through.</h2></div><div className="flex flex-wrap gap-3"><Link to="/contact" className="btn-gold">Contact us <ArrowUpRight size={16}/></Link><WhatsAppLink className="btn-glass">WhatsApp us</WhatsAppLink></div></div></section>
    </>
  )
}
