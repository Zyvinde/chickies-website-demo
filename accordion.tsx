'use client';

import { useState } from 'react';
import Image from 'next/image';

export function MenuSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const items = [
    {
      title: 'Authentic Mandi',
      description: 'Traditional Platter Perfection',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_mandi-BfJhFFC02IuEkrtQOrVVFaSXFeV7Li.jpg',
    },
    {
      title: 'Signature Sips',
      description: 'Cool & Refreshing Vibes',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_sips-YWZ7172y3i7VYs6PlW8JYLEnai4J6u.jpg',
    },
    {
      title: 'Iced Bliss',
      description: 'Hand-Spun Creamy Delights',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_bliss-li47jePYlEPiPhnod8FcQ6mJIUWexk.jpg',
    },
  ];

  return (
    <section id="menu" className="bg-black border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
        {/* Section Header */}
        <div className="text-center mb-16 border-b-4 border-white pb-8">
          <h2 className="font-sans text-5xl lg:text-7xl font-black uppercase mb-6 tracking-tighter text-white">
            Our Fan<br />Favorites
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`border-2 border-white p-8 flex flex-col transition-all duration-300 ${
                hoveredCard === idx ? 'md:scale-105 md:shadow-xl md:z-10' : ''
              } ${
                idx !== items.length - 1 ? 'md:border-r-4' : ''
              } bg-gray-900`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-square bg-black border-b-2 border-white mb-6 transition-transform duration-300 hover:scale-110 overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-sans text-2xl font-bold uppercase mb-2 tracking-wide text-white">
                {item.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-gray-400 mb-8 flex-grow">
                {item.description}
              </p>

              <button className="btn-primary w-full transition-all duration-300 hover:tracking-widest">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
