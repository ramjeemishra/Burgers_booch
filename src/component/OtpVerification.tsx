import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import PersonalDetails from './PersonalDetails'
import './styles/OtpVerification.css'

type OtpVerificationProps = {
  phoneNumber: string
  onClose: () => void
  onChangeNumber: () => void
}

type Step = 'otp' | 'personal'

export default function OtpVerification({ phoneNumber, onClose, onChangeNumber }: OtpVerificationProps) {
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>('otp')
  const [otp, setOtp] = useState('')
  const [resendTimer, setResendTimer] = useState(6)
  const otpInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (step !== 'otp') return

    const timeout = window.setTimeout(() => {
      otpInputRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(timeout)
  }, [step])

  useEffect(() => {
    if (step !== 'otp' || resendTimer <= 0) return

    const timer = window.setInterval(() => {
      setResendTimer((current) => {
        if (current <= 1) {
          window.clearInterval(timer)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [step, resendTimer])

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 6)
    setOtp(value)
  }

  const handleVerify = () => {
    if (otp.length !== 6) return

    console.log('OTP verified:', otp)
    setStep('personal')
  }

  const handleResendOtp = () => {
    if (resendTimer > 0) return

    console.log('Resending OTP to:', phoneNumber)
    setOtp('')
    setResendTimer(6)

    window.setTimeout(() => {
      otpInputRef.current?.focus()
    }, 0)
  }

  if (step === 'personal') {
    return (
      <PersonalDetails
        onClose={onClose}
        onSubmitSuccess={() => {
          onClose()
          navigate('/cart')
        }}
      />
    )
  }

  return (
    <div className="otp-overlay" role="dialog" aria-modal="true">
      <div className="otp-sheet">
        <div className="otp-header">
          <h2>Sign in to your account</h2>

          <button type="button" className="otp-close" onClick={onClose} aria-label="Close sign in">
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <p className="otp-description">
          We'll send you a verification code to help us keep
          <br />
          your account safe.
        </p>

        <div className="otp-input-wrapper">
          <input
            ref={otpInputRef}
            type="tel"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            value={otp}
            onChange={handleOtpChange}
            aria-label="Enter OTP"
          />

          <div className="otp-dashes" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>{otp[index] ? '•' : '—'}</span>
            ))}
          </div>
        </div>

        <div className="otp-sent-to">
          <span>
            OTP sent to <strong>+91 {phoneNumber}</strong>
          </span>

          <button type="button" className="otp-change" onClick={onChangeNumber}>
            Change
          </button>
        </div>

        <button
          type="button"
          className="otp-verify-button"
          disabled={otp.length !== 6}
          onClick={handleVerify}
        >
          Verify &amp; Login
        </button>

        <button
          type="button"
          className={`otp-resend ${resendTimer > 0 ? 'otp-resend--disabled' : ''}`}
          disabled={resendTimer > 0}
          onClick={handleResendOtp}
        >
          Resend OTP
          {resendTimer > 0 && <> ({resendTimer} s)</>}
        </button>
      </div>
    </div>
  )
}