import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plus, Clock } from "lucide-react";
import PawPalHeader from "./PawPalHeader";
import { Event, getStorageItem } from "@/lib/storage";

const EventsTab = () => {
  const [events] = useState<Event[]>(getStorageItem('pawpal_events') || []);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'hosting'>('all');

  const filteredEvents = events.filter(event => {
    if (filter === 'upcoming') return new Date(event.date) >= new Date();
    if (filter === 'hosting') return event.hostId === 'demo-user';
    return true;
  });

  return (
    <div className="flex flex-col h-screen bg-background">
      <PawPalHeader title="Pet Events" showSearch />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Filter Tabs */}
        <div className="sticky top-0 bg-background/90 backdrop-blur-sm border-b border-border/50 p-4 z-30">
          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'All Events' },
              { key: 'upcoming', label: 'Upcoming' },
              { key: 'hosting', label: 'Hosting' }
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
          {/* Create Event Button */}
          <Card className="bg-gradient-hero shadow-glow hover:shadow-warm transition-all duration-300">
            <CardContent className="p-4">
              <Button
                className="w-full bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30"
                variant="outline"
              >
                <Plus className="w-4 h-4 mr-2" />
                Host a Pet Event
              </Button>
            </CardContent>
          </Card>

          {/* Events List */}
          {filteredEvents.map((event) => (
            <Card key={event.id} className="bg-gradient-card shadow-soft border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground mb-2">{event.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-paw-warm/20 text-paw-orange border-paw-orange/30">
                    {event.attendees.length}/{event.maxCapacity}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-foreground mb-4">{event.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-paw-blue" />
                    {event.location}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-paw-green" />
                    {event.attendees.length} pet parents attending
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button
                    className="flex-1 bg-gradient-warm hover:shadow-soft transition-all duration-200"
                    size="sm"
                  >
                    Join Event
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No events found</h3>
              <p className="text-muted-foreground">Be the first to create a pet event in your area!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsTab;