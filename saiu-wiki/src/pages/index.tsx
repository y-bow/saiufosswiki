import React from 'react';
import Layout from '@theme/Layout';
import { clubs } from '../data/clubs.config';
import ClubCard from '../components/ClubCard';

const IndexPage: React.FC = () => {
  return (
    <Layout title="SAIU Clubs Wiki" description="Sai University Club Hub">
      <div style={{ 
        padding: '4rem 2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        minHeight: '80vh'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 5rem)', 
            marginBottom: '1rem', 
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2196f3, #e91e63, #9c27b0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            SAIU Clubs Wiki
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            opacity: 0.8,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Discover, connect, and grow with the diverse student organizations at Sai University.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {clubs.map(club => (
            <ClubCard key={club.slug} club={club} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
