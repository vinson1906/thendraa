export default function SectionHeading({ eyebrow, title, children, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{title}</Tag>
      {children && <p className="mt-5 text-base leading-relaxed text-ink/85 sm:text-lg">{children}</p>}
    </div>
  )
}
