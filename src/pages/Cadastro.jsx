import { useState } from 'react'
import PasswordInput from '../components/PasswordInput'
import FormField from '../components/FormField'
import PrimaryButton from '../components/PrimaryButton'
import BrandMark from '../components/BrandMark'
import FormMessage from '../components/FormMessage'

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) {
    return digits ? `(${digits}` : ''
  }

  if (digits.length <= 3) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${
    digits.slice(3, 7)
  }${digits.length > 7 ? `-${digits.slice(7)}` : ''}`
}

export default function Cadastro({ onLogin, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [message, setMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: name === 'phone' ? formatPhone(value) : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')

    if (form.phone.replace(/\D/g, '').length !== 11) {
      setMessage('Informe um celular com DDD e 11 números.')
      return
    }

    if (form.password.length < 6) {
      setMessage('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setMessage('As senhas não coincidem.')
      return
    }

    onSuccess(form.email)
  }

  return (
    <section className="phone-screen auth-screen register-screen">
      <header className="auth-heading register-heading">
        <BrandMark />

        <h1>Criar conta</h1>

        <p>Faça parte da comunidade AMA.</p>
      </header>

      <div className="auth-panel register-panel">
        <h2>Preencha seus dados</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <FormField label="Nome completo">
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Seu nome"
              autoComplete="name"
              required
            />
          </FormField>

          <FormField label="Email">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="Seu e-mail"
              autoComplete="email"
              required
            />
          </FormField>

          <FormField label="Celular">
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              value={form.phone}
              onChange={updateField}
              placeholder="(99) 9 9999-9999"
              autoComplete="tel"
              maxLength={16}
              required
            />
          </FormField>

          <FormField label="Senha">
            <PasswordInput
              name="password"
              value={form.password}
              onChange={updateField}
              placeholder="Mínimo de 6 caracteres"
              autoComplete="new-password"
            />
          </FormField>

          <FormField label="Confirmar senha">
            <PasswordInput
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={updateField}
              placeholder="Confirme sua senha"
              autoComplete="new-password"
            />
          </FormField>

          <FormMessage>{message}</FormMessage>

          <PrimaryButton type="submit" fullWidth>
            Criar conta
          </PrimaryButton>

          <p className="auth-switch">
            Já tem uma conta?{' '}
            <button
              className="text-link"
              type="button"
              onClick={onLogin}
            >
              Fazer login
            </button>
          </p>
        </form>
      </div>
    </section>
  )
}