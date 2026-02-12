'use client';

import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (link: string) => {
    console.log('Navigating to:', link);
  };

  const handleSocialClick = (social: string) => {
    console.log('Opening:', social);
    alert(`Follow us on ${social}!`);
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curated collections of premium fashion and lifestyle products from around the world.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Shop</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleLinkClick('New Arrivals')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  New Arrivals
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Best Sellers')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Collections')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Sale')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Sale
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleLinkClick('Contact Us')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Shipping & Returns')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Size Guide')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Size Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('FAQ')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleLinkClick('About Us')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Sustainability')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Sustainability
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Press')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Press
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('Careers')} className="text-gray-400 hover:text-white transition text-sm cursor-pointer">
                  Careers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2024 LUXE. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <button onClick={() => handleSocialClick('Instagram')} className="text-gray-400 hover:text-white transition cursor-pointer">
              <Instagram size={20} />
            </button>
            <button onClick={() => handleSocialClick('Facebook')} className="text-gray-400 hover:text-white transition cursor-pointer">
              <Facebook size={20} />
            </button>
            <button onClick={() => handleSocialClick('Twitter')} className="text-gray-400 hover:text-white transition cursor-pointer">
              <Twitter size={20} />
            </button>
            <button onClick={() => handleSocialClick('LinkedIn')} className="text-gray-400 hover:text-white transition cursor-pointer">
              <Linkedin size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <button onClick={() => handleLinkClick('Privacy')} className="text-gray-400 hover:text-white transition cursor-pointer">
              Privacy
            </button>
            <button onClick={() => handleLinkClick('Terms')} className="text-gray-400 hover:text-white transition cursor-pointer">
              Terms
            </button>
            <button onClick={() => handleLinkClick('Cookies')} className="text-gray-400 hover:text-white transition cursor-pointer">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
