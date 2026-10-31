import { Compass } from 'lucide-react'

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-10 place-items-center rounded-full border border-gold/50 text-gold">
        <Compass size={21} strokeWidth={1.5} />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.35rem] tracking-wide text-white">ICTGLOBALTRAVEL</span>
        <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-white/55">Your Travel Consultant</span>
      </span>
    </span>
  )
}
