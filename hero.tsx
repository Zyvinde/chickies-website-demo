'use client';

export function Footer() {
  return (
    <footer className="bg-black border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-white pb-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-sans font-bold uppercase text-sm mb-4 text-white">Explore</h3>
            <nav className="space-y-2 font-mono text-xs text-gray-400">
              <a href="#menu" className="block hover:text-red-600 transition-colors">Menu</a>
              <a href="#locations" className="block hover:text-red-600 transition-colors">Locations</a>
              <a href="#story" className="block hover:text-red-600 transition-colors">Story</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Careers</a>
            </nav>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-sans font-bold uppercase text-sm mb-4 text-white">Support</h3>
            <nav className="space-y-2 font-mono text-xs text-gray-400">
              <a href="#" className="block hover:text-red-600 transition-colors">Contact Us</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Order Status</a>
              <a href="#" className="block hover:text-red-600 transition-colors">FAQ</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Feedback</a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-sans font-bold uppercase text-sm mb-4 text-white">Legal</h3>
            <nav className="space-y-2 font-mono text-xs text-gray-400">
              <a href="#" className="block hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Terms</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Cookies</a>
            </nav>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-sans font-bold uppercase text-sm mb-4 text-white">Connect</h3>
            <nav className="space-y-2 font-mono text-xs text-gray-400">
              <a href="#" className="block hover:text-red-600 transition-colors">Instagram</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Twitter</a>
              <a href="#" className="block hover:text-red-600 transition-colors">Facebook</a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-400">
          <p>© 2024 Chickies Restaurant & Grill. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
            <span className="text-gray-600">·</span>
            <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
