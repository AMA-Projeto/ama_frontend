export default function BackButton({
  onClick,
  label = 'Voltar',
  disabled = false,
}) {
  return (
    <button
      className="back-button"
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      <span aria-hidden="true">‹</span>
    </button>
  )
}
