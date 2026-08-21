import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserRound,
  MapPin,
  ChevronDown,
  Bike,
  Package,
  Search,
  Leaf,
  Star,
  Mail,
  Phone,
} from 'lucide-react'
import logo from '../assets/splash/logo.png'
import craftedBanner from '../assets/home/crafted-burgers.png'
import burgers from '../assets/home/burgers.png'
import salads from '../assets/home/salads.png'
import sandwich from '../assets/home/sandwich.png'
import combos from '../assets/home/combos.png'
import beverages from '../assets/home/beverages.png'
import desserts from '../assets/home/desserts.png'
import sides from '../assets/home/sides.png'
import newArrival from '../assets/home/new-arrival.png'
import bestSeller1 from '../assets/home/burger-1.png'
import bestSeller2 from '../assets/home/burger-2.png'
import aboutImage from '../assets/home/about.png'
import customer1 from '../assets/home/customer-1.jpg'
import customer2 from '../assets/home/customer-2.jpg'
import cashIcon from '../assets/home/Cash.svg'
import mastercardIcon from '../assets/home/Mastercard.svg'
import googlePayIcon from '../assets/home/Google_Pay.svg'
import paytmIcon from '../assets/home/Paytm.svg'
import visaIcon from '../assets/home/Visa.svg'
import upiIcon from '../assets/home/UPI.svg'
import './styles/Home.css'

type Category = {
  name: string
  image: string
}

type Product = {
  name: string
  image: string
  price: string
}

const categories: Category[] = [
  {
    name: 'Burgers',
    image: burgers,
  },
  {
    name: 'Salads',
    image: salads,
  },
  {
    name: 'Sandwich',
    image: sandwich,
  },
  {
    name: 'Combos',
    image: combos,
  },
  {
    name: 'Beverages',
    image: beverages,
  },
  {
    name: 'Desserts',
    image: desserts,
  },
  {
    name: 'Sides',
    image: sides,
  },
  {
    name: 'New Arrival',
    image: newArrival,
  },
]

const bestSellers: Product[] = [
  {
    name: 'Simply Crispy Veg',
    image: bestSeller1,
    price: 'XXX',
  },
  {
    name: 'Beetroot Bliss Burger',
    image: bestSeller2,
    price: 'XXX',
  },
]

const testimonials = [
  {
    name: 'Rahul Verma',
    image: customer1,
    review:
      'The burgers are absolutely delicious! Juicy, flavorful and perfectly cooked.',
  },
  {
    name: 'Priya Sharma',
    image: customer2,
    review:
      'Amazing food and great service. Everything tasted fresh and delicious.',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [vegOnly, setVegOnly] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <div className="home">
      <header className="home__header">
        <img
          src={logo}
          alt="Burgers & Booch"
          className="home__logo"
        />

        <button
          type="button"
          className="home__profile"
          onClick={() => navigate('/personal-details')}
          aria-label="Profile"
        >
          <UserRound size={16} />
        </button>
      </header>

      <button
        type="button"
        className="home__location"
        onClick={() => navigate('/select-location')}
      >
        <MapPin size={11} fill="currentColor" />

        <span>Deliver to</span>

        <strong>Alibag Beach Road</strong>

        <ChevronDown size={13} />
      </button>

      <div className="home__order-type">
        <button
          type="button"
          className={`home__order-option ${orderType === 'delivery'
            ? 'home__order-option--active'
            : ''
            }`}
          onClick={() => setOrderType('delivery')}
        >
          <Bike size={14} />

          <span>
            <strong>Get Delivery</strong>
            <small>Fast to your door</small>
          </span>
        </button>

        <button
          type="button"
          className={`home__order-option ${orderType === 'pickup'
            ? 'home__order-option--active'
            : ''
            }`}
          onClick={() => setOrderType('pickup')}
        >
          <Package size={14} />

          <span>
            <strong>Pickup</strong>
            <small>Grab on your own</small>
          </span>
        </button>
      </div>

      <div className="home__search-row">
        <div className="home__search">
          <Search size={13} />

          <input
            type="text"
            placeholder="Search for burgers, fries..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button
          type="button"
          className={`home__veg ${vegOnly ? 'home__veg--active' : ''
            }`}
          onClick={() => setVegOnly((value) => !value)}
        >
          <span>

          </span>
          Veg
        </button>
      </div>

      <button
        type="button"
        className="home__banner"
        onClick={() => navigate('/menu/burgers')}
      >
        <div className="home__banner-content">
          <span>CRAFTED</span>
          <span>BURGERS.</span>
          <strong>REAL GOOD.</strong>

          <span className="home__banner-button">
            Order now →
          </span>
        </div>

        <img
          src={craftedBanner}
          alt="Crafted Burgers"
          className="home__banner-image"
        />
      </button>

      <section className="home__section">
        <div className="home__section-header">
          <h2>Our Categories</h2>
        </div>

        <div className="home__categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className="home__category"
              onClick={() => navigate('/menu/burgers')}
            >
              <span className="home__category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </span>

              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-header">
          <h2>Best Sellers</h2>

          <button
            type="button"
            onClick={() => navigate('/menu/burgers')}
          >
            View all
          </button>
        </div>

        <div className="home__products">
          {bestSellers.map((product) => (
            <article
              key={product.name}
              className="home__product"
            >
              <div className="home__product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="home__product-veg">
                  <Leaf size={8} fill="currentColor" />
                </span>
              </div>

              <h3>{product.name}</h3>

              <div className="home__product-bottom">
                <span>₹ {product.price}</span>

                <button type="button">
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__about">
        <img
          src={aboutImage}
          alt="Burgers and beverages"
        />

        <div className="home__about-content">
          <h2>
            About <span>Burgers & Booch</span>
          </h2>

          <p>
            Handcrafted burgers, bold flavours, and signature
            beverages made fresh every day.
          </p>

          <div className="home__about-stats">
            <span>
              <strong>100%</strong>
              Fresh
            </span>

            <span>
              <strong>Fresh</strong>
              Ingredients
            </span>

            <span>
              <strong>Fast</strong>
              Delivery
            </span>
          </div>
        </div>
      </section>

      <section className="home__section home__reviews-section">
        <div className="home__section-header">
          <h2>What our Customer Say</h2>
        </div>

        <div className="home__reviews">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="home__review"
            >
              <div className="home__review-top">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>
                  <strong>{testimonial.name}</strong>

                  <div className="home__stars">
                    <Star size={9} fill="currentColor" />
                    <Star size={9} fill="currentColor" />
                    <Star size={9} fill="currentColor" />
                    <Star size={9} fill="currentColor" />
                    <Star size={9} fill="currentColor" />
                  </div>
                </div>
              </div>

              <p>{testimonial.review}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__footer-columns">
          <div>
            <h3>Useful Links</h3>

            <button type="button">
              Rewards
            </button>

            <button type="button">
              Privacy Policy
            </button>

            <h3 className="home__footer-heading">
              Address
            </h3>

            <p>
              1756, Alibag - Revas Rd, next to SBI Bank
              Temple, Nagaon, Alibag, Maharashtra 402208
            </p>

            <h3 className="home__footer-heading">
              Contact & Connect
            </h3>

            <a href="mailto:bnr.alibag@gmail.com">
              <Mail size={12} />
              bnr.alibag@gmail.com
            </a>

            <a href="tel:+918805431129">
              <Phone size={12} />
              +91 8805431129
            </a>
          </div>

          <div>
            <h3>Payment Methods</h3>

            <div className="home__payments">
              <img src={cashIcon} alt="Cash" />
              <img src={mastercardIcon} alt="Mastercard" />
              <img src={googlePayIcon} alt="G Pay" />
              <img src={paytmIcon} alt="Paytm" />
              <img src={visaIcon} alt="Visa" />
              <img src={upiIcon} alt="UPI" />
            </div>
          </div>
        </div>

        <div className="home__socials">
          <button type="button" aria-label="YouTube">
            Y
          </button>

          <button type="button" aria-label="Facebook">
            f
          </button>

          <button type="button" aria-label="Instagram">
            ◎
          </button>
        </div>
      </footer>
    </div>
  )
}