import React from 'react';
import { ClubConfig } from '../data/clubs.config';
import Link from '@docusaurus/Link';

interface ClubCardProps {
  club: ClubConfig;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Link to={`/clubs/${club.slug}/about`} style={{ textDecoration: 'none' }}>
      <div 
        className="club-card" 
        style={{
          padding: '1.5rem',
          borderRadius: '12px',
          border: `1px solid ${club.color}44`,
          backgroundColor: 'var(--ifm-card-background-color)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = `0 12px 24px ${club.color}33`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <h3 style={{ color: club.color, margin: 0, fontSize: '1.5rem' }}>{club.name}</h3>
        <p style={{ margin: 0, opacity: 0.8 }}>{club.tagline}</p>
      </div>
    </Link>
  );
};

export default ClubCard;
