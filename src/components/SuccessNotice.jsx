export default function SuccessNotice({ children, onClose }) {
  return (
    <div className="success-notice" role="status">
      <span className="success-notice-icon" aria-hidden="true">
        ✓
      </span>

      <span>{children}</span>

      {onClose && (
        <button
          className="success-notice-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar mensagem"
        >
          ×
        </button>
      )}
    </div>
  )
}