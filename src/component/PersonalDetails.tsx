import { useState } from 'react'
import { X, User, Mail } from 'lucide-react'
import './styles/PersonalDetails.css'

type PersonalDetailsProps = {
  onClose: () => void
  onSubmitSuccess: () => void
}

export default function PersonalDetails({ onClose, onSubmitSuccess }: PersonalDetailsProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | ''>('')

  const isFormValid = fullName.trim().length > 0

  const handleSubmit = () => {
    if (!isFormValid) return

    console.log('Personal details:', { fullName, email, gender })
    onSubmitSuccess()
  }

  return (
    <div className="personal-details-overlay" role="dialog" aria-modal="true">
      <div className="personal-details-sheet">
        <div className="personal-details-handle" />

        <div className="personal-details-header">
          <div>
            <span className="personal-details-eyebrow">Get Started</span>
            <h2>Welcome</h2>
          </div>

          <button
            type="button"
            className="personal-details-close"
            onClick={onClose}
            aria-label="Close personal details"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        <p className="personal-details-subtitle">A few details before your first bite.</p>

        <div className="personal-details-field">
          <label htmlFor="full-name">
            Full Name <span>*</span>
          </label>

          <div className="personal-details-input-wrap">
            <User size={14} strokeWidth={1.6} />
            <input
              id="full-name"
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
        </div>

        <div className="personal-details-field">
          <label htmlFor="email">
            Email Address <small>(Optional)</small>
          </label>

          <div className="personal-details-input-wrap">
            <Mail size={14} strokeWidth={1.6} />
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="personal-details-gender">
          <label>Gender</label>

          <div className="personal-details-segment">
            <div
              className="personal-details-segment-thumb"
              style={{
                transform:
                  gender === 'female'
                    ? 'translateX(100%)'
                    : gender === 'male'
                    ? 'translateX(0%)'
                    : 'translateX(0%)',
                opacity: gender ? 1 : 0,
              }}
            />

            <button
              type="button"
              className={`personal-details-segment-option ${gender === 'male' ? 'personal-details-segment-option--active' : ''}`}
              onClick={() => setGender('male')}
            >
              Male
            </button>

            <button
              type="button"
              className={`personal-details-segment-option ${gender === 'female' ? 'personal-details-segment-option--active' : ''}`}
              onClick={() => setGender('female')}
            >
              Female
            </button>
          </div>
        </div>

        <button
          type="button"
          className="personal-details-submit"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}