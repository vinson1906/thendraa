import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'

const parts = [['drop', 'Kernel'], ['bowl', 'Water'], ['shell', 'Shell'], ['sapling', 'Husk']]
const approach = [
  ['Thoughtful resource use', 'Looking at how each part of the coconut can be used well.'],
  ['Product development', 'Exploring what a coconut could become, one product at a time.'],
  ['Lasting customer relationships', 'Guiding our journey as we grow.'],
]

export default function About() {
  return (
    <>
      <Seo title="About Us" description="THENRAA began in an agricultural family in Erode, Tamil Nadu, with one question: how can we carry the value of a coconut further?" />
      <section className="container-x py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="About THENRAA" title="A coconut may seem ordinary." />
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal className="space-y-4 leading-relaxed">
            <p className="eyebrow">Our Story</p>
            <p>Growing up in an agricultural family, we saw how much work goes into something we often take for granted. A coconut may seem ordinary, but behind it are years of care, patience and effort.</p>
            <p>THENRAA began with a thought: how can we carry that value further? We wanted to explore what a coconut could become and build a business we could be proud of.</p>
            <p>Our beginning is small, but our purpose is meaningful: to recognise the potential around us and give it room to grow.</p>
          </Reveal>
          <Reveal delay={100} className="space-y-4 leading-relaxed">
            <p className="eyebrow">About THENRAA</p>
            <p>THENRAA is a coconut-based enterprise from Erode, Tamil Nadu, focused on transforming coconuts into useful, value-added products.</p>
            <p>Our approach looks beyond a single product. Beginning with coconut oil, coconut tree saplings and coconut oil cake, we aim to develop a wider range across food, beverages, personal care and materials.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-16" aria-labelledby="whole">
        <div className="container-x">
          <SectionHeading eyebrow="The whole coconut" title="Each part offers possibilities.">
            The kernel, water, shell and husk each offer possibilities for creating value.
          </SectionHeading>
          <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {parts.map(([icon, label]) => (
              <li data-card key={label} className="bg-ivory p-6 text-center text-forest cursor-pointer">
                <Icon name={icon} className="mx-auto h-12 w-12" />
                <p className="mt-3 font-display text-2xl font-bold">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-16" aria-labelledby="approach">
        <SectionHeading eyebrow="Our approach" title="As we grow, three things guide us." />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {approach.map(([t, d], i) => (
            <li key={t} className="border-t-[6px] border-forest pt-5">
              <p className="text-xs font-bold tracking-widest text-ink/60">0{i + 1}</p>
              <h3 className="mt-2 text-2xl font-bold">{t}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-forest py-14 text-ivory" aria-labelledby="founder">
        <div className="container-x">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ivory/70">Founder</p>
          <h2 id="founder" className="mt-2 text-4xl font-semibold !text-ivory">Sanjhna Ragupathy</h2>
          <p className="mt-2 text-ivory/85">Founder, THENRAA &middot; Erode, Tamil Nadu</p>
        </div>
      </section>
      <CTASection title="Want to know more about THENRAA?" text="We would be glad to hear from you." />
    </>
  )
}
