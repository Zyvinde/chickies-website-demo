'use client';

import Image from 'next/image';

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-black border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-white overflow-hidden">
          {/* Left - Image */}
          <div className="bg-black relative aspect-video lg:aspect-auto">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_fleet.png-W4szrUSf1sCr9PmABkKIOS7NEMxKFT.jpeg"
              alt="Chickies Delivery Fleet"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="p-8 lg:p-16 border-l-4 border-white bg-gray-900 flex flex-col justify-center">
            <h2 className="font-sans text-4xl lg:text-6xl font-black uppercase mb-6 leading-tight text-white">
              Always Hot.<br />Always Fast.
            </h2>

            <p className="font-mono text-sm leading-relaxed mb-8 text-gray-300">
              Our dedicated rapid-response fleet ensures your meal arrives fresh. We don&apos;t just deliver food—we deliver the experience.
            </p>

            <div className="flex gap-8 border-t-4 border-white pt-8">
              <div>
                <p className="font-sans text-4xl font-bold text-white">24 MIN</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">Avg Delivery</p>
              </div>
              <div>
                <p className="font-sans text-4xl font-bold text-white">100%</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">Heat Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
