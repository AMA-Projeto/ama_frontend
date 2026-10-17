export default function FormMessage({
  children,
  type = 'error',
}) {
  if (!children) return null

  return (
    <p
      className={`form-message form-message--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
    >
      {children}
    </p>
  )
}
