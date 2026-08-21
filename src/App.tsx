import { useEffect, useState } from 'react'
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

const MOBILE_MAX_WIDTH = 480

function isMobileDevice() {
  const isSmallScreen = window.innerWidth <= MOBILE_MAX_WIDTH
  const isMobileUserAgent = /Android|iPhone|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const isTablet = /iPad|Tablet/i.test(navigator.userAgent) || (navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 1)

  return isSmallScreen && isMobileUserAgent && !isTablet
}

function DesktopBlock() {
  return (
    <div className="desktop-block">
      <div className="desktop-block__card">
        <h1>Mobile Only</h1>
        <p>Burgers &amp; Booch is designed for mobile devices. Please open this link on your phone to continue.</p>
      </div>
    </div>
  )
}

function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full min-h-150 flex-col items-center justify-center gap-2 p-6 text-center">
      <p className="font-display text-lg font-semibold text-ink">{name}</p>
      <p className="text-sm text-neutral-muted">Screen not built yet</p>
    </div>
  )
}

export default function App() {
  const [isMobile, setIsMobile] = useState(isMobileDevice())

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileDevice())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isMobile) {
    return <DesktopBlock />
  }

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/select-order-type" element={<SelectOrderType />} />
        <Route path="/location-permission" element={<LocationPermission />} />
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path="/delivery-available" element={<DeliveryAvailable />} />
        <Route path="/sign-in" element={<Placeholder name="signin" />} />
        <Route path="/enter-mobile" element={<AddMobileNumber onClose={() => { window.history.back() }} onBack={() => { window.history.back() }} />} />
        <Route path="/otp" element={<Placeholder name="OTP Verification" />} />
        <Route path="/personal-details" element={<Placeholder name="Insert Personal Details" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu/:categoryId" element={<Burgers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<Placeholder name="Page Not Found" />} />
      </Routes>
    </div>
  )
}