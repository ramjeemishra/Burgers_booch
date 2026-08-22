import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    ArrowLeft,
    Bike,
    Box,
    CircleUserRound,
    Search,
    SlidersHorizontal,
    Star,
    Store,
} from 'lucide-react'
import AddOnPopup from '../component/AddOnPopUP'
import logo from '../assets/splash/logo.png'
import burger1 from '../assets/home/burger-1.png'
import burger2 from '../assets/home/burger-2.png'
import burger3 from '../assets/burgers/burger3.png'
import burger4 from '../assets/burgers/burger4.png'
import SignIn from '../component/SignIn'
import './styles/Burgers.css'

type Product = {
    id: number
    name: string
    image: string
    price: number
    originalPrice?: number
    rating?: number
    reviewCount?: number
    isBestseller?: boolean
    veg: boolean
}

const products: Product[] = [
    {
        id: 1,
        name: 'Simply Crispy Veggie',
        image: burger1,
        price: 59,
        originalPrice: 70,
        rating: 4.5,
        reviewCount: 2200,
        isBestseller: true,
        veg: true,
    },
    {
        id: 2,
        name: 'Beetroot Bliss Burger',
        image: burger2,
        price: 59,
        originalPrice: 90,
        rating: 4.1,
        reviewCount: 13,
        veg: true,
    },
    {
        id: 3,
        name: 'Peppy Paneer Burger',
        image: burger3,
        price: 65,
        originalPrice: 85,
        rating: 4.3,
        reviewCount: 370,
        isBestseller: true,
        veg: true,
    },
    {
        id: 4,
        name: 'Mushroom Magic Burger',
        image: burger4,
        price: 59,
        originalPrice: 80,
        rating: 4.2,
        reviewCount: 344,
        veg: true,
    },
]

function formatReviewCount(count: number) {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K+`
    }

    return `${count}`
}

export default function Burgers() {
    const navigate = useNavigate()
    const { categoryId } = useParams()
    const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
    const [stockOnly, setStockOnly] = useState(false)
    const [vegOnly, setVegOnly] = useState(true)
    const [query, setQuery] = useState('')
    const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null)
    const [showSignIn, setShowSignIn] = useState(false)
    const [quantities, setQuantities] = useState<Record<number, number>>({})

    const visibleProducts = useMemo(
        () =>
            products.filter((product) => {
                if (vegOnly && !product.veg) return false
                if (stockOnly && product.id === 0) return false

                const search = query.trim().toLowerCase()
                if (search && !product.name.toLowerCase().includes(search)) return false

                return true
            }),
        [vegOnly, stockOnly, query],
    )

    const cartCount = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0)
    const total = products.reduce(
        (sum, product) => sum + product.price * (quantities[product.id] ?? 0),
        0,
    )
    const selectedProducts = products.filter((product) => (quantities[product.id] ?? 0) > 0)

    const menuTitle =
        categoryId === 'burgers' || !categoryId ? 'Vegetarian Burgers' : `${categoryId} Menu`

    const changeQuantity = (id: number, delta: number) => {
        setQuantities((current) => {
            const nextQuantity = Math.max(0, (current[id] ?? 0) + delta)
            const updated = { ...current }

            if (nextQuantity === 0) {
                delete updated[id]
            } else {
                updated[id] = nextQuantity
            }

            return updated
        })
    }

    return (
        <main className={`burgers ${cartCount > 0 ? 'burgers--cart-open' : ''}`}>
            <header className="burgers__header">
                <img src={logo} alt="Burgers & Booch" className="burgers__logo" />

                <button
                    type="button"
                    className="burgers__profile"
                    onClick={() => navigate('/personal-details')}
                    aria-label="Profile"
                >
                    <CircleUserRound size={20} strokeWidth={1.7} />
                </button>
            </header>

            <section className="burgers__pickup">
                <div className="burgers__pickup-info">
                    <span className="burgers__pickup-label">Pickup from</span>
                    <strong>Burger & Booch</strong>
                </div>

                <button
                    type="button"
                    className="burgers__location"
                    onClick={() => navigate('/select-location')}
                >
                    <span className="burgers__location-pin" />
                    <strong>Alibag</strong>
                </button>
            </section>

            <div className="burgers__order-type">
                <button
                    type="button"
                    className={`burgers__order-option ${orderType === 'delivery' ? 'burgers__order-option--active' : ''
                        }`}
                    onClick={() => setOrderType('delivery')}
                >
                    <span className="burgers__order-icon">
                        <Bike size={15} strokeWidth={1.8} />
                    </span>
                    <span>
                        <strong>Get Delivery</strong>
                        <small>Fast to your door</small>
                    </span>
                </button>

                <button
                    type="button"
                    className={`burgers__order-option ${orderType === 'pickup' ? 'burgers__order-option--active' : ''
                        }`}
                    onClick={() => setOrderType('pickup')}
                >
                    <span className="burgers__order-icon">
                        <Store size={15} strokeWidth={1.8} />
                    </span>
                    <span>
                        <strong>Pickup</strong>
                        <small>Grab on your own</small>
                    </span>
                </button>
            </div>

            <section className="burgers__menu">
                <div className="burgers__menu-heading">
                    <button
                        type="button"
                        className="burgers__back"
                        onClick={() => navigate('/home')}
                        aria-label="Back to home"
                    >
                        <ArrowLeft size={15} />
                    </button>

                    <h1>{menuTitle}</h1>
                </div>

                <div className="burgers__filters">
                    <button type="button" className="burgers__filter burgers__filter--filters">
                        <SlidersHorizontal size={11} />
                        Filters
                    </button>

                    <button
                        type="button"
                        className={`burgers__filter ${stockOnly ? 'burgers__filter--selected' : ''
                            }`}
                        onClick={() => setStockOnly((value) => !value)}
                    >
                        <Box size={11} />
                        In Stock
                    </button>

                    <button
                        type="button"
                        className={`burgers__filter burgers__filter--veg ${vegOnly ? 'burgers__filter--selected' : ''
                            }`}
                        onClick={() => setVegOnly((value) => !value)}
                    >
                        <span className="burgers__veg-icon">
                            <span className="burgers__veg-dot" />
                        </span>
                        Veg
                    </button>

                    <button
                        type="button"
                        className={`burgers__filter burgers__filter--nonveg ${!vegOnly ? 'burgers__filter--selected' : ''
                            }`}
                        onClick={() => setVegOnly(false)}
                    >
                        <span className="burgers__nonveg-icon" />
                        Non-Veg
                    </button>
                </div>

                <div className="burgers__grid">
                    {visibleProducts.map((product) => {
                        const quantity = quantities[product.id] ?? 0

                        return (
                            <article className="burgers__card" key={product.id}>
                                <div className="burgers__image-wrap">
                                    <img src={product.image} alt={product.name} />
                                </div>

                                <div className="burgers__card-body">
                                    <div className="burgers__card-meta">
                                        {product.veg && (
                                            <span className="burgers__product-veg">
                                                <span className="burgers__product-veg-dot" />
                                            </span>
                                        )}

                                        <div className="burgers__card-badges">
                                            {product.isBestseller && (
                                                <span className="burgers__bestseller">Bestseller</span>
                                            )}

                                            {product.rating !== undefined && (
                                                <span className="burgers__rating">
                                                    <Star size={8} fill="currentColor" />
                                                    {product.rating}
                                                    {product.reviewCount !== undefined && (
                                                        <span>
                                                            ({formatReviewCount(product.reviewCount)})
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <h2>{product.name}</h2>

                                    <div className="burgers__card-bottom">
                                        <div className="burgers__price-group">
                                            {product.originalPrice !== undefined && (
                                                <span className="burgers__price-original">
                                                    ₹{product.originalPrice}
                                                </span>
                                            )}
                                            <span className="burgers__price">₹{product.price}</span>
                                        </div>

                                        {quantity > 0 ? (
                                            <div className="burgers__quantity">
                                                <button
                                                    type="button"
                                                    onClick={() => changeQuantity(product.id, -1)}
                                                    aria-label={`Decrease ${product.name}`}
                                                >
                                                    −
                                                </button>
                                                <span>{quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => changeQuantity(product.id, 1)}
                                                    aria-label={`Increase ${product.name}`}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                className="burgers__add"
                                                onClick={() => setCustomizingProduct(product)}
                                            >
                                                Add
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {cartCount > 0 && (
                <section className="burgers__cart-bar" aria-label="Add to cart">
                    <div className="burgers__cart-items">
                        {selectedProducts.map((product) => (
                            <div className="burgers__cart-item" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <span>{product.name}</span>
                                <strong>×{quantities[product.id]}</strong>
                            </div>
                        ))}
                    </div>

                    <div className="burgers__cart-search-row">
                        <label className="burgers__search">
                            <Search size={13} />
                            <input
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search your favorite items"
                            />
                        </label>

                        <button
                            type="button"
                            className="burgers__menu-button"
                            onClick={() => setQuantities({})}
                        >
                            Menu
                        </button>
                    </div>

                    <button
                        type="button"
                        className="burgers__checkout"
                        onClick={() => setShowSignIn(true)}
                    >
                        <span>₹{total.toFixed(2)}</span>
                        <span>Add to Cart</span>
                    </button>
                </section>
            )}
            {customizingProduct && (
                <AddOnPopup
                    product={customizingProduct}
                    onClose={() => setCustomizingProduct(null)}
                    onAddToCart={() => changeQuantity(customizingProduct.id, 1)}
                />
            )}
            {showSignIn && (
                <SignIn onClose={() => setShowSignIn(false)} />
            )}
        </main>
    )
}