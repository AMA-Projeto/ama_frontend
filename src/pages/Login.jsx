import { useState } from 'react'
import PasswordInput from '../components/PasswordInput'
import FormField from '../components/FormField'
import PrimaryButton from '../components/PrimaryButton'
import BrandMark from '../components/BrandMark'
import FormMessage from '../components/FormMessage'

export default function Login({
  onLogin,
  onRegister,
  initialMessage = '',
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(initialMessage)

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')

    if (password.length < 6) {
      setMessage('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    onLogin()
  }

  return (
    <section className="phone-screen auth-screen login-screen">
      <header className="auth-heading">
        <BrandMark />

        <h1>
          Seja
          <br />
          Bem-Vindo!
        </h1>

        <p>
          Entre para continuar ajudando
          <br />
          animais.
        </p>
      </header>

      <div className="auth-panel login-panel">
        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <FormField label="Email">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
              autoComplete="email"
              required
            />
          </FormField>

          <FormField label="Senha">
            <PasswordInput
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
              autoComplete="current-password"
            />
          </FormField>

          <button
            className="forgot-password"
            type="button"
            onClick={() =>
              setMessage(
                'A recuperação de senha será implementada posteriormente.'
              )
            }
          >
            Esqueceu sua senha?
          </button>

          <FormMessage type="info">{message}</FormMessage>

          <PrimaryButton type="submit" fullWidth>
            Login
          </PrimaryButton>

          <p className="auth-switch">
            Não tem uma conta?{' '}
            <button
              className="text-link"
              type="button"
              onClick={onRegister}
            >
              Criar.
            </button>
          </p>
        </form>
      </div>
    </section>
  )
}