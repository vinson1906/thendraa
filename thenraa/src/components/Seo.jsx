import { useEffect } from 'react'
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | THENRAA` : 'THENRAA | Coconut Value-Added Products from Erode, Tamil Nadu'
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
    const og = document.querySelector('meta[property="og:title"]')
    if (og) og.setAttribute('content', document.title)
  }, [title, description])
  return null
}
