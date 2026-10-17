export default function BrandMark({ className = '' }) {
  return (
    <span
      className={`brand-mark ${className}`.trim()}
      aria-hidden="true"
    />
  )
}
