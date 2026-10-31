export default function SectionHeading({ eyebrow, title, text, light = false, centered = false }) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? 'text-gold' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 max-w-xl text-base leading-7 ${centered ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-ink/65'}`}>{text}</p>}
    </div>
  )
}
