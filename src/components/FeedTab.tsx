import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share, Camera } from "lucide-react";
import PawPalHeader from "./PawPalHeader";

const FeedTab = () => {
  const [posts] = useState([
    {
      id: '1',
      user: { name: 'Sarah Johnson', avatar: '', location: 'Petville' },
      pet: { name: 'Max', breed: 'Golden Retriever' },
      content: 'Max had the best day at the dog park today! He made so many new friends 🐕',
      image: '',
      likes: 24,
      comments: 8,
      timeAgo: '2h ago',
      isLiked: false
    },
    {
      id: '2',
      user: { name: 'Mike Chen', avatar: '', location: 'Downtown' },
      pet: { name: 'Luna', breed: 'Border Collie' },
      content: 'Luna learned a new trick today! Teaching fetch has never been more rewarding 🎾',
      image: '',
      likes: 18,
      comments: 5,
      timeAgo: '4h ago',
      isLiked: true
    }
  ]);

  return (
    <div className="flex flex-col h-screen bg-background">
      <PawPalHeader title="Pawpal" showSearch />

      <div className="flex-1 overflow-y-auto pb-20 p-4 space-y-4">
        {/* Create Post Card */}
        <Card className="bg-gradient-card shadow-soft border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10 border-2 border-primary/20">
                <AvatarFallback className="bg-paw-blue text-primary-foreground font-semibold">
                  You
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Button
                  variant="outline"
                  className="w-full justify-start text-muted-foreground bg-muted hover:bg-muted/80"
                >
                  Share your pet's adventure...
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-paw-blue hover:bg-paw-blue/10">
                <Camera className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        {posts.map((post) => (
          <Card key={post.id} className="bg-gradient-card shadow-soft border-border/50 hover:shadow-warm transition-shadow duration-300">
            <CardContent className="p-0">
              {/* Post Header */}
              <div className="p-4 border-b border-border/50">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-paw-blue text-primary-foreground font-semibold">
                      {post.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-foreground">{post.user.name}</h3>
                      <span className="text-xs text-paw-blue font-medium">with {post.pet.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{post.timeAgo} • {post.user.location}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-foreground mb-3">{post.content}</p>
                {post.image && (
                  <div className="w-full h-48 bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Post Actions */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`text-muted-foreground hover:text-paw-blue ${post.isLiked ? 'text-paw-blue' : ''}`}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-paw-blue">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {post.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-paw-green">
                    <Share className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedTab;