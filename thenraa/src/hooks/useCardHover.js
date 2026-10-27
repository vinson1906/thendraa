import { useEffect } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from './motion.js'

// Any element with a `data-card` attribute lifts slightly, brightens and gets a soft shadow on hover.
// Uses event delegation, so it works for every page without per-component code.
export default function useCardHover() {
  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return
    const enter = (e) => {
      const el = e.target.closest?.('[data-card]')
      if (!el || el.contains(e.relatedTarget)) return
      const cs = getComputedStyle(el)
      if (!el._orig) el._orig = { bg: cs.backgroundColor, bt: cs.borderTopColor }
      const to = { y: -4, backgroundColor: '#ffffff', boxShadow: '0 14px 28px -14px rgba(61,69,21,0.38)', duration: 0.25, ease: 'power2.out', overwrite: 'auto' }
      if (parseFloat(cs.borderTopWidth) > 0) to.borderTopColor = '#8b5a3c'
      gsap.to(el, to)
    }
    const leave = (e) => {
      const el = e.target.closest?.('[data-card]')
      if (!el || !el._orig || el.contains(e.relatedTarget)) return
      gsap.to(el, { y: 0, backgroundColor: el._orig.bg, borderTopColor: el._orig.bt, boxShadow: '0 0 0 0 rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out', overwrite: 'auto' })
    }
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => { document.removeEventListener('mouseover', enter); document.removeEventListener('mouseout', leave) }
  }, [])
}
