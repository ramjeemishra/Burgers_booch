import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ChevronDown, Clock3, Bike } from 'lucide-react'
import deliveryImg from '../assets/order-type/delivery.png'
import './styles/DeliveryAvailable.css'

export default function DeliveryAvailable() {
  const navigate = useNavigate()

  return (
    <div className="delivery-available">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="delivery-available__back"
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="delivery-available__content">
        <div className="delivery-available__location">
          <span className="delivery-available__deliver-to">
            Deliver to
          </span>

          <button
            type="button"
            className="delivery-available__location-name"
          >
            Alibag Beach Road
            <span className="delivery-available__location-arrow">
              <ChevronDown size={18} />
            </span>
          </button>

          <span className="delivery-available__location-address">
            Alibag, Maharashtra
          </span>
        </div>

        <div className="delivery-available__status">
          <span className="delivery-available__status-icon">
            <CheckCircle2 size={28} />
          </span>

          <span className="delivery-available__status-info">
            <span className="delivery-available__status-title">
              Delivery Available
            </span>

            <span className="delivery-available__status-text">
              We deliver to this location
            </span>
          </span>
        </div>

        <div className="delivery-available__estimate">
          <span className="delivery-available__estimate-icon">
            <Clock3 size={24} />
          </span>

          <span className="delivery-available__estimate-info">
            <span className="delivery-available__estimate-time">
              25-35 min
            </span>

            <span className="delivery-available__estimate-text">
              Estimated delivery time
            </span>
          </span>

          <span className="delivery-available__delivery-type">
            <Bike size={21} />
            Delivery
          </span>
        </div>

        <div className="delivery-available__illustration">
          <img
            src={deliveryImg}
            alt="Delivery"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate('/home')}
          className="delivery-available__continue"
        >
          Continue
        </button>
      </div>
    </div>
  )
}