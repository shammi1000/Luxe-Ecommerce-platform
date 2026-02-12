'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Collections from '@/components/Collections';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Collections />
      <Newsletter />
      <Footer />
    </main>
  );
}
