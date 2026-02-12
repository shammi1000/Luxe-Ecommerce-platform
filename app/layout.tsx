import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { CartProvider } from '@/lib/cart-context'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LUXE - Premium Fashion & Lifestyle Collections',
  description: 'Discover curated collections of premium fashion, accessories, and lifestyle products from around the world. Handpicked selections for the discerning customer.',
  generator: 'v0.app',
  keywords: ['fashion', 'luxury', 'premium', 'clothing', 'accessories', 'collections'],
  openGraph: {
    title: 'LUXE - Premium Fashion Collections',
    description: 'Discover curated collections of premium fashion and lifestyle products',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
