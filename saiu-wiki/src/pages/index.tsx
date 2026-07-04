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
        <h1 style={{ textAlign: 'center', fontSize: '3.5rem', marginBottom: '3rem', fontWeight: 'bold' }}>
          SAIU Clubs Wiki
        </h1>
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
