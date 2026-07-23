import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

interface MemberData {
  name: string;
  role: string;
  batch: number;
  github: string;
  fossunited?: string;
  slug: string;
}

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

export default function MemberCard({ member }: { member: MemberData }) {
  const [photoUrl, setPhotoUrl] = useState(getGitHubAvatar(member.github));

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
    <Link
      to={`/members/${member.slug}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          padding: 16,
          borderRadius: 10,
          cursor: 'pointer',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid transparent',
            transition: 'border-color 0.2s',
            flexShrink: 0,
          }}
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
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{member.name}</div>
          <div style={{ fontSize: 13, color: '#8b949e' }}>{member.role}</div>
        </div>
      </div>
    </Link>
  );
}
