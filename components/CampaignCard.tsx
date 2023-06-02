import React from 'react';
import Image from 'next/image';

interface CampaignCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ id, imageUrl, title,  description }) => {
  return (
    <div>
      <Image src={imageUrl} alt={title} width={500} height={300} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CampaignCard;
