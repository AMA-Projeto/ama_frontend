export default function FormField({
  label,
  htmlFor,
  children,
  className = '',
}) {
  return (
    <label className={`field ${className}`.trim()} htmlFor={htmlFor}>
      <span>{label}</span>
      {children}
    </label>
  )
}