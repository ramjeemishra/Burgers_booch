import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UserRound,
  MapPin,
  ChevronDown,
  Bike,
  Package,
  Search,
  Star,
  Mail,
  Phone,
} from 'lucide-react'
import logo from '../assets/splash/logo.png'
import craftedBanner from '../assets/home/crafted-burgers.png'
import burgers from "../assets/home/Burger.png";
import salads from "../assets/home/Salad.png";
import sandwich from '../assets/home/sandwich.png'
import combos from "../assets/home/Combo.png";
import beverages from '../assets/home/beverages.png'
import desserts from "../assets/home/Deserts.png";
import sides from '../assets/home/sides.png'
import newArrival from "../assets/home/New_Arrivals.png";
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
  price: number
  originalPrice?: number
  rating?: number
  reviewCount?: number
  isBestseller?: boolean
  isVeg?: boolean
}

type AdSlide = {
  image: string
  eyebrow: string
  title: string
  description: string
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
    price: 59,
    originalPrice: 70,
    rating: 4.5,
    reviewCount: 2200,
    isBestseller: true,
    isVeg: true,
  },
  {
    name: 'Beetroot Bliss Burger',
    image: bestSeller2,
    price: 59,
    originalPrice: 90,
    rating: 4.1,
    reviewCount: 13,
    isVeg: true,
  },
]

const adSlides: AdSlide[] = [
  {
    image: aboutImage,
    eyebrow: 'About Us',
    title: 'Burgers & Booch',
    description:
      'Handcrafted burgers, bold flavours, and signature beverages made fresh every day.',
  },
  {
    image: craftedBanner,
    eyebrow: 'Limited Time',
    title: 'Flat ₹50 Off',
    description: 'On your first order above ₹299. Crafted burgers, real good deal.',
  },
  {
    image: bestSeller1,
    eyebrow: 'Trending Now',
    title: 'Simply Crispy Veg',
    description: 'Our most loved veg burger, now at ₹59 only.',
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

function formatReviewCount(count: number) {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K+`
  }

  return `${count}`
}

const AD_INTERVAL_MS = 4000

export default function Home() {
  const navigate = useNavigate()
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [vegOnly, setVegOnly] = useState(false)
  const [search, setSearch] = useState('')
  const [activeAd, setActiveAd] = useState(0)
  const adTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAdTimer = () => {
    if (adTimerRef.current) {
      clearInterval(adTimerRef.current)
    }

    adTimerRef.current = setInterval(() => {
      setActiveAd((index) => (index + 1) % adSlides.length)
    }, AD_INTERVAL_MS)
  }

  useEffect(() => {
    startAdTimer()

    return () => {
      if (adTimerRef.current) {
        clearInterval(adTimerRef.current)
      }
    }
  }, [])

  const handleAdDotClick = (index: number) => {
    setActiveAd(index)
    startAdTimer()
  }

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
          <Search size={15} />

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
          aria-pressed={vegOnly}
        >
          <span className="home__veg-icon">
            <span className="home__veg-dot" />
          </span>

          <span>Veg</span>
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
              </div>

              <div className="home__product-meta">
                {product.isVeg && (
                  <span className="home__product-veg">
                    <span className="home__product-veg-dot" />
                  </span>
                )}

                <div className="home__product-badges">
                  {product.isBestseller && (
                    <span className="home__product-bestseller">
                      Bestseller
                    </span>
                  )}

                  {product.rating !== undefined && (
                    <span className="home__product-rating">
                      <Star size={9} fill="currentColor" />
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

              <h3>{product.name}</h3>

              <div className="home__product-bottom">
                <div className="home__product-price">
                  {product.originalPrice !== undefined && (
                    <span className="home__product-price-original">
                      ₹{product.originalPrice}
                    </span>
                  )}

                  <span className="home__product-price-current">
                    ₹{product.price}
                  </span>
                </div>

                <button type="button">
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home__ads">
        <div
          className="home__ads-track"
          style={{ transform: `translateX(-${activeAd * 100}%)` }}
        >
          {adSlides.map((slide) => (
            <div className="home__ad-slide" key={slide.title}>
              <img
                src={slide.image}
                alt={slide.title}
              />

              <div className="home__ad-overlay">
                <span className="home__ad-eyebrow">{slide.eyebrow}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="home__ad-dots">
          {adSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={`home__ad-dot ${index === activeAd ? 'home__ad-dot--active' : ''
                }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => handleAdDotClick(index)}
            />
          ))}
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
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
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