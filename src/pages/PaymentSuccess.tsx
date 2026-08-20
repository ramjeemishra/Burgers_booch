import { useNavigate } from 'react-router-dom'
import {
  UserRound,
  Check,
  Bike,
  Clock3,
  MapPin,
  LockKeyhole,
  ShoppingBag,
  Utensils,
  CupSoda,
  Sparkles,
} from 'lucide-react'
import './styles/PaymentSuccess.css'

export default function PaymentSuccess() {
  const navigate = useNavigate()

  const handleTrackOrder = () => {
    navigate('/order-status')
  }

  return (
    <main className="payment-success-page">
      <div className="payment-success-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="payment-success-header">

          <div className="payment-success-logo">
            <span>Burgers</span>
            <span>&amp; Booch</span>
          </div>

          <button
            type="button"
            className="payment-success-profile"
            aria-label="Profile"
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />
          </button>

        </header>

        {/* =========================================
            SUCCESS ILLUSTRATION
        ========================================= */}

        <section className="payment-success-illustration">

          <Sparkles
            className="success-sparkle success-sparkle--one"
            size={8}
          />

          <Sparkles
            className="success-sparkle success-sparkle--two"
            size={7}
          />

          <span className="success-dot success-dot--one" />
          <span className="success-dot success-dot--two" />

          <div className="success-food success-food--burger">
            <Utensils
              size={17}
              strokeWidth={1.4}
            />
          </div>

          <div className="success-lock-card">

            <LockKeyhole
              className="success-lock"
              size={31}
              strokeWidth={1.8}
            />

            <span className="success-lock-line" />

          </div>

          <div className="success-food success-food--drink">
            <CupSoda
              size={18}
              strokeWidth={1.4}
            />
          </div>

        </section>

        {/* =========================================
            SUCCESS MESSAGE
        ========================================= */}

        <section className="payment-success-message">

          <h1>
            Payment Successful
          </h1>

          <p>
            Your order has been placed successfully
          </p>

        </section>

        {/* =========================================
            ORDER CONFIRMED
        ========================================= */}

        <section className="order-confirmed-card">

          <div className="order-confirmed-content">

            <div className="order-confirmed-icon">
              <Check
                size={12}
                strokeWidth={3}
              />
            </div>

            <div className="order-confirmed-text">

              <strong>
                Order Confirmed
              </strong>

              <span>
                Thank you for choosing
              </span>

              <span>
                Burger &amp; Booch
              </span>

            </div>

          </div>

          <div className="order-id">

            <span>
              Order ID
            </span>

            <strong>
              XXXXXXX
            </strong>

          </div>

        </section>

        {/* =========================================
            PREPARING ORDER MESSAGE
        ========================================= */}

        <div className="order-preparing">

          <Bike
            size={14}
            strokeWidth={1.7}
          />

          <span>
            We've received your order and are preparing it with
          </span>

        </div>

        {/* =========================================
            ORDER DETAILS
        ========================================= */}

        <section className="order-details">

          <h2>
            Order Details
          </h2>

          <div className="order-details-card">

            {/* Product */}

            <div className="order-product-row">

              <div className="order-product-image">
                <ShoppingBag
                  size={19}
                  strokeWidth={1.2}
                />

                <span>
                  🍔
                </span>
              </div>

              <div className="order-product-info">

                <strong>
                  2 items
                </strong>

                <span>
                  Simply Crispy Veggie Burger
                </span>

              </div>

            </div>

            {/* Delivery time */}

            <div className="order-detail-row">

              <div className="order-detail-label">

                <Clock3
                  size={14}
                  strokeWidth={1.7}
                />

                <span>
                  Estimated Delivery Time
                </span>

              </div>

              <strong className="order-delivery-time">
                25 - 30 mins
              </strong>

            </div>

            {/* Delivering to */}

            <div className="order-detail-row">

              <div className="order-detail-label">

                <MapPin
                  size={14}
                  strokeWidth={1.7}
                />

                <span>
                  Delivering to
                </span>

              </div>

              <span className="order-address">
                Alibag,Maharashtra
              </span>

            </div>

          </div>

        </section>

        {/* =========================================
            TRACK ORDER
        ========================================= */}

        <button
          type="button"
          className="track-order-button"
          onClick={handleTrackOrder}
        >
          Track Order
        </button>

      </div>
    </main>
  )
}