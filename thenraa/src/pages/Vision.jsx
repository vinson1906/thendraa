import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { sdgs } from '../data/sdgs.js'

export default function Vision() {
  return (
    <>
      <Seo title="Our Vision and Sustainability" description="THENRAA's vision: a globally recognised coconut-based brand that unlocks the whole coconut through innovation, with a direction of efficient resource use and reduced waste." />
      <section className="container-x py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="Our Vision" title="Unlocking the potential of the whole coconut." />
        <Reveal>
          <blockquote className="mt-10 max-w-3xl border-l-4 border-bark pl-6 font-display text-3xl leading-snug text-forest">
            To make THENRAA a globally recognised coconut-based brand, unlocking the potential of the whole coconut through innovation.
          </blockquote>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ['Everyday homes and industries', 'We envision a diverse range of products that reach everyday homes and industries.'],
            ['Farmers and local communities', 'We hope to create greater opportunities for farmers and local communities.'],
            ['Lasting value', 'We aim to turn more of what nature provides into lasting value.'],
          ].map(([t, d]) => (
            <div data-card key={t} className="bg-sand p-6"><h2 className="text-2xl font-bold">{t}</h2><p className="mt-2 leading-relaxed">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="bg-forest py-16 text-ivory" aria-labelledby="sustain">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/70">Our Sustainability Direction</p>
          <h2 id="sustain" className="mt-3 max-w-3xl text-4xl font-semibold !text-ivory">We aim to use coconut resources efficiently and reduce waste as our product range develops.</h2>
        </div>
      </section>

      <section className="container-x py-16" aria-labelledby="sdg">
        <SectionHeading eyebrow="UN Sustainable Development Goals" title="Where we hope to connect." as="h2">
          These are intended directions and potential contributions. They are not certifications or verified impacts.
        </SectionHeading>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {sdgs.map((s) => (
            <li data-card key={s.number} className="border-t-[6px] border-leaf bg-sand p-7">
              <p className="font-display text-5xl font-bold text-forest">{s.number}</p>
              <h3 className="mt-3 text-xl font-bold">SDG {Number(s.number)} | {s.title}</h3>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <CTASection title="Grow with us." text="If our direction resonates with you, we would like to hear from you." />
    </>
  )
}
