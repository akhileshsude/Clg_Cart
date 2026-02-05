import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App
