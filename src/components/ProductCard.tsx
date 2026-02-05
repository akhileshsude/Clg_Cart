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
    <div className="card group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-100 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-neutral-500 uppercase tracking-wide font-semibold mb-1">{category}</p>
        <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2">{name}</h3>
        
        <div className="mt-auto pt-3 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-neutral-900">${price}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center gap-2 py-2"
          >
            <ShoppingCart size={16} />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}
