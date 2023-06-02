import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';

interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
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
      <CampaignCard
        id={currentCampaign.id}
        imageUrl={currentCampaign.imageUrl}
        title={currentCampaign.title}
        description={currentCampaign.description}
      />
    </div>
  );
};

export default FeaturedCampaigns;
