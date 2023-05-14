import React from 'react';

interface CampaignProgressBarProps {
  progress: number;
}

const CampaignProgressBar: React.FC<CampaignProgressBarProps> = ({ progress }) => {
  const progressPercentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="campaign-progress-bar">
      <div className="campaign-progress-bar__fill" style={{ width: `${progressPercentage}%` }} />
      <div className="campaign-progress-bar__label">{`${progressPercentage}%`}</div>
    </div>
  );
};

export default CampaignProgressBar;
