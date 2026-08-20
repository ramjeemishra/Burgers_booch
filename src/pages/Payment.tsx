import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserRound,
  CreditCard,
  WalletCards,
  Smartphone,
  ShieldCheck,
} from 'lucide-react'
import splashLogo from '../assets/splash/logo.png'
import './styles/Payment.css'

type PaymentMethod =
  | 'upi'
  | 'card'
  | 'netbanking'
  | 'wallet'

export default function Payment() {
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('upi')

  /* =========================================
     PAYMENT
  ========================================= */

  const handlePay = () => {
    console.log(
      'Selected payment method:',
      paymentMethod,
    )

    // After payment, open Order Status page
    navigate('/order-status')
  }

  /* =========================================
     VIEW DETAILS
  ========================================= */

  const handleViewDetails = () => {
    console.log('View payment details')
  }

  return (
    <main className="payment-page">
      <div className="payment-page-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="payment-header">
          <div className="feedback-logo-wrap">
            <img
              src={splashLogo}
              alt="Burgers & Booch"
              className="feedback-logo"
            />
          </div>

          <button
            type="button"
            className="payment-profile-button"
            aria-label="Profile"
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />
          </button>

        </header>

        {/* =========================================
            BILL DETAILS
        ========================================= */}

        <section className="payment-bill-card">

          <h1>
            Bill Details
          </h1>

          <div className="payment-bill-row">

            <span>
              Item Total
            </span>

            <strong>
              ₹450
            </strong>

          </div>

          <div className="payment-bill-row">

            <span>
              GST (Govt. Taxes)
            </span>

            <strong>
              ₹23.75
            </strong>

          </div>

          <div className="payment-bill-divider" />

          <div className="payment-grand-total">

            <strong>
              Grand Total
            </strong>

            <strong>
              ₹XXX
            </strong>

          </div>

          {/* Offers checkbox */}

          <label className="payment-offers">

            <input
              type="checkbox"
              defaultChecked
            />

            <span>
              Yes, I would like to receive updates and exclusive
              offers from Burgers &amp; Booch
            </span>

          </label>

        </section>

        {/* =========================================
            SECURE PAYMENT
        ========================================= */}

        <div className="payment-secure">

          <ShieldCheck
            size={11}
            strokeWidth={1.5}
          />

          <span>
            Safe &amp; secure payments
          </span>

        </div>

        {/* =========================================
            PAYMENT METHOD TITLE
        ========================================= */}

        <h2 className="payment-method-title">
          Select Payment Method
        </h2>

        {/* =========================================
            UPI
        ========================================= */}

        <button
          type="button"
          className={`payment-method-card ${paymentMethod === 'upi'
              ? 'payment-method-card--selected'
              : ''
            }`}
          onClick={() => setPaymentMethod('upi')}
        >

          <div className="payment-method-icon">

            <Smartphone
              size={15}
              strokeWidth={1.5}
            />

          </div>

          <div className="payment-method-content">

            <div className="payment-method-name-row">

              <strong>
                UPI
              </strong>

              <span className="payment-recommended">
                Recommended
              </span>

            </div>

            <p>
              Pay using any UPI App
            </p>

            <div className="payment-upi-brands">

              <span className="payment-gpay">
                G Pay
              </span>

              <span className="payment-visa">
                VISA
              </span>

              <span className="payment-upi-text">
                UPI
              </span>

              <span className="payment-paytm">
                Paytm
              </span>

            </div>

          </div>

          <span
            className={`payment-radio ${paymentMethod === 'upi'
                ? 'payment-radio--selected'
                : ''
              }`}
          >
            {paymentMethod === 'upi' && (
              <span />
            )}
          </span>

        </button>

        {/* =========================================
            CREDIT / DEBIT CARD
        ========================================= */}

        <button
          type="button"
          className={`payment-method-card ${paymentMethod === 'card'
              ? 'payment-method-card--selected'
              : ''
            }`}
          onClick={() => setPaymentMethod('card')}
        >

          <div className="payment-method-icon">

            <CreditCard
              size={15}
              strokeWidth={1.5}
            />

          </div>

          <div className="payment-method-content">

            <div className="payment-method-name-row">

              <strong>
                Credit / Debit Card
              </strong>

            </div>

            <p>
              Visa, Mastercard, Rupay &amp; more
            </p>

          </div>

          <span
            className={`payment-radio ${paymentMethod === 'card'
                ? 'payment-radio--selected'
                : ''
              }`}
          >
            {paymentMethod === 'card' && (
              <span />
            )}
          </span>

        </button>

        {/* =========================================
            NET BANKING
        ========================================= */}

        <button
          type="button"
          className={`payment-method-card ${paymentMethod === 'netbanking'
              ? 'payment-method-card--selected'
              : ''
            }`}
          onClick={() =>
            setPaymentMethod('netbanking')
          }
        >

          <div className="payment-method-icon">

            <CreditCard
              size={15}
              strokeWidth={1.5}
            />

          </div>

          <div className="payment-method-content">

            <div className="payment-method-name-row">

              <strong>
                Net Banking
              </strong>

            </div>

            <p>
              Pay using your bank account
            </p>

          </div>

          <span
            className={`payment-radio ${paymentMethod === 'netbanking'
                ? 'payment-radio--selected'
                : ''
              }`}
          >
            {paymentMethod === 'netbanking' && (
              <span />
            )}
          </span>

        </button>

        {/* =========================================
            WALLETS
        ========================================= */}

        <button
          type="button"
          className={`payment-method-card ${paymentMethod === 'wallet'
              ? 'payment-method-card--selected'
              : ''
            }`}
          onClick={() => setPaymentMethod('wallet')}
        >

          <div className="payment-method-icon">

            <WalletCards
              size={15}
              strokeWidth={1.5}
            />

          </div>

          <div className="payment-method-content">

            <div className="payment-method-name-row">

              <strong>
                Wallets
              </strong>

            </div>

            <p>
              Pay using Amazon Pay, Paytm &amp;
              <br />
              more
            </p>

          </div>

          <span
            className={`payment-radio ${paymentMethod === 'wallet'
                ? 'payment-radio--selected'
                : ''
              }`}
          >
            {paymentMethod === 'wallet' && (
              <span />
            )}
          </span>

        </button>

        {/* =========================================
            SPACE FOR FIXED PAYMENT BAR
        ========================================= */}

        <div className="payment-bottom-space" />

        {/* =========================================
            PAYMENT BOTTOM BAR
        ========================================= */}

        <div className="payment-bottom-bar">

          <div className="payment-payable-row">

            <div className="payment-payable-amount">

              <span>
                Payable Amount
              </span>

              <strong>
                ₹XXX
              </strong>

            </div>

            <button
              type="button"
              className="payment-view-details"
              onClick={handleViewDetails}
            >
              View Details
            </button>

          </div>

          {/* =========================================
              PAY SECURELY
          ========================================= */}

          <button
            type="button"
            className="payment-pay-button"
            onClick={handlePay}
          >
            Pay Securely ₹473.75
          </button>

        </div>

      </div>
    </main>
  )
}