'use client';

import { useState } from 'react';
import Image from 'next/image';

export function LocationsSection() {
  const [searchArea, setSearchArea] = useState('');
  const [deliveryResult, setDeliveryResult] = useState<'none' | 'success' | 'fail'>('none');

  const deliveryAreas = ['Al Furjan', 'Jebel Ali', 'Discovery Gardens', 'Rose 13'];

  const handleSearch = () => {
    const found = deliveryAreas.some(area => 
      area.toLowerCase().includes(searchArea.toLowerCase())
    );
    setDeliveryResult(found ? 'success' : 'fail');
  };

  return (
    <section id="locations" className="bg-black border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
        {/* Header */}
        <div className="text-center mb-12 border-b-4 border-white pb-8">
          <h2 className="font-sans text-5xl lg:text-7xl font-black uppercase mb-6 tracking-tighter text-white">
            Our Flagship<br />Location
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Storefront Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-white mb-12 overflow-hidden">
          <div className="relative aspect-video lg:aspect-auto bg-black order-first lg:order-first">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_storefront.jpg-ottjddXGlsUrcNuF0zaC3wzRcbrqEg.png"
              alt="Chickies Storefront"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-gray-900 p-8 lg:p-12 border-l-4 border-white flex flex-col justify-center">
            <p className="font-mono text-sm text-gray-300 mb-6 leading-relaxed">
              Chickies Jebel Ali serves Al Furjan, Jebel Ali, Discovery Gardens, and surrounding areas. Enter your neighborhood to check delivery eligibility.
            </p>
            <div className="font-mono text-xs space-y-3 border-t-2 border-white pt-6">
              <p className="font-bold uppercase text-white">Hours:</p>
              <p className="text-gray-300">11:00 AM - 12:00 AM Daily</p>
              <p className="font-bold uppercase text-white mt-4">Contact:</p>
              <p className="text-gray-300">+971 4 123 4567</p>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="flex gap-4 mb-12 max-w-md mx-auto flex-col sm:flex-row">
          <input
            type="text"
            value={searchArea}
            onChange={(e) => setSearchArea(e.target.value)}
            placeholder="e.g. Al Furjan, Jebel Ali..."
            className="flex-1 font-mono text-sm px-4 py-3 border-2 border-white bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-700"
          />
          <button 
            onClick={handleSearch}
            className="btn-accent text-xs"
          >
            Check Area
          </button>
        </div>

        {/* Results */}
        {deliveryResult === 'success' && (
          <div className="max-w-md mx-auto border-4 border-red-600 bg-red-600 text-white p-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-sans font-bold text-lg uppercase mb-2">Delivery Available!</h3>
            <p className="font-mono text-xs mb-4">Great news! We deliver to {searchArea} in under 25 minutes.</p>
            <button className="btn-accent text-xs">Order Online Now</button>
          </div>
        )}

        {deliveryResult === 'fail' && (
          <div className="max-w-md mx-auto border-4 border-white bg-gray-900 p-8 text-center">
            <div className="text-4xl mb-3 text-red-600">✕</div>
            <h3 className="font-sans font-bold text-lg uppercase mb-2 text-white">Out of Range</h3>
            <p className="font-mono text-xs text-gray-300 mb-4">We don&apos;t currently deliver to {searchArea}. Try ordering via WhatsApp.</p>
            <button className="btn-primary text-xs w-full">Order via WhatsApp</button>
          </div>
        )}
      </div>
    </section>
  );
}
