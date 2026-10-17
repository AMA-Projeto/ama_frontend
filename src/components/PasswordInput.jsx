
import { useState } from 'react'

export default function PasswordInput({
  name,
  value,
  onChange,
  placeholder,
  autoComplete = 'current-password',
  minLength = 6,
  required = true,
}) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="password-field">
      <input
        name={name}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        minLength={minLength}
        required={required}
      />

      <button
        className="password-toggle"
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
        aria-pressed={visible}
      >
        {visible ? (
          /* Olho aberto: senha visível */
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ) : (
          /* Olho fechado: senha oculta */
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8" />
            <path d="M9.9 5.2A10.8 10.8 0 0112 5c5 0 8.5 4.5 9.5 7-.4 1.1-1.3 2.4-2.6 3.5M6.2 6.2C3.8 7.7 2.8 10 2.5 12c.5 1.3 1.6 3 3.5 4.3A10 10 0 0012 19c1 0 2-.2 2.9-.5" />
          </svg>
        )}
      </button>
    </div>
  )
}