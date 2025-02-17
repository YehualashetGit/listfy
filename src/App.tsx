import { useEffect, useState } from 'react'
import './App.css'
import useProducts from '@/hooks/useProducts'
import { Navigation } from '@/components/Navigation'
import { Skeleton } from '@/components/ui/skeleton'

function App() {
  const { products, loading, error } = useProducts()
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="flex">
      <Navigation isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      
      <main className="flex-1 transition-all duration-300 ml-0 lg:ml-64 p-6">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        
        {error && <p className="text-destructive">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-96 rounded-xl" />
            ))
          ) : (
            products.map((product) => (
              <article
                key={product.id}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain mb-4"
                />
                <h2 className="font-semibold text-lg mb-2 line-clamp-1">
                  {product.title}
                </h2>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {product.rating.rate} ★ ({product.rating.count})
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default App
