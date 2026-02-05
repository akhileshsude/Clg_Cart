import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="container-main py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-4 transition-colors">
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          // Empty Cart
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center mb-6 border border-primary-500/50">
              <svg
                className="w-12 h-12 text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-100 mb-3">Your cart is empty</h2>
            <p className="text-neutral-400 mb-8 max-w-sm">
              Start building your college wardrobe! Browse our collection of hoodies, tees, and accessories.
            </p>
            <Link to="/" className="btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="divide-y divide-neutral-700">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 md:p-6 flex gap-4 md:gap-6">
                      {/* Product Image */}
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-neutral-700 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-600">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                          <div>
                            <p className="text-xs text-primary-400 uppercase tracking-wide font-semibold mb-1">
                              {item.category}
                            </p>
                            <h3 className="font-semibold text-neutral-100 line-clamp-2">{item.name}</h3>
                          </div>
                          <p className="text-lg font-bold text-primary-400 flex-shrink-0">₹{item.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-neutral-600 rounded-lg bg-neutral-700/50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-neutral-300 hover:text-primary-400 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3 py-1 text-sm font-medium min-w-8 text-center text-neutral-200">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-neutral-300 hover:text-primary-400 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-neutral-500 hover:text-secondary-400 hover:bg-secondary-500/20 rounded-lg transition-colors ml-auto"
                            title="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        {/* Line Total */}
                        <p className="text-sm text-neutral-400 mt-3">
                          Subtotal: <span className="font-semibold text-primary-400">₹{(item.price * item.quantity).toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="mt-4 text-sm text-neutral-400 hover:text-secondary-400 transition-colors font-medium"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24 p-6 border-primary-500/30">
                <h2 className="text-lg font-bold text-neutral-100 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-neutral-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Subtotal ({items.length} items)</span>
                    <span className="font-medium text-neutral-200">₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Shipping</span>
                    <span className="font-medium text-neutral-200">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Tax (estimated)</span>
                    <span className="font-medium text-neutral-200">₹{(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-neutral-100">Total</span>
                  <span className="text-2xl font-bold text-primary-400">₹{(cartTotal * 1.08).toFixed(2)}</span>
                </div>

                <button className="btn-primary w-full mb-3 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-900 shadow-lg shadow-primary-500/50 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Proceed to Checkout
                </button>

                <Link to="/" className="btn-secondary w-full flex items-center justify-center">
                  Continue Shopping
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free shipping on orders
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Easy returns
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
