import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './styles/Onboarding.css'

const slides = [
  {
    heading: ['Crafted', 'Burgers.'],
    accent: 'Real Good.',
    subtitle: ['Handcrafted with finest ingredients and', 'bold flavors.'],
    image: '/src/assets/onboarding/slide-1.png',
  },
  {
    heading: ['Fresh', 'Ingredients.'],
    accent: 'Bold Flavors.',
    subtitle: ['Every bite is made with quality you can', 'taste.'],
    image: '/src/assets/onboarding/slide-2.png',
  },
  {
    heading: ['Delivered'],
    accent: 'Hot & Fast.',
    subtitle: ['Fast deliver at your', 'doorsteps, always.'],
    image: '/src/assets/onboarding/slide-3.png',
  },
]

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()
  const slide = slides[step]
  const isLast = step === slides.length - 1

  const handleNext = () => {
    if (isLast) {
      navigate('/select-order-type')
    } else {
      setStep((s) => s + 1)
    }
  }

  return (
    <div className="onboarding">
      <div className="onboarding__top">
        <h1 className="onboarding__heading">
          {slide.heading.map((line) => (
            <span key={line} className="onboarding__heading-line">
              {line}
            </span>
          ))}
          <span className="onboarding__heading-accent">{slide.accent}</span>
        </h1>
        <p className="onboarding__subtitle">
          {slide.subtitle.map((line) => (
            <span key={line} className="onboarding__subtitle-line">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="onboarding__image-wrap">
        <img src={slide.image} alt="" className="onboarding__image" />
      </div>

      <div className="onboarding__footer">
        <button
          onClick={() => navigate('/select-order-type')}
          className="onboarding__skip"
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          className="onboarding__next"
          aria-label={isLast ? 'Get started' : 'Next'}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}