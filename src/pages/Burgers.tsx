import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Bike,
  Box,
  ChevronRight,
  CircleUserRound,
  Leaf,
  SlidersHorizontal,
  Store,
} from 'lucide-react'
import logo from '../assets/splash/logo.png'
import burger1 from '../assets/home/burger-1.png'
import burger2 from '../assets/home/burger-2.png'
import './styles/Burgers.css'

type Product = {
  id: number
  name: string
  image: string
  price: string
  veg: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Simply Crispy Veggie',
    image: burger1,
    price: 'XXX',
    veg: true,
  },
  {
    id: 2,
    name: 'Beetroot Bliss Burger',
    image: burger2,
    price: 'XXX',
    veg: true,
  },
  {
    id: 3,
    name: 'Peppy Paner Burger',
    image: burger1,
    price: 'XXX',
    veg: true,
  },
  {
    id: 4,
    name: 'Mushroom Magic Burger',
    image: burger2,
    price: 'XXX',
    veg: true,
  },
]

export default function Burgers() {
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [stockOnly, setStockOnly] = useState(false)
  const [vegOnly, setVegOnly] = useState(true)

  const visibleProducts = useMemo(
    () =>
      products.filter((product) => {
        if (vegOnly && !product.veg) return false
        return true
      }),
    [vegOnly],
  )

  const menuTitle =
    categoryId === 'burgers' || !categoryId ? 'Veg Burger Menu' : `${categoryId} Menu`

  return (
    <div className="burgers">
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
          <ChevronRight className="burgers__pickup-arrow" size={27} />
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
          <Bike size={21} strokeWidth={1.8} />
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
          <Store size={21} strokeWidth={1.8} />
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
            <ArrowLeft size={18} />
          </button>

          <h1>{menuTitle}</h1>
        </div>

        <div className="burgers__filters">
          <button type="button" className="burgers__filter burgers__filter--filters">
            <SlidersHorizontal size={13} />
            Filters
          </button>

          <button
            type="button"
            className={`burgers__filter ${
              stockOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setStockOnly((value) => !value)}
          >
            <Box size={13} />
            In Stock
          </button>

          <button
            type="button"
            className={`burgers__filter burgers__filter--veg ${
              vegOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setVegOnly((value) => !value)}
          >
            <span className="burgers__veg-icon">
              <Leaf size={9} fill="currentColor" />
            </span>
            Veg
          </button>

          <button
            type="button"
            className={`burgers__filter burgers__filter--nonveg ${
              !vegOnly ? 'burgers__filter--selected' : ''
            }`}
            onClick={() => setVegOnly(false)}
          >
            <span className="burgers__nonveg-icon" />
            Non-Veg
          </button>
        </div>

        <div className="burgers__grid">
          {visibleProducts.map((product) => (
            <article className="burgers__card" key={product.id}>
              <div className="burgers__image-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="burgers__card-body">
                <span className="burgers__product-veg" aria-label="Vegetarian">
                  <Leaf size={8} fill="currentColor" />
                </span>

                <h2>{product.name}</h2>

                <div className="burgers__card-bottom">
                  <span className="burgers__price">₹ {product.price}</span>

                  <button type="button" className="burgers__add">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}