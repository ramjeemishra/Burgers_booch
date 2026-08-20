import { useState } from 'react'
import { UserRound, Check, Star } from 'lucide-react'
import './styles/Feedback.css'

import deliveredImage from '../assets/order-type/delivered.png'
import splashLogo from '../assets/splash/logo.png'

export default function Feedback() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  return (
    <main className="feedback-page">
      <div className="feedback-container">

        <header className="feedback-header">

          <div className="feedback-logo-wrap">
            <img
              src={splashLogo}
              alt="Burgers & Booch"
              className="feedback-logo"
            />
          </div>

          <button
            type="button"
            className="feedback-profile-button"
            aria-label="Profile"
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />
          </button>

        </header>

        {/* =========================================
            DELIVERY SUCCESS
        ========================================= */}

        <section className="feedback-success">

          <div className="feedback-success-icon">
            <Check
              size={22}
              strokeWidth={3}
            />
          </div>

          <h1>
            Your order has been delivered!
          </h1>

          <p>
            We hope you had a wonderful experience
          </p>

        </section>

        {/* =========================================
            DELIVERED IMAGE
        ========================================= */}

        <div className="feedback-delivered-image">

          <img
            src={deliveredImage}
            alt="Order delivered"
          />

        </div>

        {/* =========================================
            EXPERIENCE CARD
        ========================================= */}

        <section className="feedback-rating-card">

          <h2>
            How was your experience
          </h2>

          <p>
            Your feedback helps us serve you better
          </p>

          {/* Stars */}

          <div className="feedback-stars">

            {[1, 2, 3, 4].map((star) => (
              <button
                key={star}
                type="button"
                className={`feedback-star ${rating >= star
                    ? 'feedback-star--active'
                    : ''
                  }`}
                onClick={() => setRating(star)}
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  size={17}
                  strokeWidth={1.8}
                  fill={
                    rating >= star
                      ? 'currentColor'
                      : 'none'
                  }
                />
              </button>
            ))}

          </div>

          <span className="feedback-rating-hint">
            Tap a star to rate
          </span>

        </section>

        {/* =========================================
            ADDITIONAL COMMENTS
        ========================================= */}

        <section className="feedback-comment-section">

          <label htmlFor="feedback-comment">
            Any additional comments?
            <span>
              {' '} (Optional)
            </span>
          </label>

          <textarea
            id="feedback-comment"
            value={comment}
            onChange={(event) =>
              setComment(event.target.value)
            }
            placeholder="Tell us more about your experience..."
          />

        </section>

      </div>
    </main>
  )
}