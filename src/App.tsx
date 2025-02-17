import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ProductsPage } from '@/pages/ProductsPage'
import {HomePage} from '@/pages/HomePage'
import {CartPage} from '@/pages/CartPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}
