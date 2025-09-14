import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Star, Clock, Filter, AlertTriangle } from "lucide-react";
import PawPalHeader from "./PawPalHeader";
import { VetProvider, getStorageItem } from "@/lib/storage";

const VetsTab = () => {
  const [providers] = useState<VetProvider[]>(getStorageItem('pawpal_vet_providers') || []);
  const [filter, setFilter] = useState<'all' | 'emergency' | 'available'>('all');

  const filteredProviders = providers.filter(provider => {
    if (filter === 'emergency') return provider.isEmergency;
    if (filter === 'available') return provider.isAvailable;
    return true;
  });

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <PawPalHeader title="Find Vets" showSearch />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 m-4 rounded-lg shadow-soft">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">Pet Emergency?</h3>
              <p className="text-sm opacity-90">Find 24/7 emergency vets near you</p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setFilter('emergency')}
              className="ml-auto"
            >
              Emergency Care
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="sticky top-0 bg-background/90 backdrop-blur-sm border-b border-border/50 p-4 z-30">
          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'All Services' },
              { key: 'emergency', label: 'Emergency' },
              { key: 'available', label: 'Available Now' }
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={filter === tab.key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tab.key as any)}
                className={filter === tab.key ? "bg-gradient-warm shadow-soft" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="p-4 space-y-4">
          {filteredProviders.map((provider) => (
            <Card key={provider.id} className="bg-gradient-card shadow-soft border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground flex-1 pr-2">{provider.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      {provider.isAvailable ? (
                        <Badge className="bg-paw-green text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                          Closed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{provider.rating}</span>
                    </div>
                    <Badge variant="secondary" className="bg-paw-blue/20 text-paw-blue border-paw-blue/30">
                      {provider.specialty}
                    </Badge>
                    {provider.isEmergency && (
                      <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-300">
                        24/7 Emergency
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {provider.distance} away
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-paw-blue" />
                    {provider.address}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2 text-paw-green" />
                    {provider.phone}
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button
                    className="flex-1 bg-gradient-warm hover:shadow-soft transition-all duration-200"
                    size="sm"
                    onClick={() => handleCall(provider.phone)}
                    disabled={!provider.isAvailable}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
                    <MapPin className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No providers found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VetsTab;