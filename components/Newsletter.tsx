'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Stay Updated
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-muted-foreground">
            Get exclusive access to new collections, early sales, and curated style tips.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-sm font-semibold transition whitespace-nowrap flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Check size={18} />
                Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-foreground">50K+</p>
            <p className="text-muted-foreground text-sm mt-2">Subscribers worldwide</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">15%</p>
            <p className="text-muted-foreground text-sm mt-2">Off first purchase</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">Free</p>
            <p className="text-muted-foreground text-sm mt-2">Worldwide shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
}
