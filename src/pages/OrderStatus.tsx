import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserRound,
  MapPin,
  Clock3,
  CalendarDays,
  Phone,
  MessageSquare,
} from 'lucide-react'
import './styles/OrderStatus.css'

import deliveryImage from '../assets/order-type/delivery.png'
import customerImage from '../assets/home/customer-1.jpg'

export default function OrderStatus() {
  const navigate = useNavigate()

  /* =========================================
     90 SECOND ORDER TIMER
  ========================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate('/feedback')
    }, 90 * 1000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [navigate])

  /* =========================================
     DELIVERY PARTNER
  ========================================= */

  const handleCall = () => {
    console.log('Calling delivery partner')
  }

  const handleMessage = () => {
    console.log('Opening chat with delivery partner')
  }

  const handleViewDetails = () => {
    console.log('View order details')
  }

  return (
    <main className="order-status-page">
      <div className="order-status-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="order-status-header">

          <div className="order-status-logo">
            <span>Burgers</span>
            <span>&amp; Booch</span>
          </div>

          <button
            type="button"
            className="order-status-profile"
            aria-label="Profile"
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />
          </button>

        </header>

        {/* =========================================
            DELIVERY ILLUSTRATION
        ========================================= */}

        <section className="delivery-illustration">

          <img
            src={deliveryImage}
            alt="Delivery partner on scooter"
          />

        </section>

        {/* =========================================
            PREPARING YOUR ORDER
        ========================================= */}

        <section className="preparing-order-card">

          <div className="preparing-order-top">

            <div className="preparing-icon">
              <CalendarDays
                size={15}
                strokeWidth={1.5}
              />
            </div>

            <div className="preparing-content">

              <h1>
                Preparing your order
              </h1>

              <p>
                Our chefs are cooking it fresh &amp; with love.
              </p>

            </div>

          </div>

          <div className="preparing-divider" />

          <div className="estimated-time-row">

            <div className="estimated-time">

              <span>
                Estimated Time
              </span>

              <strong>
                25 - 30 mins
              </strong>

            </div>

            <button
              type="button"
              className="view-order-details"
              onClick={handleViewDetails}
            >
              View Order Details
            </button>

          </div>

        </section>

        {/* =========================================
            DELIVERY PARTNER
        ========================================= */}

        <section className="delivery-partner-card">

          <div className="delivery-partner-info">

            <img
              src={customerImage}
              alt="Rahul S."
              className="delivery-partner-image"
            />

            <div className="delivery-partner-details">

              <h2>
                Rahul S.
              </h2>

              <p>
                Your Delivery Partner
              </p>

              <span>
                MH 01AB 2345
              </span>

            </div>

          </div>

          <div className="delivery-partner-actions">

            <button
              type="button"
              className="partner-action-button"
              onClick={handleCall}
              aria-label="Call Rahul"
            >
              <Phone
                size={15}
                strokeWidth={1.6}
              />
            </button>

            <button
              type="button"
              className="partner-action-button"
              onClick={handleMessage}
              aria-label="Message Rahul"
            >
              <MessageSquare
                size={15}
                strokeWidth={1.6}
              />
            </button>

          </div>

        </section>

        {/* =========================================
            ORDER DETAILS
        ========================================= */}

        <section className="status-order-details">

          <h2>
            Order Details
          </h2>

          <div className="status-order-card">

            <div className="status-product-row">

              <div className="status-product-image">

                <div className="status-product-bag">
                  <span>🥤</span>
                </div>

              </div>

              <div className="status-product-info">

                <strong>
                  2 items
                </strong>

                <span>
                  Simply Crispy Veggie Burger
                </span>

              </div>

            </div>

            <div className="status-detail-row">

              <div className="status-detail-label">

                <Clock3
                  size={14}
                  strokeWidth={1.7}
                />

                <span>
                  Estimated Delivery Time
                </span>

              </div>

              <strong className="status-delivery-time">
                25 - 30 mins
              </strong>

            </div>

            <div className="status-detail-row">

              <div className="status-detail-label">

                <MapPin
                  size={14}
                  strokeWidth={1.7}
                />

                <span>
                  Delivering to
                </span>

              </div>

              <span className="status-address">
                Alibag,Maharashtra
              </span>

            </div>

          </div>

        </section>

      </div>
    </main>
  )
}