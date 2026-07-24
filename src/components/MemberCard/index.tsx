import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import type { Member } from '@site/src/data/members';

function getGitHubAvatar(username: string): string {
  return `https://github.com/${username}.png`;
}

async function fetchFossUnitedAvatar(username: string): Promise<string | null> {
  try {
    const res = await fetch(`https://fossunited.org/u/${username}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    const ogMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    if (ogMatch?.[1]) return ogMatch[1];
    const imgMatch = html.match(/<img[^>]*class=["'][^"']*profile[^"']*["'][^>]*src=["']([^"']+)["']/i);
    if (imgMatch?.[1]) return imgMatch[1];
    return null;
  } catch {
    return null;
  }
}

const iconBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 22,
  height: 22,
  borderRadius: 4,
  color: '#8b949e',
  transition: 'color 0.15s',
};

export default function MemberCard({ member }: { member: Member }) {
  const fallback = member.github ? getGitHubAvatar(member.github) : '/img/default-avatar.png';
  const [photoUrl, setPhotoUrl] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      if (member.fossunited) {
        const url = await fetchFossUnitedAvatar(member.fossunited);
        if (!cancelled && url) setPhotoUrl(url);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [member.fossunited, member.github]);

  return (
    <div
      className="member-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Link
        to={`/about/members/${member.slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div
          className="member-card__avatar"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#38bdf8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <img
            src={photoUrl}
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
        <div className="member-card__info">
          <div className="member-card__name">{member.name}</div>
          <div className="member-card__role">{member.role}</div>
        </div>
      </Link>
      <div className="member-card__links">
        {member.github && (
          <a
            href={`https://github.com/${member.github}`}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={iconBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#e6edf3'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#8b949e'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        )}
        {member.linkedin && (
          <a
            href={`https://linkedin.com/in/${member.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={iconBtnStyle}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#e6edf3'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#8b949e'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
