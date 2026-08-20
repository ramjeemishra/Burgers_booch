import { Routes, Route } from 'react-router-dom'

import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import SelectOrderType from './pages/SelectOrderType'
import LocationPermission from './pages/LocationPermission'
import SelectLocation from './pages/SelectLocation'
import DeliveryAvailable from './pages/DeliveryAvailable'
import Home from './pages/Home'
import Burgers from './pages/Burgers'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import OrderStatus from './pages/OrderStatus'
import Feedback from './pages/Feedback'

import AddMobileNumber from './component/AddMobileNumber'

function Placeholder({
  name,
}: {
  name: string
}) {
  return (
    <div className="flex h-full min-h-150 flex-col items-center justify-center gap-2 p-6 text-center">

      <p className="font-display text-lg font-semibold text-ink">
        {name}
      </p>

      <p className="text-sm text-neutral-muted">
        Screen not built yet
      </p>

    </div>
  )
}

export default function App() {
  return (
    <div className="app-shell">

      <Routes>

        {/* =========================================
            SPLASH
        ========================================= */}

        <Route
          path="/"
          element={<Splash />}
        />

        {/* =========================================
            ONBOARDING
        ========================================= */}

        <Route
          path="/onboarding"
          element={<Onboarding />}
        />

        {/* =========================================
            SELECT ORDER TYPE
        ========================================= */}

        <Route
          path="/select-order-type"
          element={<SelectOrderType />}
        />

        {/* =========================================
            LOCATION
        ========================================= */}

        <Route
          path="/location-permission"
          element={<LocationPermission />}
        />

        <Route
          path="/select-location"
          element={<SelectLocation />}
        />

        <Route
          path="/delivery-available"
          element={<DeliveryAvailable />}
        />

        {/* =========================================
            SIGN IN
        ========================================= */}

        <Route
          path="/sign-in"
          element={
            <Placeholder
              name="signin"
            />
          }
        />

        {/* =========================================
            ENTER MOBILE
        ========================================= */}

        <Route
          path="/enter-mobile"
          element={
            <AddMobileNumber
              onClose={() => {
                window.history.back()
              }}
              onBack={() => {
                window.history.back()
              }}
            />
          }
        />

        {/* =========================================
            OTP
        ========================================= */}

        <Route
          path="/otp"
          element={
            <Placeholder
              name="OTP Verification"
            />
          }
        />

        {/* =========================================
            PERSONAL DETAILS
        ========================================= */}

        <Route
          path="/personal-details"
          element={
            <Placeholder
              name="Insert Personal Details"
            />
          }
        />

        {/* =========================================
            HOME
        ========================================= */}

        <Route
          path="/home"
          element={<Home />}
        />

        {/* =========================================
            MENU
        ========================================= */}

        <Route
          path="/menu/:categoryId"
          element={<Burgers />}
        />

        {/* =========================================
            CART
        ========================================= */}

        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* =========================================
            PAYMENT
        ========================================= */}

        <Route
          path="/payment"
          element={<Payment />}
        />

        {/* =========================================
            PAYMENT SUCCESS
        ========================================= */}

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        {/* =========================================
            ORDER STATUS
        ========================================= */}

        <Route
          path="/order-status"
          element={<OrderStatus />}
        />

        {/* =========================================
            FEEDBACK
        ========================================= */}

        <Route
          path="/feedback"
          element={<Feedback />}
        />

        {/* =========================================
            FALLBACK
        ========================================= */}

        <Route
          path="*"
          element={
            <Placeholder
              name="Page Not Found"
            />
          }
        />

      </Routes>

    </div>
  )
}