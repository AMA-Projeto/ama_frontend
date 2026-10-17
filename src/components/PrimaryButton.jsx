export default function PrimaryButton({
  children,
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
}) {
  const classes = [
    'primary-button',
    fullWidth ? 'full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
