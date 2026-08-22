import { useState } from 'react'
import { X, Flame, Wheat } from 'lucide-react'
import './styles/AddOnPopUP.css'

type CustomizationOption = {
  id: string
  label: string
  icon: 'spice' | 'bun'
}

type AddOnPopupProps = {
  product: {
    id: number
    name: string
    image: string
    price: number
    veg: boolean
    description?: string
  }
  onClose: () => void
  onAddToCart: (customizations: string[]) => void
}

type AddOnItem = {
  id: string
  name: string
  price: number
  type: 'veg' | 'nonveg'
}

const customizations: CustomizationOption[] = [
  { id: 'mild', label: 'Mild', icon: 'spice' },
  { id: 'sesame', label: 'Sesame', icon: 'bun' },
]

const sides: AddOnItem[] = [
  { id: 'french-fries', name: 'French Fries', price: 25, type: 'veg' },
  { id: 'maxi-bowl', name: 'Maxi Bowl', price: 35, type: 'veg' },
  { id: 'creamy-potato-salad', name: 'Creamy Potato Salad', price: 25, type: 'veg' },
  { id: 'chilli-cheese-poppers', name: 'Chilli Cheese Poppers (8pcs)', price: 40, type: 'veg' },
  { id: 'spicy-bbq-chicken-wings', name: 'Spicy BBQ Chicken Wings (6pcs)', price: 80, type: 'nonveg' },
  { id: 'corn-ribs', name: 'Corn Ribs (8pcs)', price: 35, type: 'veg' },
  { id: 'fish-finger-bites', name: 'Fish Finger Bites (12pcs)', price: 90, type: 'nonveg' },
  { id: 'add-on-fries', name: 'Add-on Fries', price: 20, type: 'veg' },
]

const beverages: AddOnItem[] = [
  { id: 'original-kombucha', name: 'Original Kombucha (Simply Native)', price: 60, type: 'veg' },
  { id: 'blueberry-kombucha', name: 'Blueberry Kombucha (Simply Native)', price: 70, type: 'veg' },
  { id: 'turmeric-ginger-kombucha', name: 'Turmeric & Ginger Kombucha (Simply Native)', price: 70, type: 'veg' },
  { id: 'lemon-kombucha', name: 'Lemon Kombucha (Simply Native)', price: 60, type: 'veg' },
  { id: 'mango-kombucha', name: 'Mango Kombucha (Simply Native)', price: 70, type: 'veg' },
  { id: 'pinacolada-kombucha', name: 'Piña Colada Kombucha (Simply Native)', price: 70, type: 'veg' },
  { id: 'chocolate-milkshake', name: 'Chocolate Milkshake', price: 80, type: 'veg' },
  { id: 'vanilla-milkshake', name: 'Vanilla Milkshake', price: 80, type: 'veg' },
  { id: 'cold-coffee-shake', name: 'Cold Coffee Shake', price: 80, type: 'veg' },
  { id: 'coke-float', name: 'Coke Float', price: 60, type: 'veg' },
  { id: 'kombucha-float', name: 'Kombucha Float', price: 70, type: 'veg' },
]

const desserts: AddOnItem[] = [
  { id: 'blueberry-cheesecake', name: 'Blueberry Cheesecake', price: 120, type: 'veg' },
  { id: 'chocolate-brownie', name: 'Chocolate Brownie', price: 90, type: 'nonveg' },
  { id: 'alibaug-apple-pie', name: 'Alibaug Apple Pie', price: 100, type: 'nonveg' },
]

export default function AddOnPopup({ product, onClose, onAddToCart }: AddOnPopupProps) {
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>(['mild', 'sesame'])
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [comboSelected, setComboSelected] = useState(false)

  const allItems = [...sides, ...beverages, ...desserts]

  const toggleCustomization = (id: string) => {
    setSelectedCustomizations((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    )
  }

  const toggleItem = (id: string) => {
    setSelectedItems((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    )
  }

  const selectedAddons = allItems.filter((item) => selectedItems.includes(item.id))
  const addonsTotal = selectedAddons.reduce((total, item) => total + item.price, 0)
  const comboPrice = comboSelected ? 99 : 0
  const total = product.price + addonsTotal + comboPrice

  const handleAddToCart = () => {
    onAddToCart(selectedCustomizations)
    onClose()
  }

  const renderSection = (title: string, items: AddOnItem[]) => (
    <section className="addon-section">
      <div className="addon-section-heading">
        <h3>{title}</h3>
        <span>Select any 1</span>
      </div>

      <div className="addon-items">
        {items.map((item) => {
          const checked = selectedItems.includes(item.id)

          return (
            <label key={item.id} className={`addon-item ${checked ? 'addon-item--selected' : ''}`}>
              <div className="addon-item-left">
                <span className={`addon-veg-indicator addon-veg-indicator--${item.type}`}>
                  <span />
                </span>

                <div className="addon-item-name">
                  <span>{item.name}</span>
                  <small>+ ₹{item.price}</small>
                </div>
              </div>

              <input type="checkbox" checked={checked} onChange={() => toggleItem(item.id)} />
            </label>
          )
        })}
      </div>
    </section>
  )

  return (
    <div className="addon-overlay">
      <div className="addon-popup">
        <header className="addon-header">
          <div className="addon-header-product">
            <img src={product.image} alt={product.name} />

            <div className="addon-header-details">
              <div className="addon-product-title">
                <h2>{product.name}</h2>
                {product.veg && (
                  <span className="addon-header-veg">
                    <span />
                  </span>
                )}
              </div>

              {product.description && <p>{product.description}</p>}

              <div className="addon-customize-tags">
                {customizations.map((option) => {
                  const checked = selectedCustomizations.includes(option.id)

                  return (
                    <label
                      key={option.id}
                      className={`addon-customize-tag ${checked ? 'addon-customize-tag--selected' : ''}`}
                    >
                      {option.icon === 'spice' ? <Flame size={11} /> : <Wheat size={11} />}
                      <span>{option.label}</span>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleCustomization(option.id)}
                      />
                    </label>
                  )
                })}
              </div>
            </div>
          </div>

          <button type="button" className="addon-close" onClick={onClose} aria-label="Close">
            <X size={13} strokeWidth={1.5} />
          </button>
        </header>

        <section className="addon-combo">
          <div>
            <h3>
              Make it a Combo <span>(Optional)</span>
            </h3>
            <p>Add sides &amp; beverage to make your meal complete.</p>
          </div>

          <button
            type="button"
            className={`addon-combo-toggle ${comboSelected ? 'addon-combo-toggle--active' : ''}`}
            onClick={() => setComboSelected((current) => !current)}
            aria-label="Select combo"
          >
            {comboSelected && <span />}
          </button>
        </section>

        {renderSection('Sides & Salads', sides)}
        {renderSection('Beverages', beverages)}
        {renderSection('Desserts', desserts)}

        <div className="addon-bottom-space" />

        <div className="addon-cart-bar">
          <div className="addon-cart-summary">
            <span>{1 + selectedItems.length + (comboSelected ? 1 : 0)} items</span>
            <strong>₹{total}</strong>
          </div>

          <button type="button" className="addon-add-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}