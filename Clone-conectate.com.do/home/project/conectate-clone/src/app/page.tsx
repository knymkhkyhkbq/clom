import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { LotteryResults } from '@/components/lottery-results';
import { CinemaSection } from '@/components/cinema-section';
import { LifestyleSection } from '@/components/lifestyle-tourism';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto py-8 px-4">
        <LotteryResults />
        <CinemaSection />
        <LifestyleSection />
      </div>

      <Footer />
    </main>
  );
}
