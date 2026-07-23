import React from 'react';
import MemberCard from '../MemberCard';
import { sortedMembers } from '@site/src/data/members';

interface MembersGridProps {
  /** If true, show only core members. Default: show all. */
  coreOnly?: boolean;
}

export default function MembersGrid({ coreOnly = false }: MembersGridProps) {
  const displayMembers = coreOnly
    ? sortedMembers.filter((m) => m.isCore)
    : sortedMembers;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 8,
        marginTop: 24,
      }}
    >
      {displayMembers.map((member) => (
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
