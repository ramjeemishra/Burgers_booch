import { useState } from 'react'
import { X } from 'lucide-react'
import './styles/PersonalDetails.css'

type PersonalDetailsProps = {
  onClose: () => void
  onSubmitSuccess: () => void
}

export default function PersonalDetails({
  onClose,
  onSubmitSuccess,
}: PersonalDetailsProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | ''>('')

  const isFormValid = fullName.trim().length > 0

  const handleSubmit = () => {
    if (!isFormValid) return

    console.log('Personal details:', {
      fullName,
      email,
      gender,
    })

    // Move to AddOnPopup
    onSubmitSuccess()
  }

  return (
    <div
      className="personal-details-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div className="personal-details-sheet">
        {/* Header */}
        <div className="personal-details-header">
          <h2>Welcome</h2>

          <button
            type="button"
            className="personal-details-close"
            onClick={onClose}
            aria-label="Close personal details"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Subtitle */}
        <p className="personal-details-subtitle">
          Help us know you better!
        </p>

        {/* Full Name */}
        <div className="personal-details-field">
          <label htmlFor="full-name">
            Full Name <span>*</span>
          </label>

          <input
            id="full-name"
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value)
            }}
          />
        </div>

        {/* Email */}
        <div className="personal-details-field">
          <label htmlFor="email">
            Email Address <small>(Optional)</small>
          </label>

          <input
            id="email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>

        {/* Gender */}
        <div className="personal-details-gender">
          <label>Gender</label>

          <div className="personal-details-radio-group">
            {/* Male */}
            <label className="personal-details-radio">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />

              <span>Male</span>
            </label>

            {/* Female */}
            <label className="personal-details-radio">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />

              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Submit */}
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