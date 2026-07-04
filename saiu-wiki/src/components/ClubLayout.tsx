import React from 'react';
import { clubs, ClubConfig } from '../data/clubs.config';
import ClubHero from './ClubHero';

interface ClubLayoutProps {
  slug: string;
  children: React.ReactNode;
}

const ClubLayout: React.FC<ClubLayoutProps> = ({ slug, children }) => {
  const club = clubs.find(c => c.slug === slug);
  
  if (!club) {
    return <div style={{ padding: '2rem' }}>{children}</div>;
  }

  return (
    <div 
      className="club-layout-wrapper" 
      style={{ 
        backgroundColor: 'var(--club-bg)', 
        color: 'var(--club-primary)', 
        minHeight: '100vh',
        fontFamily: 'var(--club-font)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <ClubHero club={club} />
      <main 
        className="club-content" 
        style={{ 
          padding: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto',
          minHeight: 'calc(100vh - 300px)'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default ClubLayout;
