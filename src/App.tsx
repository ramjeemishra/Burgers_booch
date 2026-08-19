import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import SelectOrderType from './pages/SelectOrderType'
import LocationPermission from './pages/LocationPermission'
import SelectLocation from './pages/SelectLocation'
import DeliveryAvailable from './pages/DeliveryAvailable'

function Placeholder({ name }: { name: string }) {
  return (
    <div className="flex h-full min-h-150 flex-col items-center justify-center gap-2 p-6 text-center">
      <p className="font-display text-lg font-semibold text-ink">{name}</p>
      <p className="text-sm text-neutral-muted">Screen not built yet</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/select-order-type" element={<SelectOrderType />} />
        <Route path="/location-permission" element={<LocationPermission />} />
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path="/delivery-available" element={<DeliveryAvailable />} />
        <Route path="/sign-in" element={<Placeholder name="Sign In" />} />
        <Route path="/enter-mobile" element={<Placeholder name="Enter Mobile Number" />} />
        <Route path="/otp" element={<Placeholder name="OTP Verification" />} />
        <Route path="/personal-details" element={<Placeholder name="Insert Personal Details" />} />
        <Route path="/home" element={<Placeholder name="Home Screen" />} />
        <Route path="/menu/:categoryId" element={<Placeholder name="Veg Burger Menu" />} />
        <Route path="/cart" element={<Placeholder name="Cart Screen" />} />
        <Route path="/payment" element={<Placeholder name="Payment Selection" />} />
        <Route path="/payment-success" element={<Placeholder name="Payment Successful" />} />
        <Route path="/order-status" element={<Placeholder name="Order Status" />} />
      </Routes>
    </div>
  )
}