import React from 'react';

interface ClubTerminalCardProps {
  title: string;
  content: React.ReactNode;
  prompt?: string;
}

const ClubTerminalCard: React.FC<ClubTerminalCardProps> = ({ title, content, prompt = '$ ' }) => {
  return (
    <div className="club-terminal-card" style={{
      backgroundColor: '#000',
      border: '1px solid var(--club-accent, #39ff88)',
      borderRadius: '4px',
      padding: '1rem',
      margin: '1rem 0',
      fontFamily: 'monospace',
      color: 'var(--club-accent, #39ff88)',
      boxShadow: '0 0 10px rgba(57, 255, 136, 0.2)'
    }}>
      <div className="terminal-header" style={{ 
        borderBottom: '1px solid var(--club-accent, #39ff88)', 
        marginBottom: '0.5rem', 
        paddingBottom: '0.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.8rem',
        opacity: 0.7
      }}>
        <span>{title}</span>
        <span>[x]</span>
      </div >
      <div className="terminal-body">
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: '0.5rem' }}>{prompt}</span>
          <div>{content}</div >
        </div >
      </div >
    </div >
  );
};

export default ClubTerminalCard;

