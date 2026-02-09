import { Header } from '@/components/Header';
import { CityHero } from '@/components/CityHero';
import { SearchModule } from '@/components/SearchModule';
import { FeaturedListings } from '@/components/FeaturedListings';
import { LocationTiles } from '@/components/LocationTiles';
import { NewProjects } from '@/components/NewProjects';
import { HowItWorks } from '@/components/HowItWorks';
import { AgentTrust } from '@/components/AgentTrust';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CityHero />
        <div className="pt-8 relative z-30 mb-16">
          <SearchModule />
        </div>
        <FeaturedListings />
        <LocationTiles />
        <NewProjects />
        <HowItWorks />
        <AgentTrust />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
