import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import deliveryImg from '../assets/order-type/delivery.png'
import pickupImg from '../assets/order-type/pickup.png'
import './styles/SelectOrderType.css'

type OrderType = 'delivery' | 'pickup'

const options: {
    id: OrderType
    title: string[]
    image: string
    note: string
    time: string
}[] = [
        {
            id: 'delivery',
            title: ['Deliver to your', 'doorstep'],
            image: deliveryImg,
            note: 'Fast & Reliable Delivery',
            time: '15-30 mins',
        },
        {
            id: 'pickup',
            title: ['Pickup Your Order', 'from Store'],
            image: pickupImg,
            note: 'Skip the wait time',
            time: '15-20 mins',
        },
    ]

export default function SelectOrderType() {
    const [selected, setSelected] = useState<OrderType>('delivery')
    const navigate = useNavigate()

    return (
        <div className="order-type">
            <button
                onClick={() => navigate(-1)}
                className="order-type__back"
                aria-label="Go back"
            >
                <ArrowLeft size={20} />
            </button>

            <div className="order-type__header">
                <h1 className="order-type__heading">
                    <span className="order-type__heading-line">How would you like to</span>
                    <span className="order-type__heading-accent">get your order</span>
                </h1>
                <p className="order-type__subtitle">
                    Choose the option that works best for you
                </p>
            </div>

            <div className="order-type__options">
                {options.map((option) => {
                    const isSelected = selected === option.id
                    const PackageIcon = ({ size = 24 }: { size?: number }) => (
                        <svg
                            width={size}
                            height={size}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M19 6.84V3C19 2.45 18.55 2 18 2H6C5.45 2 5 2.45 5 3V6.84L3.05 12.68C3.02 12.78 3 12.89 3 13V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V13C21 12.89 20.98 12.79 20.95 12.68L19 6.84ZM6.72 8H16.61L15.28 12H5.39L6.72 8ZM5 14H15V20H5V14Z"
                                fill="#48B6FF"
                            />
                        </svg>
                    )
                    const BikeIcon = ({ size = 24 }: { size?: number }) => (
                        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7C19 5.9 18.1 5 17 5H14V7H17V9.65L13.52 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H14.48L19 10.35V7ZM4 14V13C4 11.9 4.9 11 6 11H8V14H4ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z" fill="#48B6FF" />
                            <path d="M5 6H10V8H5V6ZM19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z" fill="#48B6FF" />
                        </svg>
                    )
                    const NoteIcon = option.id === 'delivery' ? BikeIcon : PackageIcon
                    return (
                        <button
                            key={option.id}
                            type="button"
                            onClick={() => setSelected(option.id)}
                            className={`order-type__card${isSelected ? ' order-type__card--selected' : ''}`}
                        >
                            <span
                                className={`order-type__radio${isSelected ? ' order-type__radio--selected' : ''}`}
                                aria-hidden="true"
                            >
                                {isSelected && <span className="order-type__radio-dot" />}
                            </span>

                            <span className="order-type__illustration">
                                <img src={option.image} alt="" />
                            </span>

                            <span className="order-type__info">
                                <span className="order-type__title">
                                    {option.title.map((line) => (
                                        <span key={line} className="order-type__title-line">
                                            {line}
                                        </span>
                                    ))}
                                </span>
                                <span className="order-type__note">
                                    <NoteIcon size={14} />
                                    {option.note}
                                </span>
                                <span className="order-type__badge">{option.time}</span>
                            </span>
                        </button>
                    )
                })}
            </div>

            <button
                onClick={() => navigate('/location-permission')}
                className="order-type__continue"
            >
                Continue
            </button>
        </div>
    )
}