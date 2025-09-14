import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings, Edit, Heart, Calendar, MapPin, Phone, Mail, Camera } from "lucide-react";
import PawPalHeader from "./PawPalHeader";

const ProfileTab = () => {
  const [user] = useState({
    name: 'Demo User',
    email: 'demo@pawpal.com',
    location: 'Petville, CA',
    phone: '(555) 123-4567',
    bio: 'Proud pet parent of two amazing dogs! Love organizing playdates and exploring new trails.',
    joinDate: 'March 2024',
    stats: {
      posts: 24,
      events: 8,
      friends: 156
    }
  });

  const [pets] = useState([
    {
      id: '1',
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: 3,
      bio: 'Loves fetch and swimming! Very friendly with other dogs.',
      isPublic: true
    },
    {
      id: '2',
      name: 'Luna',
      breed: 'Border Collie',
      age: 2,
      bio: 'Super smart and energetic. Knows tons of tricks!',
      isPublic: true
    }
  ]);

  return (
    <div className="flex flex-col h-screen bg-background">
      <PawPalHeader title="Profile" showSearch />

      <div className="flex-1 overflow-y-auto pb-20 p-4 space-y-4">
        {/* User Profile Card */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader className="pb-3">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Avatar className="w-20 h-20 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-warm text-primary-foreground text-2xl font-bold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-paw-orange hover:bg-paw-orange/80 shadow-soft"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-1 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {user.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {user.joinDate}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {Object.entries(user.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-foreground mb-4">{user.bio}</p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                {user.email}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                {user.phone}
              </div>
            </div>

            <Button className="w-full mt-4 bg-gradient-warm hover:shadow-soft transition-all duration-200">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Pets Section */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">My Pets</CardTitle>
              <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">
                Add Pet
              </Button>
            </div>
          </CardHeader>

          <CardContent className="pt-0 space-y-4">
            {pets.map((pet) => (
              <div key={pet.id} className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarFallback className="bg-paw-blue text-primary-foreground text-lg font-bold">
                    {pet.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{pet.name}</h3>
                    <Badge variant="secondary" className="bg-paw-warm/20 text-paw-orange border-paw-orange/30">
                      {pet.isPublic ? 'Public' : 'Private'}
                    </Badge>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">{pet.breed} • {pet.age} years old</p>
                    <p className="text-foreground">{pet.bio}</p>
                  </div>

                  <Button variant="ghost" size="sm" className="mt-2 text-primary hover:bg-primary/10">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Pet Profile
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Privacy & Safety</CardTitle>
          </CardHeader>

          <CardContent className="pt-0 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-foreground">Profile Visibility</span>
              <Badge className="bg-paw-green text-white">Public</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground">Location Sharing</span>
              <Badge className="bg-paw-blue text-white">Friends Only</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground">Event Notifications</span>
              <Badge className="bg-paw-orange text-white">Enabled</Badge>
            </div>

            <Button variant="outline" className="w-full mt-4 border-primary/30 hover:bg-primary/5">
              Manage Privacy Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileTab;