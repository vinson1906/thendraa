import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navLinks } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-1 text-sm text-ivory/80" lang="ta">தென்னையின் வரம்</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/85">One Coconut. Endless Possibilities.</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/70">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => <li key={l.to}><Link className="hover:underline" to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <address className="text-sm not-italic leading-relaxed">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/70">Contact</p>
          <p className="mt-4">Sanjhna Ragupathy, Founder</p>
          <p>Erode, Tamil Nadu, India</p>
          <p className="mt-2"><a className="hover:underline" href="tel:+917810099133">+91 78100 99133</a></p>
          <p><a className="break-all hover:underline" href="mailto:thenraa.official@gmail.com">thenraa.official@gmail.com</a></p>
        </address>
      </div>
      <div className="border-t border-ivory/20 py-5 text-center text-xs text-ivory/70">
        &copy; {new Date().getFullYear()} THENRAA. Erode, Tamil Nadu, India.
      </div>
    </footer>
  )
}
