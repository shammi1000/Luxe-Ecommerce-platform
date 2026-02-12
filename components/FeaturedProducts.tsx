'use client';

import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: '$1,299',
    image: '/product-1.jpg',
    category: 'Outerwear',
  },
  {
    id: 2,
    name: 'Silk Evening Gown',
    price: '$2,450',
    image: '/product-2.jpg',
    category: 'Dresses',
  },
  {
    id: 3,
    name: 'Cashmere Knit Sweater',
    price: '$895',
    image: '/product-3.jpg',
    category: 'Knitwear',
  },
  {
    id: 4,
    name: 'Designer Handbag',
    price: '$3,200',
    image: '/product-4.jpg',
    category: 'Accessories',
  },
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price.replace('$', '').replace(',', ''),
      quantity: 1,
    } as any);
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(null), 2000);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="featured-products" className="py-20 bg-background">
      {notification && (
        <div className="fixed top-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          {notification}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked selections from our exclusive designers
            </p>
          </div>
          <a href="#" className="text-accent font-medium hover:underline hidden sm:block">
            View All →
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image */}
              <div className="relative h-96 bg-secondary overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay Actions */}
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 animate-in fade-in duration-200">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-accent hover:opacity-90 text-white p-3 rounded-full transition flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <ShoppingBag size={20} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="bg-white hover:bg-gray-100 text-foreground p-3 rounded-full transition"
                    >
                      <Heart
                        size={20}
                        fill={favorites.includes(product.id) ? 'currentColor' : 'none'}
                        className={
                          favorites.includes(product.id)
                            ? 'text-accent'
                            : 'text-foreground'
                        }
                      />
                    </button>
                  </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 text-xs font-semibold">
                    NEW
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="mb-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">
                  {product.name}
                </h3>
              </div>

              {/* Price */}
              <p className="text-lg font-bold text-foreground">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View All Mobile */}
        <div className="text-center mt-12 sm:hidden">
          <a href="#" className="text-accent font-medium hover:underline">
            View All Featured →
          </a>
        </div>
      </div>
    </section>
  );
}
