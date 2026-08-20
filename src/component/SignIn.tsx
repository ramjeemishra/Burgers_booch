import { useState } from 'react'
import { X } from 'lucide-react'
import AddMobileNumber from './AddMobileNumber'
import './styles/SignIn.css'

type SignInProps = {
  onClose: () => void
}

type Step = 'options' | 'phone'

export default function SignIn({ onClose }: SignInProps) {
  const [step, setStep] = useState<Step>('options')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleTruecaller = () => {
    if (!acceptedTerms) return

    console.log('Continue with Truecaller')
  }

  const handleWhatsApp = () => {
    if (!acceptedTerms) return

    console.log('Continue with WhatsApp')
  }

  const handlePhoneNumber = () => {
    if (!acceptedTerms) return

    setStep('phone')
  }

  if (step === 'phone') {
    return <AddMobileNumber onClose={onClose} onBack={() => setStep('options')} />
  }

  return (
    <div className="signin-overlay" role="dialog" aria-modal="true">
      <div className="signin-sheet">
        <div className="signin-header">
          <h2>Sign in to your account</h2>

          <button
            type="button"
            className="signin-close"
            onClick={onClose}
            aria-label="Close sign in"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <p className="signin-description">
          We'll send you a verification code to help us keep
          <br />
          your account safe.
        </p>

        <div className="signin-options">
          {/* Truecaller */}
          <button
            type="button"
            className="signin-option signin-option--truecaller"
            disabled={!acceptedTerms}
            onClick={handleTruecaller}
          >
            <span>Continue with</span>
            <strong>truecaller</strong>
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            className="signin-option signin-option--whatsapp"
            disabled={!acceptedTerms}
            onClick={handleWhatsApp}
          >
            <span className="signin-whatsapp-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  d="M12 2.5a9.5 9.5 0 0 0-8.22 14.27L2.5 21.5l4.88-1.28A9.5 9.5 0 1 0 12 2.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8.4 7.9c.25-.28.54-.3.76-.08l1.05 1.1c.2.21.22.47.08.72l-.4.67c-.1.17-.1.32 0 .48.38.62 1.04 1.3 1.65 1.67.16.1.32.1.48 0l.66-.39c.25-.15.51-.12.72.08l1.1 1.04c.22.21.2.51-.07.77-.43.43-.92.62-1.5.53-1.03-.16-2.3-.93-3.43-2.06-1.13-1.13-1.9-2.4-2.06-3.43-.09-.58.1-1.07.53-1.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span>Continue with</span>
            <strong>WhatsApp</strong>
          </button>
        </div>

        <div className="signin-or">OR</div>

        {/* Phone number */}
        <button
          type="button"
          className="signin-option signin-option--phone"
          disabled={!acceptedTerms}
          onClick={handlePhoneNumber}
        >
          Phone Number
        </button>

        {/* Terms */}
        <label className="signin-terms">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
          />

          <span>
            To continue accept our{' '}
            <a href="/terms" onClick={(event) => event.stopPropagation()}>
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy" onClick={(event) => event.stopPropagation()}>
              Privacy Policy
            </a>
          </span>
        </label>
      </div>
    </div>
  )
}