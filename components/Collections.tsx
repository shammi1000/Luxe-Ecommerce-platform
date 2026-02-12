'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Collection {
  id: number;
  name: string;
  image: string;
  description: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: 'Spring Edit',
    image: '/collection-1.jpg',
    description: 'Fresh & Vibrant',
  },
  {
    id: 2,
    name: 'Evening Elegance',
    image: '/collection-2.jpg',
    description: 'Sophisticated Styles',
  },
  {
    id: 3,
    name: 'Casual Chic',
    image: '/collection-3.jpg',
    description: 'Effortless Comfort',
  },
];

export default function Collections() {
  const [collectionView, setCollectionView] = useState<string | null>(null);

  const handleCollectionClick = (collectionName: string) => {
    setCollectionView(collectionName);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Shop Our Collections
        </h2>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer h-80 md:h-96"
            >
              {/* Image */}
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-bold text-white mb-2 text-balance text-center">
                  {collection.name}
                </h3>
                <p className="text-white/80 text-sm tracking-wide">
                  {collection.description}
                </p>
                <button 
                  onClick={() => handleCollectionClick(collection.name)}
                  className="mt-6 border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-2 text-sm font-semibold transition opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 cursor-pointer"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="mt-20 bg-foreground text-background rounded-none overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Content */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Limited Edition
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Artisan Collection
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Exclusive pieces crafted by master artisans. Each item tells a story of heritage, craftsmanship, and contemporary design.
              </p>
              <button 
                onClick={() => handleCollectionClick('Artisan Collection')}
                className="bg-accent hover:opacity-90 text-accent-foreground px-8 py-3 text-sm font-semibold inline-flex w-fit transition cursor-pointer"
              >
                Discover Now
              </button>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-auto min-h-96">
              <Image
                src="/collection-banner.jpg"
                alt="Artisan Collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
