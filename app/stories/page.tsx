import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Behind the Seams: Crafting Excellence',
    excerpt: 'Discover how our designers create pieces that tell stories of tradition and innovation.',
    image: '/collection-1.jpg',
    date: 'March 15, 2024',
    category: 'Craftsmanship',
  },
  {
    id: 2,
    title: 'Sustainable Luxury: A New Standard',
    excerpt: 'Explore our commitment to environmental responsibility without compromising on elegance.',
    image: '/collection-2.jpg',
    date: 'March 10, 2024',
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'The Art of Curation',
    excerpt: 'Learn how we select each piece for quality, design, and brand heritage.',
    image: '/collection-3.jpg',
    date: 'March 5, 2024',
    category: 'Curation',
  },
  {
    id: 4,
    title: 'Customer Spotlight: Your Stories',
    excerpt: 'Meet the people behind our community and how LUXE has become part of their lives.',
    image: '/product-1.jpg',
    date: 'February 28, 2024',
    category: 'Community',
  },
];

export default function Stories() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/collection-1.jpg"
            alt="LUXE Stories"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Stories</h1>
          <p className="text-xl text-gray-200">Tales of Craftsmanship and Inspiration</p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-muted-foreground text-lg">
              Explore stories about design, craftsmanship, sustainability, and the people who make LUXE special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <article
                key={story.id}
                className="group cursor-pointer hover:opacity-80 transition"
              >
                {/* Image */}
                <div className="relative h-64 bg-secondary rounded-lg overflow-hidden mb-6">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {story.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{story.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.excerpt}
                  </p>
                  <button className="text-accent font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3 font-semibold transition">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and never miss a story, update, or exclusive offer.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:opacity-90 text-accent-foreground px-6 py-3 font-semibold rounded transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
