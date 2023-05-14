import React from 'react';

interface StatisticsData {
  label: string;
  value: string | number;
}

const Statistics: React.FC<{ data: StatisticsData[] }> = ({ data }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <div>
        {data.map((item) => (
          <div key={item.label}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
