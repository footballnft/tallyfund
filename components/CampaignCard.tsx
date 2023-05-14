import React from 'react';
import Image from 'next/image';

interface Campaign {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <div>
      <h3>{campaign.title}</h3>
      <p>{campaign.description}</p>
      <Image src={campaign.imageUrl} alt={campaign.title} width={500} height={300} />
    </div>
  );
};

export default CampaignCard;
