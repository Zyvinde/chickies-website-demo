import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { MenuSection } from '@/components/menu-section';
import { LocationsSection } from '@/components/locations-section';
import { DeliverySection } from '@/components/delivery-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MenuSection />
      <LocationsSection />
      <DeliverySection />
      <Footer />
    </main>
  );
}
