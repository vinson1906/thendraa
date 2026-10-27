import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Icon from '../components/Icon.jsx'
import { productNames } from '../data/products.js'

const EMAIL = 'enquiry@thendraa.in'
const OTHER = 'General enquiry'
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [params] = useSearchParams()
  const preset = params.get('product')
  const [v, setV] = useState({ name: '', email: '', product: productNames.includes(preset) ? preset : OTHER, message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const validate = () => {
    const e = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!emailRe.test(v.email.trim())) e.email = 'Please enter a valid email address.'
    if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.'
    return e
  }
  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) { setStatus(''); return }
    // No backend: open the visitor's own email app with the enquiry drafted.
    const subject = encodeURIComponent(`THENRAA enquiry: ${v.product}`)
    const body = encodeURIComponent(`Name: ${v.name}\nEmail: ${v.email}\nProduct of interest: ${v.product}\n\n${v.message}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('Your email app should now open with your enquiry drafted. Nothing has been sent until you press Send there.')
  }

  const field = 'mt-1 w-full border border-forest/40 bg-ivory px-4 py-3 text-base focus:border-forest'
  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm font-bold text-red-800">{errors[k]}</p>

  return (
    <>
      <Seo title="Contact" description="Contact THENRAA in Erode, Tamil Nadu: call +91 78100 99133 or email thenraa.official@gmail.com for product details and availability." />
      <section className="container-x py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="Contact" title="Contact us for product details and availability." />
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <address className="space-y-6 not-italic lg:col-span-2">
            <div><p className="eyebrow">Founder</p><p className="mt-1 font-display text-2xl font-semibold text-forest">Sanjhna Ragupathy</p></div>
            <div className="flex gap-3"><Icon name="pin" className="mt-1 h-6 w-6 shrink-0 text-bark" /><p>Erode, Tamil Nadu, India</p></div>
            <div className="flex gap-3"><Icon name="phone" className="mt-1 h-6 w-6 shrink-0 text-bark" /><a className="font-bold text-forest underline-offset-4 hover:underline" href="tel:+917810099133">+91 78100 99133</a></div>
            <div className="flex gap-3"><Icon name="mail" className="mt-1 h-6 w-6 shrink-0 text-bark" /><a className="break-all font-bold text-forest underline-offset-4 hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
          </address>

          <form onSubmit={submit} noValidate className="bg-sand p-6 sm:p-8 lg:col-span-3" aria-labelledby="form-title">
            <h2 id="form-title" className="text-3xl font-semibold">Send an enquiry</h2>
            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-bold">Name</label>
                <input id="name" className={field} value={v.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
                {err('name')}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-bold">Email</label>
                <input id="email" type="email" className={field} value={v.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
                {err('email')}
              </div>
              <div>
                <label htmlFor="product" className="text-sm font-bold">Product of interest</label>
                <select id="product" className={field} value={v.product} onChange={set('product')}>
                  {productNames.map((n) => <option key={n}>{n}</option>)}
                  <option>{OTHER}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-bold">Message</label>
                <textarea id="message" rows="5" className={field} value={v.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
                {err('message')}
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-6">Draft Email Enquiry</button>
            <p className="mt-4 text-sm text-ink/80">This site has no server, so the form opens your email app with the enquiry drafted. You can also write to <a className="font-bold underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.</p>
            <p role="status" className="mt-3 text-sm font-bold text-forest">{status}</p>
          </form>
        </div>
      </section>
    </>
  )
}
