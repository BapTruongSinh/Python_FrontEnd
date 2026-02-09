import { useState } from 'react';
import { Star, MapPin, Bed, Bath, Maximize, Phone, Calendar, Share2, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DetailPanelProps {
  listing: any; // Type strictly in real app
  onClose?: () => void;
}

export const DetailPanel = ({ listing, onClose }: DetailPanelProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'about'>('overview');

  if (!listing) return (
    <div className="h-full flex items-center justify-center text-muted-foreground bg-white rounded-xl border border-border">
      <p>Select a property to view details</p>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg border border-border min-h-[750px] h-fit sticky top-24 overflow-hidden">
        {/* Header Image */}
        <div className="relative h-48 w-full">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
            <button className="absolute top-4 right-14 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                <Share2 className="w-4 h-4" />
            </button>
            <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors text-red-500">
                <Heart className="w-4 h-4 fill-current" />
            </button>
            <button 
                onClick={onClose}
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                title="Close"
            >
                <X className="w-4 h-4" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="mb-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                    <h2 className="text-xl font-bold text-foreground leading-tight">{listing.title}</h2>
                    <span className="text-xl font-bold text-primary whitespace-nowrap">{listing.price}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.address}</span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    <div className="bg-secondary/50 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <Bed className="w-4 h-4 text-primary" />
                        <span className="font-medium">{listing.beds} Beds</span>
                    </div>
                    <div className="bg-secondary/50 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <Bath className="w-4 h-4 text-primary" />
                        <span className="font-medium">{listing.baths} Baths</span>
                    </div>
                    <div className="bg-secondary/50 px-3 py-1.5 rounded-lg flex items-center gap-2">
                        <Maximize className="w-4 h-4 text-primary" />
                        <span className="font-medium">{listing.area} m²</span>
                    </div>
                </div>
            </div>

            <div className="border-b border-border mb-6">
                <div className="flex gap-6">
                    {['overview', 'reviews', 'about'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`pb-3 text-sm font-medium capitalize transition-colors relative ${
                                activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4 mb-8 min-h-[150px]">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Experience luxury living in this stunning property located in the heart of the city. 
                    Featuring modern amenities, spacious interiors, and breathtaking views. 
                    Perfect for families or professionals seeking a premium lifestyle.
                </p>
                
                <h4 className="font-semibold text-sm mt-4 mb-2">Features</h4>
                <div className="flex flex-wrap gap-2">
                    {['Garden', 'Swimming Pool', 'Garage', 'Smart Home', '24/7 Security'].map((feature) => (
                        <span key={feature} className="text-xs bg-accent/5 text-accent px-2.5 py-1 rounded-full font-medium">
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Agent */}
            <div className="flex items-center gap-3 mb-6 p-3 bg-secondary/30 rounded-xl">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-agent.jpg" />
                    <AvatarFallback>AG</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h4 className="text-sm font-semibold">Sarah Nguyen</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>4.9 (128 reviews)</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
                <Button className="w-full h-11 text-base font-semibold">
                    Contact Agent
                </Button>
                <Button variant="outline" className="w-full h-11 text-base font-semibold">
                    Book Viewing
                </Button>
            </div>
        </div>


    </div>
  );
};
