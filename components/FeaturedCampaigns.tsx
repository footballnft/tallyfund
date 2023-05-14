import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';

interface Campaign {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface FeaturedCampaignsProps {
  campaigns: Campaign[];
}

const FeaturedCampaigns: React.FC<FeaturedCampaignsProps> = ({ campaigns }) => {
  const [featuredCampaigns, setFeaturedCampaigns] = useState<Campaign[]>([]);
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);

  useEffect(() => {
    setFeaturedCampaigns(campaigns);
  }, [campaigns]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampaignIndex((prevIndex) =>
        (prevIndex + 1) % featuredCampaigns.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredCampaigns]);

  if (featuredCampaigns.length === 0) {
    return <div>Loading...</div>;
  }

  const currentCampaign = featuredCampaigns[currentCampaignIndex];

  return (
    <div>
      <h2>Featured Campaign</h2>
      <CampaignCard campaign={currentCampaign} />
    </div>
  );
};

export default FeaturedCampaigns;
