import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const cartCount = items.length

  return (
    <header className="sticky top-0 z-50 bg-neutral-900 border-b border-neutral-700 backdrop-blur-sm bg-opacity-95">
      <div className="container-main">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-bold text-lg text-neutral-900 hidden sm:inline">Clg Cart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Shop
            </Link>
            <a href="#bestsellers" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Bestsellers
            </a>
            <a href="#sale" className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Sale
            </a>
          </nav>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <ShoppingCart size={20} className="text-neutral-900" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="hidden sm:inline text-sm font-medium text-neutral-900">Cart</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link to="/" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors">
              Shop
            </Link>
            <a href="#bestsellers" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors">
              Bestsellers
            </a>
            <a href="#sale" className="block px-4 py-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors">
              Sale
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
