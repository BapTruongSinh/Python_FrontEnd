import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FilterSidebar } from '@/components/listings/FilterSidebar';
import { ListingCard } from '@/components/listings/ListingCard';
import { DetailPanel } from '@/components/listings/DetailPanel';
import { ChevronDown, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    price: "45 Billion",
    address: "Thao Dien, District 2, HCMC",
    beds: 5,
    baths: 6,
    area: 450,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modern 3BR Apartment",
    price: "8.5 Billion",
    address: "Binh Thanh, HCMC",
    beds: 3,
    baths: 2,
    area: 110,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Eco Green Penthouse",
    price: "12 Billion",
    address: "District 7, HCMC",
    beds: 4,
    baths: 3,
    area: 180,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Commercial Office Space",
    price: "25 Billion",
    address: "District 1, HCMC",
    beds: 0,
    baths: 2,
    area: 200,
    type: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Garden Townhouse",
    price: "15 Billion",
    address: "District 9, HCMC",
    beds: 4,
    baths: 4,
    area: 250,
    type: "Townhouse",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
  }
];

const Listings = () => {
    const [selectedListing, setSelectedListing] = useState<typeof MOCK_LISTINGS[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <div className="bg-white">
        <Header />
      </div>
      
      <main className="pt-40 pb-16 max-w-[1440px] mx-auto px-6">
        <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="hidden lg:block sticky top-40 h-[calc(100vh-160px)] overflow-y-auto w-[300px] flex-shrink-0 scrollbar-none pb-10 transition-all duration-300">
                <FilterSidebar />
            </aside>

            {/* Center - Results */}
            <div className="flex-1 min-w-0">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-muted-foreground">Showing <span className="font-semibold text-foreground">125</span> results</p>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="h-9 gap-2">
                            Newest <ChevronDown className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center bg-white rounded-lg border border-border p-1">
                            <button className="p-1.5 rounded-md bg-secondary text-foreground shadow-sm">
                                <LayoutGrid className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded-md text-muted-foreground hover:bg-secondary/50">
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div 
                    className={cn(
                        "grid gap-6 pb-10 transition-all duration-300 ease-in-out",
                        selectedListing 
                            ? "grid-cols-1 md:grid-cols-2" 
                            : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    )}
                >
                    {MOCK_LISTINGS.map((listing) => (
                        <ListingCard 
                            key={listing.id}
                            {...listing}
                            isSelected={selectedListing?.id === listing.id}
                            onClick={() => setSelectedListing(listing)}
                        />
                    ))}
                </div>
            </div>

            {/* Right Sidebar - Detail Panel */}
            {selectedListing && (
                <aside className="hidden xl:block w-[400px] flex-shrink-0 sticky top-40 h-[calc(100vh-160px)] overflow-hidden animate-in slide-in-from-right-10 fade-in duration-300">
                    <DetailPanel 
                        listing={selectedListing} 
                        onClose={() => setSelectedListing(null)}
                    />
                </aside>
            )}
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default Listings;
