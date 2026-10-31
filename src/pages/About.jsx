import { ArrowUpRight, HeartHandshake, Compass, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-image" style={{ backgroundImage: "linear-gradient(90deg,rgba(5,28,24,.94),rgba(5,28,24,.5)),url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=2200&q=85')" }} />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-44 sm:px-8 sm:pb-28">
          <p className="eyebrow text-gold">Our story</p><h1 className="mt-5 max-w-3xl font-display text-6xl leading-[.98] text-white sm:text-8xl">Service with heart.<br /><em className="text-gold">Purpose in every step.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65">We believe the practical side of pilgrimage should be met with care, clarity and respect for the significance of the journey.</p>
        </div>
      </section>
      <section className="section-pad bg-ivory"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center"><Reveal><SectionHeading eyebrow="Who we are" title={<>Helping you focus on<br /><em className="text-emerald">what matters most.</em></>} text="Sacred Journeys is a Hajj and Umrah agency concept built around thoughtful planning, personal support and transparent communication. Replace this section with your agency's real story, history and credentials." /></Reveal><Reveal delay={.12}><div className="rounded-3xl bg-emerald p-8 text-white sm:p-10"><p className="eyebrow text-gold">Our promise</p><p className="mt-5 font-display text-3xl leading-snug">To treat every enquiry with care, every detail with attention, and every pilgrim with respect.</p><div className="mt-7 h-px bg-white/15" /><p className="mt-5 text-sm leading-7 text-white/60">Add your real mission statement, team details, official registration and relevant travel credentials here. Do not publish unverified claims or statistics.</p></div></Reveal></div></section>
      <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal><SectionHeading centered eyebrow="What guides us" title="Our values, in practice" text="The principles that shape how we communicate, plan and support your journey." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{[[HeartHandshake,'Compassion','Listen carefully and respond to each pilgrim as an individual.'],[ShieldCheck,'Transparency','Explain package inclusions, requirements and costs clearly.'],[Compass,'Guidance','Help travellers understand the process before they make decisions.']].map(([Icon,title,desc],i)=><Reveal delay={i*.1} key={title}><div className="feature-card h-full"><Icon className="mb-6 text-emerald" size={27} strokeWidth={1.5}/><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{desc}</p></div></Reveal>)}</div></div></section>
      <section className="bg-emerald px-5 py-16 text-center sm:px-8"><Reveal><h2 className="font-display text-4xl text-white sm:text-5xl">Let us help you take the next step.</h2><Link to="/contact" className="btn-gold mt-7">Talk to our team <ArrowUpRight size={16}/></Link></Reveal></section>
    </>
  )
}
