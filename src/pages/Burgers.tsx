import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Bike,
  Box,
  CircleUserRound,
  Leaf,
  Mic,
  Search,
  SlidersHorizontal,
  Store,
} from 'lucide-react'
import logo from '../assets/splash/logo.png'
import burger1 from '../assets/home/burger-1.png'
import burger2 from '../assets/home/burger-2.png'
import burger3 from '../assets/burgers/burger3.png'
import burger4 from '../assets/burgers/burger4.png'
import './styles/Burgers.css'

type Product = {
  id: number
  name: string
  image: string
  price: number
  veg: boolean
}

const products: Product[] = [
  { id: 1, name: 'Simply Crispy Veggie', image: burger1, price: 0, veg: true },
  { id: 2, name: 'Beetroot Bliss Burger', image: burger2, price: 0, veg: true },
  { id: 3, name: 'Peppy Panner Burger', image: burger3, price: 0, veg: true },
  { id: 4, name: 'Mushroom Magic Burger', image: burger4, price: 0, veg: true },
]

export default function Burgers() {
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [stockOnly, setStockOnly] = useState(false)
  const [vegOnly, setVegOnly] = useState(true)
  const [query, setQuery] = useState('')
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
        <p>
          Pickup from <strong>Burger & Booch</strong>
          <span className="burgers__pickup-arrow">◢</span>
        </p>

        <button
          type="button"
          className="burgers__location"
          onClick={() => navigate('/select-location')}
        >
          <span className="burgers__location-pin">●</span>
          <strong>Alibag</strong>
        </button>
      </section>

      <div className="burgers__order-type">
        <button
          type="button"
          className={`burgers__order-option ${
            orderType === 'delivery' ? 'burgers__order-option--active' : ''
          }`}
          onClick={() => setOrderType('delivery')}
        >
          <Bike size={16} strokeWidth={1.8} />
          <span>
            <strong>Get Delivery</strong>
            <small>Fast to your door</small>
          </span>
        </button>

        <button
          type="button"
          className={`burgers__order-option ${
            orderType === 'pickup' ? 'burgers__order-option--active' : ''
          }`}
          onClick={() => setOrderType('pickup')}
        >
          <Store size={16} strokeWidth={1.8} />
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
            className={`burgers__filter ${
              stockOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setStockOnly((value) => !value)}
          >
            <Box size={11} />
            In Stock
          </button>

          <button
            type="button"
            className={`burgers__filter burgers__filter--veg ${
              vegOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setVegOnly((value) => !value)}
          >
            <span className="burgers__veg-icon">✓</span>
            Veg
          </button>

          <button
            type="button"
            className={`burgers__filter burgers__filter--nonveg ${
              !vegOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setVegOnly(false)}
          >
            <span className="burgers__nonveg-icon">■</span>
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
                  <span className="burgers__product-veg" aria-label="Vegetarian">
                    <Leaf size={7} fill="currentColor" />
                  </span>

                  <h2>{product.name}</h2>

                  <div className="burgers__card-bottom">
                    <span className="burgers__price">₹ XXX</span>

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
                        onClick={() => changeQuantity(product.id, 1)}
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
          <div className="burgers__cart-search-row">
            <label className="burgers__search">
              <Search size={13} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search your favorite items"
              />
              <Mic size={12} />
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
            onClick={() => navigate('/payment')}
          >
            <span>₹{total.toFixed(2)}</span>
            <span>Add to Cart</span>
          </button>
        </section>
      )}
    </main>
  )
}