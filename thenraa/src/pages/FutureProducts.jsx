import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'
import { futureCategories, futureCount } from '../data/futureProducts.js'

export default function FutureProducts() {
  return (
    <>
      <Seo title="Future Products" description="The Road Ahead: 25 coconut-based products THENRAA plans to develop and launch in stages across food, personal care, materials and agriculture." />
      <section className="container-x py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="The Road Ahead" title="Our future product plans.">
          Our long-term vision spans food, beverages, personal care, household and material applications. These {futureCount} products are planned for future development and launch in stages.
        </SectionHeading>
        <p role="note" className="mt-8 border-l-4 border-bark bg-sand px-5 py-4 text-sm font-bold text-forest">
          Planned, not yet available. Currently available: Coconut Oil, Coconut Tree Saplings and Coconut Oil Cake.
        </p>
      </section>

      <div className="container-x space-y-14 pb-20">
        {futureCategories.map((c) => (
          <section key={c.id} aria-labelledby={c.id}>
            <Reveal>
              <div className="flex items-center gap-4 border-b border-forest/30 pb-3 text-forest">
                <Icon name={c.icon} className="h-9 w-9" />
                <h2 id={c.id} className="text-3xl font-semibold">{c.title}</h2>
                <span className="ml-auto text-sm font-bold text-bark">{c.items.length} planned</span>
              </div>
            </Reveal>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((it) => (
                <li data-card key={it.number} className="flex items-baseline gap-4 bg-sand px-5 py-4 rounded-xl cursor-pointer">
                  <span className="text-xs font-bold tracking-widest text-ink/60">{it.number}</span>
                  <span className="font-display text-xl font-semibold text-forest">{it.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CTASection title="Interested in what comes next?" text="Get in touch to share your interest in any planned product." />
    </>
  )
}
