import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
export default function ProductCard({ number, title, description, icon }) {
  return (
    <article data-card className="flex h-full flex-col border-t-[6px] border-forest bg-sand p-7 cursor-pointer">
      <p className="text-xs font-bold tracking-widest text-ink/60">{number}</p>
      <Icon name={icon} className="mx-auto my-6 h-16 w-16 text-forest" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed">{description}</p>
      <Link to={`/contact?product=${encodeURIComponent(title)}`} className="mt-6 text-sm font-bold text-bark underline-offset-4 hover:underline">
        Enquire about {title} &rarr;
      </Link>
    </article>
  )
}
