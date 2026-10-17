import { useState, useEffect } from 'react'
import Onboarding from './pages/Onboarding.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import TelaInicial from './pages/Tela_inicial.jsx'
import SuccessNotice from './components/SuccessNotice.jsx'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('onboarding')
  const [loginMessage, setLoginMessage] = useState('')
  const [successNotice, setSuccessNotice] = useState('')

  useEffect(() => {
    if (!successNotice) return

    const timeout = setTimeout(() => {
      setSuccessNotice('')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [successNotice])

  function openLogin(message = '') {
    setLoginMessage(message)
    setSuccessNotice('')
    setScreen('login')
  }

  function finishRegistration() {
    setLoginMessage('')
    setSuccessNotice('Conta criada com sucesso!')
    setScreen('login')
  }

  function openRegister() {
    setLoginMessage('')
    setSuccessNotice('')
    setScreen('register')
  }

  return (
    <main className="app-shell">
      {screen === 'onboarding' && (
        <Onboarding
          onLogin={() => openLogin()}
          onRegister={openRegister}
        />
      )}

      {screen === 'register' && (
        <Cadastro
          onLogin={() => openLogin()}
          onSuccess={finishRegistration}
        />
      )}

      {screen === 'login' && (
        <Login
          initialMessage={loginMessage}
          onLogin={() => setScreen('home')}
          onRegister={openRegister}
        />
      )}

      {screen === 'home' && <TelaInicial />}

      {successNotice && (
        <SuccessNotice
          onClose={() => setSuccessNotice('')}
        >
          {successNotice}
        </SuccessNotice>
      )}
    </main>
  )
}