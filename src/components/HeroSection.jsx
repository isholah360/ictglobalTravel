

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react'

import GeometricScene from './GeometricScene'
import WhatsAppLink from './WhatsAppLink'

const SLIDE_DURATION = 7000

const heroSlides = [
  {
    eyebrow: 'A journey of faith, guided with care',
    title: 'Your sacred journey,',
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

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isManuallyPaused, setIsManuallyPaused] = useState(false)

  const prefersReducedMotion = useReducedMotion()
  const activeSlide = heroSlides[activeIndex]

  const shouldAutoPlay =
    !prefersReducedMotion && !isHovered && !isManuallyPaused

  useEffect(() => {
    if (!shouldAutoPlay) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, SLIDE_DURATION)

    return () => window.clearInterval(timer)
  }, [shouldAutoPlay])

  const goTo = (index) => {
    setActiveIndex(
      (index + heroSlides.length) % heroSlides.length
    )
  }

  const nextSlide = () => goTo(activeIndex + 1)
  const previousSlide = () => goTo(activeIndex - 1)

  return (
    <section
      className="hero-section relative flex min-h-[780px] items-end overflow-hidden bg-emerald pb-24 pt-36 sm:min-h-[850px] sm:pb-28"
      aria-roledescription="carousel"
      aria-label="Hajj and Umrah pilgrimage highlights"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image carousel */}
      <div className="absolute inset-0 bg-emerald">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.alt}
            fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: activeSlide.position }}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.05 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: prefersReducedMotion ? 0 : 1.1,
                ease: 'easeInOut',
              },
              scale: {
                duration: prefersReducedMotion
                  ? 0
                  : SLIDE_DURATION / 1000,
                ease: 'linear',
              },
            }}
          />
        </AnimatePresence>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061e1a]/95 via-[#061e1a]/65 to-[#061e1a]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061e1a]/85 via-transparent to-[#061e1a]/35" />
      </div>

      {/* Decorative geometric artwork */}
      <div className="pointer-events-none absolute right-[6%] top-[18%] hidden h-80 w-80 opacity-70 lg:block">
        <GeometricScene />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.45,
              }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl">
                <span className="size-1.5 rounded-full bg-gold" />
                {activeSlide.eyebrow}
              </div>

              <h1 className="font-display text-6xl leading-[.94] tracking-tight text-white sm:text-7xl lg:text-[6.8rem]">
                {activeSlide.title}
                <br />
                <em className="font-normal text-gold">
                  {activeSlide.accent}
                </em>
                <br />
                {activeSlide.ending}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                {activeSlide.description}
              </p>

              {/* Call-to-action buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/services" className="btn-gold">
                  Explore our journeys
                  <ArrowUpRight size={17} />
                </Link>

                <WhatsAppLink className="btn-glass">
                  <span>Speak with our team</span>
                  <ArrowRight size={16} />
                </WhatsAppLink>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Trust points */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-gold" />
              Personal guidance
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} className="text-gold" />
              Clear travel information
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} className="text-gold" />
              Support from enquiry to return
            </span>
          </div>
        </div>

        {/* Glassmorphism information card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.3,
          }}
          className="glass-panel hidden max-w-sm justify-self-end p-6 lg:block"
        >
          <p className="eyebrow text-gold">Your next chapter</p>

          <p className="mt-3 font-display text-3xl leading-tight text-white">
            Make space for what matters most.
          </p>

          <p className="mt-3 text-sm leading-6 text-white/60">
            Tell us what you have in mind. We&apos;ll help you understand
            the next steps.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm text-gold"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Carousel navigation and progress indicators */}
      <div className="absolute bottom-7 left-5 right-5 z-20 flex items-center justify-between gap-3 sm:left-8 sm:right-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-display text-xl text-white">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          <div className="flex w-20 gap-1.5 sm:w-28">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/30"
              >
                {activeIndex === index && (
                  <motion.span
                    key={`${activeIndex}-${shouldAutoPlay}`}
                    className="absolute inset-y-0 left-0 rounded-full bg-gold"
                    initial={{ width: '0%' }}
                    animate={{
                      width: shouldAutoPlay ? '100%' : '0%',
                    }}
                    transition={{
                      duration: shouldAutoPlay
                        ? SLIDE_DURATION / 1000
                        : 0,
                      ease: 'linear',
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <span className="hidden font-display text-xl text-white/45 sm:inline">
            {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setIsManuallyPaused((paused) => !paused)}
            aria-label={
              isManuallyPaused ? 'Resume carousel' : 'Pause carousel'
            }
            title={
              isManuallyPaused ? 'Resume slideshow' : 'Pause slideshow'
            }
            className="carousel-arrow hidden sm:grid"
          >
            {isManuallyPaused ? (
              <Play size={16} />
            ) : (
              <Pause size={16} />
            )}
          </button>

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="carousel-arrow"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="carousel-arrow"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* Scroll prompt */}
      <a
        href="#welcome"
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-white/50 xl:flex"
      >
        Scroll to discover
        <ArrowDown size={15} />
      </a>
    </section>
  )
}
