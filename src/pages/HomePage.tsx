import { ArrowRight, Flame, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

// Mock product data - Indian pricing in Rupees
const bestsellers = [
  {
    id: 'best-1',
    name: 'Classic College Hoodie',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=400&fit=crop',
    category: 'Hoodies',
  },
  {
    id: 'best-2',
    name: 'Vintage Campus Tee',
    price: 799,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'T-Shirts',
  },
  {
    id: 'best-3',
    name: 'College Logo Cap',
    price: 899,
    image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=400&fit=crop',
    category: 'Accessories',
  },
  {
    id: 'best-4',
    name: 'Branded Backpack',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Accessories',
  },
]

const limitedSale = [
  {
    id: 'sale-1',
    name: 'Premium Zip Hoodie',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1516216129205-e5adf2e4aaef?w=400&h=400&fit=crop',
    category: 'Hoodies',
    badge: '30% OFF',
  },
  {
    id: 'sale-2',
    name: 'Campus Crew Neck',
    price: 599,
    image: 'https://images.unsplash.com/photo-1503217010910-5051a0cf4af7?w=400&h=400&fit=crop',
    category: 'T-Shirts',
    badge: '50% OFF',
  },
  {
    id: 'sale-3',
    name: 'College Sweatpants',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1552062407-291a15f0f5b7?w=400&h=400&fit=crop',
    category: 'Clothing',
    badge: '35% OFF',
  },
  {
    id: 'sale-4',
    name: 'Branded Water Bottle',
    price: 799,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=400&h=400&fit=crop',
    category: 'Accessories',
    badge: 'LIMITED',
  },
]

const clothing = [
  {
    id: 'cloth-1',
    name: 'Oversized College Tee',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1492707892657-8a91e128a5b8?w=400&h=400&fit=crop',
    category: 'T-Shirts',
  },
  {
    id: 'cloth-2',
    name: 'Classic Hoodie',
    price: 2699,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    category: 'Hoodies',
  },
  {
    id: 'cloth-3',
    name: 'Fleece Jacket',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1491841573634-28fb1d3a814d?w=400&h=400&fit=crop',
    category: 'Jackets',
  },
  {
    id: 'cloth-4',
    name: 'Joggers',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
    category: 'Bottoms',
  },
]

const accessories = [
  {
    id: 'acc-1',
    name: 'Beanie Collection',
    price: 699,
    image: 'https://images.unsplash.com/photo-1575428774223-a1f0b0acac04?w=400&h=400&fit=crop',
    category: 'Accessories',
  },
  {
    id: 'acc-2',
    name: 'Socks Pack (5 pairs)',
    price: 499,
    image: 'https://images.unsplash.com/photo-1550990192-8b3f5b5b5b5b?w=400&h=400&fit=crop',
    category: 'Accessories',
  },
  {
    id: 'acc-3',
    name: 'Campus Tote Bag',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    category: 'Bags',
  },
  {
    id: 'acc-4',
    name: 'Phone Case',
    price: 599,
    image: 'https://images.unsplash.com/photo-1519738265434-c26b3d09e071?w=400&h=400&fit=crop',
    category: 'Tech',
  },
]

const stationery = [
  {
    id: 'stat-1',
    name: 'College Notebook Set',
    price: 399,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    category: 'Stationery',
  },
  {
    id: 'stat-2',
    name: 'Branded Pen Pack',
    price: 299,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
    category: 'Stationery',
  },
  {
    id: 'stat-3',
    name: 'Desk Organizer',
    price: 999,
    image: 'https://images.unsplash.com/photo-1548690596-5ea266ca1b7b?w=400&h=400&fit=crop',
    category: 'Stationery',
  },
  {
    id: 'stat-4',
    name: 'Study Planner',
    price: 699,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'Stationery',
  },
]

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-main relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                Your College Style Starts Here
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-8 text-balance">
                Premium hoodies, tees, and accessories designed for tech-savvy college students. Express your campus pride with quality merch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#bestsellers" className="btn-primary bg-gradient-to-r from-primary-500 to-primary-600 text-neutral-900 hover:from-primary-400 hover:to-primary-500 shadow-lg shadow-primary-500/50 flex items-center justify-center gap-2">
                  Shop Now
                  <ArrowRight size={18} />
                </Link>
                <a href="#sale" className="btn-secondary bg-secondary-600/20 text-secondary-300 border-secondary-500/50 hover:bg-secondary-600/30 flex items-center justify-center gap-2">
                  View Sale
                  <Flame size={18} />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500/20 to-secondary-600/20 rounded-3xl overflow-hidden aspect-square border border-primary-500/30 shadow-2xl shadow-primary-500/20 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=600&h=600&fit=crop"
                    alt="College Hoodie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl px-6 py-3 shadow-xl shadow-primary-500/50 border border-primary-400/50">
                  <p className="font-bold text-lg text-neutral-900">30% OFF</p>
                  <p className="text-sm text-neutral-800">Limited Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section id="bestsellers" className="section-spacing">
        <div className="container-main">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={20} className="text-primary-600" />
              <span className="text-sm font-bold text-primary-600 uppercase tracking-wide">Trending Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Bestsellers</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              The most loved items by college students across the country. Don't miss out on these fan favorites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Sale Section */}
      <section id="sale" className="section-spacing bg-white">
        <div className="container-main">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Flame size={20} className="text-red-600" />
              <span className="text-sm font-bold text-red-600 uppercase tracking-wide">Flash Sale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Limited Time Offers</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Incredible deals for a limited time only. Grab your favorites before they're gone!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {limitedSale.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Clothing Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Clothing</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Comfortable and stylish apparel for every season. From hoodies to joggers, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {clothing.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="section-spacing bg-white">
        <div className="container-main">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Accessories</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Complete your look with our curated selection of college accessories. Quality that lasts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {accessories.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stationery Section */}
      <section className="section-spacing">
        <div className="container-main">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Stationery & Study Gear</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Stay organized and focused with our college-themed stationery collection. Perfect for studying in style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {stationery.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Represent Your College?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already wearing their campus pride. Shop the full collection today.
          </p>
          <Link to="#bestsellers" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Start Shopping
          </Link>
        </div>
      </section>
    </main>
  )
}
