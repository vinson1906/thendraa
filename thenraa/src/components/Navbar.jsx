import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Logo from './Logo.jsx'
import { prefersReducedMotion } from '../hooks/motion.js'
import LOGOImage from "../../public/my-logo.png"

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/future-products', label: 'Future Products' },
  { to: '/vision', label: 'Vision' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const panel = useRef(null)
  const bars = useRef([])
  const first = useRef(true)

  useEffect(() => setOpen(false), [pathname])

  // Collapsed state before first paint.
  useLayoutEffect(() => { gsap.set(panel.current, { height: 0, autoAlpha: 0 }) }, [])

  // Animated open/close: panel slides down, links stagger in, hamburger bars morph into an X.
  useEffect(() => {
    if (first.current) { first.current = false; return }
    const d = prefersReducedMotion() ? 0 : 1
    const items = panel.current.querySelectorAll('li')
    const [a, b, c] = bars.current
    gsap.killTweensOf([panel.current, items, a, b, c])
    if (open) {
      gsap.to(panel.current, { height: 'auto', autoAlpha: 1, duration: 0.4 * d, ease: 'power2.out' })
      gsap.fromTo(items, { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 * d, stagger: 0.05 * d, delay: 0.1 * d, ease: 'power2.out' })
      gsap.to(a, { y: 7, rotate: 45, duration: 0.3 * d })
      gsap.to(b, { opacity: 0, duration: 0.15 * d })
      gsap.to(c, { y: -7, rotate: -45, duration: 0.3 * d })
    } else {
      gsap.to(panel.current, { height: 0, autoAlpha: 0, duration: 0.3 * d, ease: 'power2.in' })
      gsap.to([a, c], { y: 0, rotate: 0, duration: 0.3 * d })
      gsap.to(b, { opacity: 1, duration: 0.2 * d, delay: 0.1 * d })
    }
  }, [open])

  // Close with Escape for keyboard users.
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const link = ({ isActive }) =>
    `border-b-2 py-1 text-[16px] font-bold tracking-wide transition-colors ${isActive ? 'border-bark text-forest' : 'border-transparent text-ink/80 hover:text-forest'}`

  return (
    <header className="sticky top-0 z-40 border-t-4 border-forest bg-ivory/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between p-2 pt-6">
        {/* <Logo /> */}
        <img src={LOGOImage} alt="" width={200} height={60} className='h-[100px]' />
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={link}>{l.label}</NavLink>)}
        </nav>
        <button type="button" className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => <span key={i} ref={(el) => (bars.current[i] = el)} className="block h-0.5 w-6 bg-forest" />)}
        </button>
      </div>
      <nav id="mobile-nav" ref={panel} aria-label="Mobile" inert={!open ? '' : undefined} className="overflow-hidden border-t border-sand bg-ivory lg:hidden">
        <ul className="container-x flex flex-col py-3">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => `block border-b border-sand py-3 text-base font-bold ${isActive ? 'text-bark' : 'text-forest'}`}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
