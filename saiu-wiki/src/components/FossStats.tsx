import React from 'react';
import { useCountUp } from './useCountUp';

interface StatItem {
  label: string;
  value: number;
}

interface FossStatsProps {
  stats: StatItem[];
}

const StatNumber: React.FC<{ target: number }> = ({ target }) => {
  const count = useCountUp(target);
  return <span>{count}</span>;
};

const FossStats: React.FC<FossStatsProps> = ({ stats }) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
      gap: '2rem',
      margin: '2rem 0'
    }}>
      {stats.map((stat, idx) => (
        <div key={idx} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#39ff88' }}>
            <StatNumber target={stat.value} />
          </div>
          <div style={{ fontSize: '1rem', opacity: 0.8 }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default FossStats;
