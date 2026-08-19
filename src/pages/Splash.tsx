import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/Splash.css'

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 2200)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash">
      <div className="splash__glow splash__glow--left" />
      <div className="splash__glow splash__glow--right" />

      <div className="splash__logo-wrap">
        <span className="splash__ray splash__ray--left splash__ray--top" />
        <span className="splash__ray splash__ray--left splash__ray--mid" />
        <span className="splash__ray splash__ray--left splash__ray--bottom" />

        <img
          src="/src/assets/splash/logo.png"
          alt="Burgers & Booch"
          className="splash__logo"
        />

        <span className="splash__ray splash__ray--right splash__ray--top" />
        <span className="splash__ray splash__ray--right splash__ray--mid" />
        <span className="splash__ray splash__ray--right splash__ray--bottom" />
      </div>

      <h1 className="splash__title">
        Home-style
        <br />
        <span className="splash__title-accent">Goodness.</span>
      </h1>
      <p className="splash__subtitle">
        Made Fresh, <span className="splash__subtitle-accent">Served Bold.</span>
      </p>

      <img
        src="/src/assets/splash/burger.png"
        alt=""
        className="splash__burger"
      />
    </div>
  )
}