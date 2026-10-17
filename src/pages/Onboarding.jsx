import { useState } from 'react'
import BackButton from '../components/BackButton'
import PrimaryButton from '../components/PrimaryButton'

const slides = [
  {
    image: '/assets/illustrations/onboarding-rescue.svg',
    alt: 'Ilustração de adoção de animais',
    title: 'AMA',
    description:
      'O AMA é uma plataforma que conecta quem encontra animais em risco com quem pode resgatar.',
  },
  {
    image: '/assets/illustrations/onboarding-share.svg',
    alt: 'Ilustração de compartilhamento',
    title: 'Compartilhe',
    description:
      'Viu um animal em perigo? Publique um alerta em segundos. Resgatadores e ONGs serão notificados.',
  },
  {
    image: '/assets/illustrations/onboarding-chat.svg',
    alt: 'Ilustração de comunicação',
    title: 'Conecte-se',
    description:
      'Use o AMA para acompanhar os resgates, conversar com voluntários e encontrar quem precisa de ajuda perto de você.',
  },
]

export default function Onboarding({ onLogin, onRegister }) {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]
  const isFirstSlide = current === 0
  const isLastSlide = current === slides.length - 1

  function next() {
    if (!isLastSlide) {
      setCurrent((value) => value + 1)
    } else {
      onRegister()
    }
  }

  function previous() {
    if (!isFirstSlide) {
      setCurrent((value) => value - 1)
    }
  }

  return (
    <section className="phone-screen onboarding-screen">
      <button
        className="skip-button"
        type="button"
        onClick={onLogin}
      >
        Skip
      </button>

      <img
        className="onboarding-illustration"
        src={slide.image}
        alt={slide.alt}
      />

      <div className="onboarding-indicators">
        {slides.map((item, index) => (
          <span
            key={item.title}
            className={`indicator ${
              current === index ? 'active' : ''
            }`}
          />
        ))}
      </div>

      <div className="onboarding-text">
        <h1>{slide.title}</h1>

        {slide.subtitle && <h2>{slide.subtitle}</h2>}

        <p>{slide.description}</p>
      </div>

      <div className="onboarding-buttons">
        <BackButton
          onClick={previous}
          disabled={isFirstSlide}
          label="Voltar para a etapa anterior"
        />

        <PrimaryButton
          className="onboarding-next"
          onClick={next}
        >
          {isLastSlide ? 'Criar conta' : 'Próximo'}
        </PrimaryButton>
      </div>
    </section>
  )
}