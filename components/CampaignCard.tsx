import React from 'react';
import Image from 'next/image';

interface CampaignCardProps {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ id, title, imageUrl, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={imageUrl} alt={title} width={500} height={300} />
    </div>
  );
};

export default CampaignCard;
