import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FeedTab from "@/components/FeedTab";
import EventsTab from "@/components/EventsTab";
import VetsTab from "@/components/VetsTab";
import CommunityTab from "@/components/CommunityTab";
import ProfileTab from "@/components/ProfileTab";
import { initializeDemoData } from "@/lib/storage";

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');

  useEffect(() => {
    // Initialize demo data on first load
    initializeDemoData();
  }, []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'feed':
        return <FeedTab />;
      case 'events':
        return <EventsTab />;
      case 'vets':
        return <VetsTab />;
      case 'community':
        return <CommunityTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <FeedTab />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {renderActiveTab()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
