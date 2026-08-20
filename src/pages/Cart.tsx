import { useNavigate } from 'react-router-dom'
import {
  MapPin,
  Phone,
  UserRound,
  Plus,
  Minus,
  Trash2,
  Clock3,
  ShoppingBag,
  FileText,
  ShieldCheck,
  Navigation,
} from 'lucide-react'
import './styles/Cart.css'

import pickupImage from '../assets/order-type/pickup.png'

export default function Cart() {
  const navigate = useNavigate()

  /* =========================================
     QUANTITY
  ========================================= */

  const quantity = 2

  const handleIncrease = () => {
    console.log('Increase quantity')
  }

  const handleDecrease = () => {
    console.log('Decrease quantity')
  }

  /* =========================================
     CART ITEM
  ========================================= */

  const handleDelete = () => {
    console.log('Delete item')
  }

  /* =========================================
     CART ACTIONS
  ========================================= */

  const handleAddMoreItems = () => {
    console.log('Add more items')

    navigate('/home')
  }

  const handleInstructions = () => {
    console.log('Add instructions')
  }

  /* =========================================
     STORE ACTIONS
  ========================================= */

  const handleDirections = () => {
    console.log('View directions')
  }

  const handleCall = () => {
    console.log('Call restaurant')
  }

  /* =========================================
     CHECKOUT
  ========================================= */

  const handleCheckout = () => {
    navigate('/payment')
  }

  return (
    <main className="cart-page">
      <div className="cart-page-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <header className="cart-page-header">

          <div className="cart-page-logo">
            <span>Burgers</span>
            <span>&amp; Booch</span>
          </div>

          <button
            type="button"
            className="cart-profile-button"
            aria-label="Profile"
          >
            <UserRound
              size={15}
              strokeWidth={1.7}
            />
          </button>

        </header>

        {/* =========================================
            CART ITEM
        ========================================= */}

        <section className="cart-item-card">

          <div className="cart-item-content">

            {/* Product image */}

            <img
              src={pickupImage}
              alt="Simply Crispy Veggie"
              className="cart-product-image"
            />

            {/* Product details */}

            <div className="cart-product-details">

              <div className="cart-product-title-row">

                <h1>
                  Simply Crispy Veggie
                </h1>

                <span className="cart-product-veg">
                  <span />
                </span>

              </div>

              <p className="cart-product-description">
                Golden veg patty with cheese,
                <br />
                lettuce &amp; signature sauce.
              </p>

              {/* Quantity / price */}

              <div className="cart-product-controls">

                <div className="cart-quantity-control">

                  <button
                    type="button"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                  >
                    <Minus
                      size={10}
                      strokeWidth={2}
                    />
                  </button>

                  <span>
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    <Plus
                      size={10}
                      strokeWidth={2}
                    />
                  </button>

                </div>

                <span className="cart-product-price">
                  ₹XXX
                </span>

                <button
                  type="button"
                  className="cart-delete"
                  onClick={handleDelete}
                  aria-label="Remove item"
                >
                  <Trash2
                    size={12}
                    strokeWidth={1.7}
                  />
                </button>

              </div>

            </div>

          </div>

          {/* Dashed divider */}

          <div className="cart-dashed-divider" />

          {/* =========================================
              ITEM ACTIONS
          ========================================= */}

          <div className="cart-item-actions">

            <button
              type="button"
              className="cart-add-items-button"
              onClick={handleAddMoreItems}
            >
              <Plus
                size={11}
                strokeWidth={2}
              />

              <span>
                Add More Items
              </span>
            </button>

            <button
              type="button"
              className="cart-instructions-button"
              onClick={handleInstructions}
            >
              <FileText
                size={11}
                strokeWidth={1.7}
              />

              <span>
                Add Instructions
              </span>
            </button>

          </div>

        </section>

        {/* =========================================
            PICKUP FROM
        ========================================= */}

        <section className="cart-pickup-card">

          <div className="cart-store-image-wrapper">

            <img
              src={pickupImage}
              alt="Burgers & Booch"
              className="cart-store-image"
            />

          </div>

          <div className="cart-store-details">

            {/* Pickup label */}

            <div className="cart-pickup-label">

              <ShoppingBag
                size={9}
                strokeWidth={1.7}
              />

              <span>
                Pickup From
              </span>

            </div>

            {/* Store name */}

            <h2>
              Burgers &amp; Booch, Alibag
            </h2>

            {/* Address */}

            <div className="cart-store-address">

              <MapPin
                size={10}
                strokeWidth={1.8}
              />

              <span>
                Near Alibag Beach, Maharashtra
              </span>

            </div>

            {/* Store actions */}

            <div className="cart-store-actions">

              <button
                type="button"
                className="cart-directions-button"
                onClick={handleDirections}
              >
                <Navigation
                  size={10}
                  strokeWidth={1.5}
                />

                View Directions
              </button>

              <button
                type="button"
                className="cart-call-button"
                onClick={handleCall}
                aria-label="Call restaurant"
              >
                <Phone
                  size={12}
                  strokeWidth={1.6}
                />
              </button>

            </div>

          </div>

        </section>

        {/* =========================================
            ESTIMATED PICKUP TIME
        ========================================= */}

        <section className="cart-estimated-time">

          <div className="cart-clock-icon">

            <Clock3
              size={16}
              strokeWidth={1.7}
            />

          </div>

          <div className="cart-time-details">

            <span>
              Estimated Pickup Time
            </span>

            <strong>
              20-25 mins
            </strong>

          </div>

          <div className="cart-shopping-bag">

            <ShoppingBag
              size={27}
              strokeWidth={1.3}
            />

          </div>

        </section>

        {/* =========================================
            BILL DETAILS
        ========================================= */}

        <section className="cart-bill-card">

          <h2>
            Bill Details
          </h2>

          {/* Item total */}

          <div className="cart-bill-row">

            <span>
              Item Total
            </span>

            <span>
              ₹450
            </span>

          </div>

          {/* GST */}

          <div className="cart-bill-row">

            <span>
              GST (Govt. Taxes)
            </span>

            <span>
              ₹23.75
            </span>

          </div>

          {/* Divider */}

          <div className="cart-bill-divider" />

          {/* Grand total */}

          <div className="cart-grand-total">

            <strong>
              Grand Total
            </strong>

            <strong>
              ₹XXX
            </strong>

          </div>

          {/* =========================================
              CHECKOUT
          ========================================= */}

          <button
            type="button"
            className="cart-checkout-button"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>

          {/* Secure payment */}

          <div className="cart-secure-payment">

            <ShieldCheck
              size={10}
              strokeWidth={1.5}
            />

            <span>
              Safe &amp; secure payments
            </span>

          </div>

        </section>

      </div>
    </main>
  )
}