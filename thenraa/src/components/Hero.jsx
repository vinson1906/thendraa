import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <section className="border-b border-sand" aria-labelledby="hero-title">
      <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p data-hero className="eyebrow">Introducing THENRAA</p>
          <h1 id="hero-title" className="mt-4 text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1"><span data-hero-line className="block">One Coconut.</span></span>
            <span className="block overflow-hidden pb-1"><span data-hero-line className="block">Endless Possibilities.</span></span>
          </h1>
          <p data-hero className="mt-6 max-w-lg text-lg leading-relaxed text-ink/90">
            THENRAA is a coconut-based enterprise from Erode, Tamil Nadu, focused on transforming coconuts into useful, value-added products.
          </p>
          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="btn btn-primary">Explore Our Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
        <figure data-hero-visual className="bg-sand p-8 sm:p-12">
          <img src="/logo.png" alt="THENRAA logo: a coconut palm with coconuts above the THENRAA wordmark" width="1000" height="536" className="w-full mix-blend-multiply" />
          <figcaption className="mt-4 border-t border-forest/30 pt-4 text-center text-sm text-ink/80">Every part of the coconut, thoughtfully transformed into value.</figcaption>
        </figure>
      </div>
    </section>
  )
}
