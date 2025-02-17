import { Menu, X, ShoppingCart, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type NavigationProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const navItems = [
  { label: 'Products', icon: <Package size={20} />, path: '/products' },
  { label: 'Cart', icon: <ShoppingCart size={20} />, path: '/cart' },
];

export function Navigation({ isOpen, onToggle }: NavigationProps) {
  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className={cn(
          'fixed top-4 right-4 z-50 p-2 lg:hidden',
          'rounded-lg hover:bg-accent transition-colors',
          isOpen && 'hidden'
        )}
        aria-label="Toggle navigation"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar navigation */}
      <nav
        className={cn(
          'fixed h-full bg-card border-r z-40 transition-transform',
          'w-64 -translate-x-full lg:translate-x-0',
          isOpen && 'translate-x-0'
        )}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold">FashionStore</h1>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 hover:bg-accent rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="w-full flex items-center gap-3 p-3 rounded hover:bg-accent"
              onClick={onToggle}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
} 