'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Locations', href: '#locations' },
    { label: 'Story', href: '#story' },
    { label: 'Delivery', href: '#delivery' },
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-white bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-all hover:-translate-y-1 active:translate-y-0"
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rFp7Sgv9E9gRjim66csbSBR3f1Wp4N.png"
              alt="Chickies Restaurant & Grill"
              width={140}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="font-mono text-xs uppercase tracking-[0.2em] text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="btn-accent text-xs transition-all duration-300 hover:scale-110">
              Order Now
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border-2 border-white transition-all hover:bg-white hover:text-black"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="butt" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-4 border-white bg-black p-4 space-y-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-sm uppercase tracking-[0.1em] py-3 px-2 border-l-4 border-transparent hover:border-red-600 transition-all text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
