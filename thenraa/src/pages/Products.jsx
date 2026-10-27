import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { products } from '../data/products.js'
import { futureCount } from '../data/futureProducts.js'

export default function Products() {
  return (
    <>
      <Seo title="Products" description="THENRAA's available products: coconut oil, coconut tree saplings and coconut oil cake. Contact us for details and availability." />
      <section className="container-x py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="Our Available Products" title="Coconut oil, saplings and oil cake.">
          We begin with three products. Prices, pack sizes and availability are shared on enquiry.
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => <Reveal key={p.id} delay={i * 90}><ProductCard {...p} /></Reveal>)}
        </div>
        <p className="mt-8 text-sm font-bold text-bark">Contact us for product details and availability.</p>
      </section>

      <section className="bg-sand py-14" aria-labelledby="planned">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">Not available yet</p>
            <h2 id="planned" className="mt-2 text-3xl font-semibold">{futureCount} more products are planned.</h2>
            <p className="mt-3">These are future plans, to be developed and launched in stages. They are not currently available to order.</p>
          </div>
          <Link to="/future-products" className="btn btn-outline">View Future Products</Link>
        </div>
      </section>
      <CTASection />
    </>
  )
}
