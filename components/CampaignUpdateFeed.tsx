import React from 'react';

interface CampaignUpdate {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface CampaignUpdateFeedProps {
  updates: CampaignUpdate[];
}

const CampaignUpdateFeed: React.FC<CampaignUpdateFeedProps> = ({ updates }) => {
  return (
    <div className="campaign-update-feed">
      <h2 className="campaign-update-feed__title">Campaign Updates</h2>
      {updates.map((update) => (
        <div className="campaign-update-feed__item" key={update.id}>
          <h3 className="campaign-update-feed__item-title">{update.title}</h3>
          <p className="campaign-update-feed__item-content">{update.content}</p>
          <p className="campaign-update-feed__item-date">{update.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CampaignUpdateFeed;
