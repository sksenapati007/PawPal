import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, UserPlus, MapPin, Heart } from "lucide-react";
import PawPalHeader from "./PawPalHeader";

const CommunityTab = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'groups' | 'discover'>('friends');

  const friends = [
    { id: '1', name: 'Sarah Johnson', location: 'Petville', mutualFriends: 12, pets: ['Max'], isOnline: true },
    { id: '2', name: 'Mike Chen', location: 'Downtown', mutualFriends: 8, pets: ['Luna', 'Charlie'], isOnline: false },
    { id: '3', name: 'Emma Davis', location: 'Uptown', mutualFriends: 5, pets: ['Bella'], isOnline: true },
  ];

  const groups = [
    { id: '1', name: 'Golden Retriever Lovers', members: 342, description: 'For all Golden Retriever enthusiasts!', isJoined: true },
    { id: '2', name: 'Dog Park Meetups', members: 156, description: 'Weekly meetups at local dog parks', isJoined: true },
    { id: '3', name: 'Pet Training Tips', members: 89, description: 'Share training experiences and tips', isJoined: false },
  ];

  const suggestions = [
    { id: '1', name: 'Alex Morgan', location: 'Nearby', mutualFriends: 3, pets: ['Ruby'], reason: 'Has a Golden Retriever' },
    { id: '2', name: 'Lisa Wong', location: 'Petville', mutualFriends: 7, pets: ['Oscar'], reason: 'Lives nearby' },
  ];

  const renderFriends = () => (
    <div className="space-y-4">
      {friends.map((friend) => (
        <Card key={friend.id} className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-paw-blue text-primary-foreground font-semibold">
                    {friend.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {friend.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-paw-green rounded-full border-2 border-white"></div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{friend.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{friend.location}</span>
                  <span>•</span>
                  <span>{friend.mutualFriends} mutual friends</span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <Heart className="w-3 h-3 text-paw-orange" />
                  <span className="text-xs text-muted-foreground">
                    Pet parent to {friend.pets.join(', ')}
                  </span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGroups = () => (
    <div className="space-y-4">
      {groups.map((group) => (
        <Card key={group.id} className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarFallback className="bg-paw-green text-primary-foreground font-semibold">
                  {group.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-foreground">{group.name}</h3>
                  {group.isJoined && (
                    <Badge className="bg-paw-green text-white text-xs">Joined</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Users className="w-3 h-3 mr-1" />
                  {group.members} members
                </div>
              </div>

              <Button
                variant={group.isJoined ? "outline" : "default"}
                size="sm"
                className={group.isJoined ? "border-primary/30 hover:bg-primary/5" : "bg-gradient-warm"}
              >
                {group.isJoined ? 'View' : 'Join'}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDiscover = () => (
    <div className="space-y-4">
      <Card className="bg-gradient-hero shadow-glow border-primary/20">
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-primary-foreground mb-2">Find Pet Parents Near You</h3>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Connect with other pet lovers in your area for playdates and adventures
          </p>
          <Button variant="outline" className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30">
            <MapPin className="w-4 h-4 mr-2" />
            Enable Location
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Suggested Friends</h4>
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} className="bg-gradient-card shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-paw-warm text-primary-foreground font-semibold">
                    {suggestion.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{suggestion.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{suggestion.location}</span>
                    <span>•</span>
                    <span>{suggestion.mutualFriends} mutual friends</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Badge variant="secondary" className="text-xs bg-paw-orange/20 text-paw-orange">
                      {suggestion.reason}
                    </Badge>
                  </div>
                </div>

                <Button size="sm" className="bg-gradient-warm">
                  <UserPlus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-background">
      <PawPalHeader title="Community" showSearch />

      <div className="flex-1 overflow-y-auto pb-20">
        {/* Tabs */}
        <div className="sticky top-0 bg-background/90 backdrop-blur-sm border-b border-border/50 p-4 z-30">
          <div className="flex space-x-2">
            {[
              { key: 'friends', label: 'Friends' },
              { key: 'groups', label: 'Groups' },
              { key: 'discover', label: 'Discover' }
            ].map((tab) => (
              <Button
                key={tab.key}
                variant={activeTab === tab.key ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.key as any)}
                className={activeTab === tab.key ? "bg-gradient-warm shadow-soft" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {activeTab === 'friends' && renderFriends()}
          {activeTab === 'groups' && renderGroups()}
          {activeTab === 'discover' && renderDiscover()}
        </div>
      </div>
    </div>
  );
};

export default CommunityTab;