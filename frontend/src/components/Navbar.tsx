import { Link } from 'react-router-dom';
import { ShoppingBag, User, LogIn, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-400 flex items-center justify-center text-white font-bold text-xl">
                CT
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Campus Thrift</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Marketplace</Link>
            <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Categories</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Sign in
            </Link>
            <Link to="/register" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/25">
              Start Selling
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/marketplace" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">Marketplace</Link>
            <Link to="/categories" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">Categories</Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-primary-600">Sign in</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
