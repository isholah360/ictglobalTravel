import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Logo from './Logo'

const links = [
  ['Home', '/'],
  ['About us', '/about'],
  ['Services', '/services'],
  ['Help', '/help'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="glass-nav mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Link to="/" onClick={close} aria-label="Sacred Journeys home"><Logo /></Link>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>{label}</NavLink>
          ))}
        </div>
        <Link to="/contact" className="btn-gold hidden items-center gap-2 lg:inline-flex">Plan your journey <ArrowUpRight size={16} /></Link>
        <button className="grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass-nav mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden">
            <div className="flex flex-col">
              {links.map(([label, to]) => <NavLink onClick={close} key={to} to={to} end={to === '/'} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm ${isActive ? 'bg-white/10 text-gold' : 'text-white/80'}`}>{label}</NavLink>)}
              <Link to="/contact" onClick={close} className="btn-gold mt-3 justify-center">Plan your journey <ArrowUpRight size={16} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
