import React from 'react';
import MemberCard from '../MemberCard';

// Add new members here when their PR is merged
// TODO: Fill in github usernames and fossunited usernames for core-member-2 and core-member-3
const members = [
  {
    name: 'Vaibhav B',
    role: 'President',
    batch: 2028,
    github: 'y-bow',
    fossunited: 'ybo',
    slug: 'vaibhav-b',
  },
  {
    // TODO: Replace "Core Member 2" with real name, and fill in github + fossunited usernames
    name: 'Core Member 2',
    role: 'Core Member',
    batch: 2028,
    github: '',   // TODO: Add github username
    fossunited: '',  // TODO: Add fossunited username
    slug: 'core-member-2',
  },
  {
    // TODO: Replace "Core Member 3" with real name, and fill in github + fossunited usernames
    name: 'Core Member 3',
    role: 'Core Member',
    batch: 2028,
    github: '',   // TODO: Add github username
    fossunited: '',  // TODO: Add fossunited username
    slug: 'core-member-3',
  },
];

export default function MembersGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8,
        marginTop: 24,
      }}
    >
      {members.map((member) => (
        <MemberCard key={member.slug} member={member} />
      ))}

      <style>{`
        @media (max-width: 996px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
