import React from 'react';
import Link from '@docusaurus/Link';

const events = [
  {
    title: "FOSS Club Launch",
    date: "Sep 10, 2025",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/club-launch"
  },
  {
    title: "Git & GitHub Workshop",
    date: "Sep 17, 2025",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/git-github-workshop"
  },
  {
    title: "Linux Command Line Workshop",
    date: "Sep 24, 2025",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/linux-cli-workshop"
  },
  {
    title: "Antitrust Implications of FOSS",
    date: "Nov 20, 2025",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/antitrust-foss"
  },
  {
    title: "Law in FOSS: Who Owns Open Code?",
    date: "Nov 23, 2025",
    format: "Online",
    venue: "SAI University",
    status: "completed",
    slug: "/events/law-in-foss"
  },
  {
    title: "Decoding Life: AlphaFold & Protein Folding",
    date: "Dec 13, 2025",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/alphafold-session"
  },
  {
    title: "Beyond the Syllabus: Open Source Workshop",
    date: "Jan 30, 2026",
    format: "In-person",
    venue: "SAI University",
    status: "completed",
    slug: "/events/beyond-syllabus"
  },

];

export default function EventsTimeline() {
  return (
    <div style={{ margin: '2rem 0' }}>

      {/* Year badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
        <span style={{
          background: 'var(--ifm-color-primary)',
          color: '#0f1117',
          fontWeight: 700,
          fontSize: '13px',
          borderRadius: '9999px',
          padding: '4px 16px',
          letterSpacing: '0.05em',
        }}>
          2025 – 2026
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--ifm-toc-border-color)' }} />
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '24px' }}>

        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '7px',
          top: '8px',
          bottom: '8px',
          width: '2px',
          background: 'var(--ifm-toc-border-color)',
        }} />

        {events.map((event, i) => (
          <div key={i} style={{
            position: 'relative',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
          }}>

            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: '-21px',
              top: '14px',
              width: event.status === 'upcoming' ? '14px' : '12px',
              height: event.status === 'upcoming' ? '14px' : '12px',
              borderRadius: '50%',
              background: event.status === 'upcoming'
                ? 'var(--ifm-background-color)'
                : 'var(--ifm-color-primary)',
              border: `2px solid var(--ifm-color-primary)`,
              zIndex: 1,
            }} />

            {/* Card */}
            <Link
              to={event.slug}
              style={{ textDecoration: 'none', flex: 1 }}
            >
              <div style={{
                background: 'var(--ifm-background-surface-color)',
                border: '1px solid var(--ifm-toc-border-color)',
                borderRadius: '8px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--ifm-color-primary)';
                el.style.boxShadow = '0 2px 12px rgba(56,189,248,0.1)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'var(--ifm-toc-border-color)';
                el.style.boxShadow = 'none';
              }}
              >
                <div>
                  <div style={{
                    fontWeight: 600,
                    fontSize: '15px',
                    color: 'var(--ifm-color-content)',
                    marginBottom: '4px',
                  }}>
                    {event.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--ifm-color-content-secondary)',
                  }}>
                    {event.date} · {event.format} · {event.venue}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    background: event.status === 'upcoming' ? '#e0f2fe' : '#dcfce7',
                    color: event.status === 'upcoming' ? '#0284c7' : '#16a34a',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                  <span style={{
                    color: 'var(--ifm-color-primary)',
                    fontSize: '16px',
                    fontWeight: 300,
                  }}>→</span>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--ifm-toc-border-color)',
          fontSize: '14px',
          color: 'var(--ifm-color-content-secondary)',
        }}>
          Want to add an event writeup?{' '}
          <Link to="https://github.com/saiufoss/wiki/issues/new?template=add-event.md">
            Open an issue on GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
