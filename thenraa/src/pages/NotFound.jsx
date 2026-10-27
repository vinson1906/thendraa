import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <Seo title="Page not found" />
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 text-5xl font-bold">This page could not be found.</h1>
      <p className="mx-auto mt-4 max-w-md">The page you are looking for may have moved. Head back home or explore our products.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/products" className="btn btn-outline">Our Products</Link>
      </div>
    </section>
  )
}
