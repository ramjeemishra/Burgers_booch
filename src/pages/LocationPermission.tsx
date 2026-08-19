import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Navigation } from 'lucide-react'
import locationMap from '../assets/location/location-map.png'
import topFood from '../assets/location/top-food.png'
import bottomFood from '../assets/location/bottom-food.png'
import leaf from '../assets/location/leaf.png'
import './styles/LocationPermission.css'

export default function LocationPermission() {
  const navigate = useNavigate()

  const handleAllowLocation = () => {
    if (!navigator.geolocation) {
      navigate('/select-location')
      return
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        navigate('/select-location')
      },
      () => {}
    )
  }

  return (
    <div className="location-permission">
      <img
        src={topFood}
        alt=""
        className="location-permission__food-top"
      />

      <img
        src={bottomFood}
        alt=""
        className="location-permission__food-bottom"
      />

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="location-permission__back"
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="location-permission__content">
        <h1 className="location-permission__heading">
          <span className="location-permission__heading-row">
            <img src={leaf} alt="" />
            <span>Allow Location</span>
          </span>

          <span className="location-permission__heading-accent">
            Access
          </span>
        </h1>

        <p className="location-permission__subtitle">
          We use your location to see
          <br />
          whether we can <span>deliver you</span>
        </p>

        <div className="location-permission__map">
          <img
            src={locationMap}
            alt="Location map"
            className="location-permission__map-image"
          />

          <img
            src={leaf}
            alt=""
            className="location-permission__leaf-map"
          />
        </div>

        <button
          type="button"
          onClick={handleAllowLocation}
          className="location-permission__allow"
        >
          <Navigation size={20} fill="white" />
          Allow Location
        </button>

        <button
          type="button"
          onClick={() => navigate('/select-location')}
          className="location-permission__not-now"
        >
          Not now
        </button>
      </div>
    </div>
  )
}