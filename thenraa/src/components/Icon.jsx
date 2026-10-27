// Restrained line icons in the brochure's single-stroke style.
const paths = {
  bottle: <><rect x="20" y="4" width="16" height="7" rx="1"/><rect x="14" y="11" width="28" height="42" rx="5"/><path d="M14 24h28M14 38h28"/></>,
  sapling: <><path d="M28 52V22M28 34c-8 0-12-5-12-11 8 0 12 4 12 11zM28 28c8 0 12-5 12-11-8 0-12 4-12 11z"/><path d="M16 52h24"/></>,
  cake: <><rect x="12" y="10" width="32" height="10" rx="2"/><rect x="8" y="24" width="40" height="10" rx="2"/><rect x="12" y="38" width="32" height="10" rx="2"/></>,
  bowl: <><path d="M8 26h40c0 12-9 20-20 20S8 38 8 26z"/><path d="M20 18c0-4 4-4 4-8M32 18c0-4 4-4 4-8"/></>,
  drop: <path d="M28 6C18 20 12 28 12 36a16 16 0 0 0 32 0c0-8-6-16-16-30z"/>,
  shell: <><circle cx="28" cy="28" r="20"/><path d="M12 22c10 6 22 6 32 0M12 34c10-6 22-6 32 0"/></>,
  mail: <><rect x="6" y="12" width="44" height="32" rx="2"/><path d="m6 14 22 18 22-18"/></>,
  phone: <path d="M16 8h8l4 12-6 4a28 28 0 0 0 10 10l4-6 12 4v8a4 4 0 0 1-4 4C26 44 10 28 12 12a4 4 0 0 1 4-4z"/>,
  pin: <><path d="M28 52S10 36 10 24a18 18 0 0 1 36 0c0 12-18 28-18 28z"/><circle cx="28" cy="24" r="6"/></>,
  menu: <path d="M8 16h40M8 28h40M8 40h40"/>,
  close: <path d="M12 12l32 32M44 12L12 44"/>,
}
export default function Icon({ name, className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
