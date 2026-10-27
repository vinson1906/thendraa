import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { prefersReducedMotion } from '../hooks/motion.js'
import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { products } from '../data/products.js'
import { sdgs } from '../data/sdgs.js'

export default function Home() {
  const root = useRef(null)

  // Home intro: a short green curtain with the wordmark lifts away (first visit per session),
  // then the hero content settles into place. Skipped entirely for reduced-motion visitors.
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    let seen = false
    try { seen = sessionStorage.getItem('thenraa-intro') === '1' } catch { /* storage unavailable */ }
    const ctx = gsap.context(() => {
      const curtain = root.current.querySelector('[data-curtain]')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      if (!seen) {
        document.body.style.overflow = 'hidden'
        tl.fromTo('[data-curtain-word]', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
          .fromTo('[data-curtain-line]', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' }, '<0.1')
          .to(curtain, { yPercent: -100, duration: 0.8, ease: 'power3.inOut', delay: 0.25 })
          .set(curtain, { display: 'none' })
          .add(() => { document.body.style.overflow = '' })
      } else if (curtain) {
        gsap.set(curtain, { display: 'none' })
      }
      tl.from('[data-hero-line]', { yPercent: 110, duration: 0.8, stagger: 0.12 }, seen ? 0 : '-=0.35')
        .from('[data-hero]', { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
        .from('[data-hero-visual]', { opacity: 0, scale: 0.97, duration: 0.9 }, '-=0.8')
        .add(() => { try { sessionStorage.setItem('thenraa-intro', '1') } catch { /* ignore */ } })
    }, root)
    return () => { ctx.revert(); document.body.style.overflow = '' }
  }, [])

  return (
    <div ref={root}>
      {!prefersReducedMotion() && (
        <div data-curtain aria-hidden="true" className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-forest">
          <span data-curtain-word className="font-display text-5xl font-bold tracking-wide text-ivory sm:text-6xl">THENRAA</span>
          <span data-curtain-line className="mt-4 block h-px w-40 origin-left bg-ivory/70" />
        </div>
      )}
      <Seo description="THENRAA transforms coconuts into useful, value-added products. Coconut oil, coconut tree saplings and coconut oil cake from Erode, Tamil Nadu." />
      <Hero />

      <section className="container-x grid gap-12 py-20 md:grid-cols-2" aria-labelledby="story-title">
        <Reveal>
          <SectionHeading eyebrow="Our Story" title="Behind every coconut, years of care." as="h2" />
        </Reveal>
        <Reveal delay={100} className="space-y-4 text-base leading-relaxed">
          <p>Growing up in an agricultural family, we saw how much work goes into something we often take for granted. A coconut may seem ordinary, but behind it are years of care, patience and effort.</p>
          <p>THENRAA began with a thought: how can we carry that value further? Our beginning is small, but our purpose is meaningful.</p>
          <Link to="/about" className="inline-block text-sm font-bold text-bark underline-offset-4 hover:underline">Read our full story &rarr;</Link>
        </Reveal>
      </section>

      <section className="bg-forest py-14 text-ivory" aria-label="Our unique selling proposition">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/70">Our USP</p>
          <p className="mt-3 max-w-3xl font-display text-3xl leading-snug sm:text-4xl">Every part of the coconut, thoughtfully transformed into value.</p>
        </div>
      </section>

      <section className="container-x py-20" aria-labelledby="available">
        <Reveal><SectionHeading eyebrow="Our Available Products" title="Three products to begin with." /></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => <Reveal key={p.id} delay={i * 90}><ProductCard {...p} /></Reveal>)}
        </div>
        <p className="mt-8 text-sm font-bold text-bark">Contact us for product details and availability.</p>
      </section>

      <section className="bg-sand py-20" aria-labelledby="vision-preview">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="The Road Ahead" title="25 products planned for future development.">
              Our long-term vision spans food, beverages, personal care, household and material applications, launched in stages.
            </SectionHeading>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/future-products" className="btn btn-primary">See Future Products</Link>
              <Link to="/vision" className="btn btn-outline">Our Vision</Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="border-l-4 border-bark pl-6 font-display text-2xl leading-snug text-forest">
              To make THENRAA a globally recognised coconut-based brand, unlocking the potential of the whole coconut through innovation.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20" aria-labelledby="sustain">
        <Reveal>
          <SectionHeading eyebrow="Our Sustainability Direction" title="Efficient use. Less waste.">
            We aim to use coconut resources efficiently and reduce waste as our product range develops.
          </SectionHeading>
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {sdgs.map((s) => (
            <li data-card key={s.number} className="border-t-[6px] border-leaf bg-sand p-6 cursor-pointer">
              <p className="font-display text-4xl font-bold text-forest">{s.number}</p>
              <p className="mt-2 text-sm font-bold">SDG {Number(s.number)} | {s.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </div>
  )
}
