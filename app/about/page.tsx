import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/collection-2.jpg"
            alt="About LUXE"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-gray-200">Crafting Excellence Since 2015</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At LUXE, we believe that exceptional design transcends trends. Our mission is to curate the world's finest fashion and lifestyle products for discerning customers who appreciate quality, craftsmanship, and authenticity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every piece in our collection is carefully selected based on its design philosophy, material quality, and brand heritage. We partner with established designers and emerging talents to bring you collections that celebrate artistry and innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We envision a world where luxury is accessible, sustainable, and purposeful. Our goal is to become the trusted destination for curated fashion that tells stories of craftsmanship, heritage, and innovation.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every product undergoes rigorous selection to ensure it meets our exacting standards.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to responsible practices and partner with brands that share our values for environmental stewardship.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  We celebrate genuine craftsmanship and timeless design. Authenticity is at the heart of everything we do.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer First</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We provide exceptional service and support every step of your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">Our Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded by fashion enthusiasts with decades of combined experience in luxury retail, curation, and design, LUXE brings together a team of passionate individuals dedicated to delivering excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team works tirelessly to discover hidden gems, maintain relationships with designers, and ensure that every customer receives the exceptional experience they deserve.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
