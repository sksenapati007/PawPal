import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchModal from "./SearchModal";
import pawpalLogo from "/pawpal-logo.png";

interface PawPalHeaderProps {
  title: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

const PawPalHeader = ({ title, showSearch = false, onSearch }: PawPalHeaderProps) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    onSearch?.(query);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-gradient-warm border-b border-border/50 backdrop-blur-sm h-16">
        <div className="flex items-center justify-between px-4 py-2 max-w-md mx-auto h-full">
          {/* Logo - Fixed size */}
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-glow overflow-hidden flex-shrink-0">
            <img
              src={pawpalLogo}
              alt="PawPal Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Page Title - Takes available space */}
          <div className="flex-1 px-3">
            <h1 className="text-lg font-bold text-primary-foreground truncate">
              {title}
            </h1>
            <p className="text-xs font-light text-primary-foreground/80">
              where every Paw finds a friend!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {showSearch && (
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/20 p-2"
                onClick={() => setIsSearchModalOpen(true)}
              >
                <Search className="w-5 h-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-white/20 p-2"
            >
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {showSearch && (
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
          onSearch={handleSearch}
        />
      )}
    </>
  );
};

export default PawPalHeader;