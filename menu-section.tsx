'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-black border-b-4 border-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[600px] items-stretch border-r-4 border-white">
          {/* Left Column - Content */}
          <div className="py-16 lg:py-24 px-4 lg:px-8 border-b-4 lg:border-b-0 border-white lg:border-r-4 border-white flex flex-col justify-center z-10">
            <div className="inline-block border-2 border-red-600 px-3 py-1 mb-8 bg-red-600 text-white font-mono text-xs uppercase tracking-[0.1em] font-bold w-fit">
              Featured Location
            </div>

            <h1 className="font-sans text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight mb-6 tracking-tighter text-white">
              Taste the<br />Difference.
            </h1>

            <p className="font-mono text-sm lg:text-base leading-relaxed mb-12 max-w-sm text-gray-300">
              Authentic Arabic Mandi, Indian Biryani, and world-famous Crispy Broasted Chicken. Fresh daily. Rapid delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-accent">
                ↗ Start Order
              </button>
              <button className="btn-secondary">
                View Menu
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full min-h-[400px] lg:min-h-0 bg-black order-first lg:order-last">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_storefront.jpg-ottjddXGlsUrcNuF0zaC3wzRcbrqEg.png"
              alt="Chickies Storefront"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
