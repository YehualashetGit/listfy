import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { useState } from 'react'

export function Layout() {
  const [isOpen, setIsOpen] = useState(true)
  
  return (
    <div className="flex">
      <Navigation isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <main className="flex-1 transition-all duration-300 ml-0 lg:ml-64 p-6">
        <Outlet />
      </main>
    </div>
  )
} 