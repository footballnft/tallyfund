import React from 'react';
import CampaignCard from './CampaignCard';

interface PopularCampaignsProps {
  campaigns: Campaign[];
}

interface Campaign {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const PopularCampaigns: React.FC<PopularCampaignsProps> = ({ campaigns }) => {
  return (
    <div>
      <h2>Popular Campaigns</h2>
      {campaigns.map((campaign) => (
          <CampaignCard
          key={campaign.id}
          id={campaign.id}
          title={campaign.title}
          imageUrl={campaign.imageUrl}
          description={campaign.description}
        />
      ))}
    </div>
  );
};

export default PopularCampaigns;
