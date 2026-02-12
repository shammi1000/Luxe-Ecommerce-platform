'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Premium Leather Jacket',
    price: 1299,
    image: '/product-1.jpg',
    quantity: 1,
    category: 'Outerwear',
  },
  {
    id: 2,
    name: 'Silk Evening Gown',
    price: 2450,
    image: '/product-2.jpg',
    quantity: 1,
    category: 'Dresses',
  },
  {
    id: 3,
    name: 'Cashmere Knit Sweater',
    price: 895,
    image: '/product-3.jpg',
    quantity: 2,
    category: 'Knitwear',
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'LUXE20') {
      setDiscount(0.2);
      alert('Promo code applied! 20% discount');
    } else if (promoCode.toUpperCase() === 'SAVE10') {
      setDiscount(0.1);
      alert('Promo code applied! 10% discount');
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const discountAmount = subtotal * discount;
  const total = subtotal + tax - discountAmount;
  const shipping = total > 100 ? 0 : 15;
  const finalTotal = total + shipping;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Title */}
      <section className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Start shopping to add items to your cart
              </p>
              <Link href="/#featured-products" className="inline-block bg-accent hover:opacity-90 text-white px-8 py-3 rounded font-semibold transition">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-secondary p-6 rounded-lg flex gap-6 hover:shadow-lg transition"
                    >
                      {/* Item Image */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="96px"
                          className="object-cover rounded"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase mb-1">
                              {item.category}
                            </p>
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-muted-foreground hover:text-accent transition cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 bg-background rounded px-3 py-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, -1)}
                              className="text-foreground hover:text-accent transition cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="text-foreground hover:text-accent transition cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <p className="text-lg font-bold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link href="/#featured-products" className="inline-block mt-8 text-accent font-medium hover:underline">
                  ← Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="bg-secondary p-8 rounded-lg h-fit sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span className="font-semibold text-foreground">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-foreground">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-green-600">Discount ({(discount * 100).toFixed(0)}%)</span>
                      <span className="font-semibold text-green-600">
                        -${discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Promo Code */}
                <form onSubmit={handlePromoCode} className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-foreground hover:opacity-90 text-background px-4 py-2 rounded font-semibold transition cursor-pointer text-sm"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Try LUXE20 or SAVE10
                  </p>
                </form>

                {/* Total */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-accent">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-accent hover:opacity-90 text-white py-3 rounded font-semibold transition cursor-pointer mb-4">
                  Proceed to Checkout
                </button>

                <button className="w-full bg-secondary border-2 border-foreground text-foreground hover:bg-foreground hover:text-background py-3 rounded font-semibold transition cursor-pointer">
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
