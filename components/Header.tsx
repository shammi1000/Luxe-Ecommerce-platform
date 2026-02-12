'use client';

import { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-foreground tracking-tight hover:text-accent transition">
            LUXE
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#featured-products" className="text-sm font-medium text-foreground hover:text-accent transition">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition">
              About
            </Link>
            <Link href="/stories" className="text-sm font-medium text-foreground hover:text-accent transition">
              Stories
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleSearch}
              className="p-2 hover:bg-secondary rounded transition cursor-pointer"
            >
              <Search size={20} className="text-foreground" />
            </button>
            <Link 
              href="/cart"
              className="p-2 hover:bg-secondary rounded transition relative"
            >
              <ShoppingBag size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-white text-xs flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded transition"
            >
              {isMenuOpen ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <Link href="/#featured-products" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-accent transition">
              Collections
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-accent transition">
              About
            </Link>
            <Link href="/stories" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-accent transition">
              Stories
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-accent transition">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
