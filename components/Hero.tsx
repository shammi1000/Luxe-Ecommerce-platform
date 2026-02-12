'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const handleExplore = () => {
    const element = document.getElementById('featured-products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLookbook = () => {
    alert('Lookbook: Coming soon! Browse our latest editorial shots.');
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Premium fashion collection"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Curated Excellence
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-balance">
          Discover our handpicked collection of premium products that redefine luxury and sophistication.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleExplore}
            className="bg-accent hover:opacity-90 text-accent-foreground px-8 py-3 text-sm font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Collection →
          </button>
          <button 
            onClick={handleLookbook}
            className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-sm font-semibold transition cursor-pointer"
          >
            View Lookbook
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
