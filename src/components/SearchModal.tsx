import { useState } from "react";
import { Search, X, Clock, TrendingUp, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSearch?: (query: string) => void;
}

const quickSuggestions = [
    { icon: TrendingUp, label: "Popular Posts", category: "trending" },
    { icon: Users, label: "Dog Parks", category: "places" },
    { icon: Calendar, label: "Events", category: "events" },
    { icon: MapPin, label: "Veterinarians", category: "vets" },
    { icon: Users, label: "Dog Groups", category: "groups" },
    { icon: Calendar, label: "Playdates", category: "playdates" },
];

const recentSearches = [
    "Golden Retriever meetup",
    "Dog training classes",
    "Pet grooming services",
    "Dog-friendly restaurants",
];

const SearchModal = ({ isOpen, onClose, onSearch }: SearchModalProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentSearchesList] = useState(recentSearches);

    const handleSearch = (query: string) => {
        onSearch?.(query);
        onClose();
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchQuery(suggestion);
        handleSearch(suggestion);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md rounded-xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        Search PawPal
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Search Input */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search for posts, events, places..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && searchQuery.trim()) {
                                    handleSearch(searchQuery);
                                }
                            }}
                            className="pl-10"
                            autoFocus
                        />
                    </div>

                    {/* Quick Suggestions */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground">Quick Search</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {quickSuggestions.map((suggestion, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="justify-start h-auto p-3"
                                    onClick={() => handleSuggestionClick(suggestion.label)}
                                >
                                    <suggestion.icon className="w-4 h-4 mr-2" />
                                    <span className="text-xs">{suggestion.label}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Searches */}
                    {recentSearchesList.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Recent Searches
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {recentSearchesList.map((search, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="cursor-pointer hover:bg-secondary/80"
                                        onClick={() => handleSuggestionClick(search)}
                                    >
                                        {search}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Search Button */}
                    <Button
                        onClick={() => handleSearch(searchQuery)}
                        disabled={!searchQuery.trim()}
                        className="w-full"
                    >
                        <Search className="w-4 h-4 mr-2" />
                        Search
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchModal;
