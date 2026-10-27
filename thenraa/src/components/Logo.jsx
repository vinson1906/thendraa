import { Link } from 'react-router-dom'
// Text wordmark for compact spaces; the full brochure logo lives at /logo.png.
export default function Logo({ light = false }) {
  return (
    <Link to="/" aria-label="THENRAA home" className={`flex items-baseline gap-2 ${light ? 'text-ivory' : 'text-forest'}`}>
      <span className="font-display text-3xl font-bold tracking-wide">THENRAA</span>
      <span className="h-2.5 w-2.5 rounded-full bg-bark" aria-hidden="true" />
    </Link>
  )
}
