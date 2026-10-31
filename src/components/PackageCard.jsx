import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export default function PackageCard({ item, index = 0 }) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className="relative h-64 overflow-hidden">
        <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.18em] text-white backdrop-blur-md">{item.type}</span>
        <span className="absolute bottom-4 left-4 text-sm text-white/85">{item.tag}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-ink/50"><Clock3 size={14} /> {item.duration}</div>
        <h3 className="mt-3 font-display text-3xl text-ink">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/60">{item.detail}</p>
        <ul className="mt-5 space-y-2 border-t border-ink/10 pt-4">
          {item.features.map(feature => <li key={feature} className="flex items-center gap-2 text-xs text-ink/65"><span className="size-1.5 rounded-full bg-gold" />{feature}</li>)}
        </ul>
        <Link to="/contact" className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm font-semibold text-emerald transition hover:text-gold">Enquire about this journey <ArrowUpRight size={17} /></Link>
      </div>
    </motion.article>
  )
}
