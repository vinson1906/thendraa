import { Link } from 'react-router-dom'
export default function CTASection({ title = 'Contact us for product details and availability.', text = 'Tell us what you are looking for and we will get back to you.' }) {
  return (
    <section className="bg-forest text-ivory" aria-labelledby="cta-title">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 id="cta-title" className="text-3xl font-semibold !text-ivory sm:text-4xl">{title}</h2>
          <p className="mt-3 text-ivory/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn btn-light">Contact Us</Link>
          <a href="tel:+917810099133" className="btn border border-ivory text-ivory hover:bg-ivory hover:text-forest">Call +91 78100 99133</a>
        </div>
      </div>
    </section>
  )
}
