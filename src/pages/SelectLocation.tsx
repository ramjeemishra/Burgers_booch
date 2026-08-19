import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Search,
  LocateFixed,
  Building2,
  MapPin,
  TreePine,
  House,
} from 'lucide-react'
import './styles/SelectLocation.css'

type LocationItem = {
  name: string
  address: string
  icon: typeof Building2
}

const recentLocations: LocationItem[] = [
  {
    name: 'Alibag Center',
    address: 'Alibag, Maharashtra',
    icon: Building2,
  },
  {
    name: 'Alibag Beach Road',
    address: 'Alibag, Maharashtra',
    icon: MapPin,
  },
  {
    name: 'Atvan',
    address: 'Alibag, Maharashtra',
    icon: TreePine,
  },
  {
    name: 'Nagaon',
    address: 'Alibag, Maharashtra',
    icon: House,
  },
]

export default function SelectLocation() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [locations, setLocations] = useState(recentLocations)

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(search.toLowerCase()) ||
      location.address.toLowerCase().includes(search.toLowerCase()),
  )

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        navigate('/delivery-available')
      },
      () => {},
    )
  }

  const handleEdit = () => {
    if (locations.length > 0) {
      setLocations([])
    } else {
      setLocations(recentLocations)
    }
  }

  return (
    <div className="select-location">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="select-location__back"
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="select-location__content">
        <h1 className="select-location__heading">
          Select Location
        </h1>

        <p className="select-location__subtitle">
          Choose your delivery location
        </p>

        <div className="select-location__search">
          <Search
            size={22}
            strokeWidth={2}
            className="select-location__search-icon"
          />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search area, street..."
            aria-label="Search location"
          />
        </div>

        <button
          type="button"
          onClick={handleCurrentLocation}
          className="select-location__current"
        >
          <span className="select-location__current-icon">
            <LocateFixed size={22} strokeWidth={1.8} />
          </span>

          <span className="select-location__current-info">
            <span className="select-location__current-title">
              Use current Location
            </span>
            <span className="select-location__current-subtitle">
              Let us fetch you on map
            </span>
          </span>

          <ArrowRight
            size={20}
            strokeWidth={2}
            className="select-location__current-arrow"
          />
        </button>

        <div className="select-location__recent-header">
          <h2>Recent Locations</h2>

          <button
            type="button"
            onClick={handleEdit}
            className="select-location__edit"
          >
            {locations.length > 0 ? 'Edit' : 'Done'}
          </button>
        </div>

        <div className="select-location__list">
          {filteredLocations.map((location) => {
            const LocationIcon = location.icon

            return (
              <button
                type="button"
                key={location.name}
                onClick={() => navigate('/delivery-available')}
                className="select-location__item"
              >
                <span className="select-location__item-icon">
                  <LocationIcon size={21} strokeWidth={1.8} />
                </span>

                <span className="select-location__item-info">
                  <span className="select-location__item-name">
                    {location.name}
                  </span>
                  <span className="select-location__item-address">
                    {location.address}
                  </span>
                </span>

                <ArrowRight
                  size={21}
                  strokeWidth={2}
                  className="select-location__item-arrow"
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}