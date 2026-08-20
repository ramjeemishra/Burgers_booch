import { useState } from 'react'
import { X } from 'lucide-react'
import OtpVerification from './OtpVerification'
import './styles/AddMobileNumber.css'

type AddMobileNumberProps = {
  onClose: () => void
  onBack: () => void
}

type Step = 'phone' | 'otp'

export default function AddMobileNumber({
  onClose,
  onBack,
}: AddMobileNumberProps) {
  const [step, setStep] = useState<Step>('phone')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(true)

  const isValidPhoneNumber = phoneNumber.length === 10

  const handleSendOtp = () => {
    if (!acceptedTerms || !isValidPhoneNumber) return

    console.log('Sending OTP to:', phoneNumber)

    setStep('otp')
  }

  if (step === 'otp') {
    return (
      <OtpVerification
        phoneNumber={phoneNumber}
        onClose={onClose}
        onChangeNumber={() => setStep('phone')}
      />
    )
  }

  return (
    <div className="add-mobile-overlay" role="dialog" aria-modal="true">
      <div className="add-mobile-sheet">
        {/* Header */}
        <div className="add-mobile-header">
          <h2>Sign in to your account</h2>

          <button
            type="button"
            className="add-mobile-close"
            onClick={onClose}
            aria-label="Close sign in"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Description */}
        <p className="add-mobile-description">
          We'll send you a verification code to help us keep
          <br />
          your account safe.
        </p>

        {/* Phone number */}
        <div className="add-mobile-phone">
          <div className="add-mobile-country-code">
            +91
          </div>

          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(event) => {
              const value = event.target.value.replace(/\D/g, '')
              setPhoneNumber(value)
            }}
            aria-label="Phone number"
          />
        </div>

        {/* Terms */}
        <label className="add-mobile-terms">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) =>
              setAcceptedTerms(event.target.checked)
            }
          />

          <span>
            To continue accept our{' '}
            <a
              href="/terms"
              onClick={(event) => event.stopPropagation()}
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              onClick={(event) => event.stopPropagation()}
            >
              Privacy Policy
            </a>
          </span>
        </label>

        {/* Send OTP */}
        <button
          type="button"
          className="add-mobile-send-otp"
          disabled={!acceptedTerms || !isValidPhoneNumber}
          onClick={handleSendOtp}
        >
          Send OTP
        </button>

        {/* Back */}
        <button
          type="button"
          className="add-mobile-change-method"
          onClick={onBack}
        >
          ‹ Change login method
        </button>
      </div>
    </div>
  )
}