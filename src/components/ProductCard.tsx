import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  badge?: string
}

export default function ProductCard({ id, name, price, image, category, badge }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      category,
    })
  }

  return (
    <div className="card group cursor-pointer hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-500 h-full flex flex-col hover:border-primary-500/50 hover:scale-105 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-700 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-primary-500/50 animate-bounce-soft">
            {badge}
          </div>
        )}

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-primary-400 uppercase tracking-wide font-semibold mb-1 animate-fade-in-up">{category}</p>
        <h3 className="font-semibold text-neutral-100 mb-2 line-clamp-2 group-hover:text-primary-300 transition-colors duration-300">{name}</h3>

        <div className="mt-auto pt-3 border-t border-neutral-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-primary-400 group-hover:text-primary-300 transition-colors duration-300">₹{price}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center gap-2 py-2 group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300 transform group-hover:scale-110"
          >
            <ShoppingCart size={16} className="group-hover:animate-bounce-soft" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}
