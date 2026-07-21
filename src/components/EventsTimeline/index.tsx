import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface EventItem {
  title: string;
  date: string;
  format: string;
  venue: string;
  status: 'completed' | 'upcoming';
  slug: string;
}

const events: EventItem[] = [
  {
    title: 'FOSS Club Launch',
    date: 'Sep 10, 2025',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/club-launch',
  },
  {
    title: 'Git & GitHub Workshop',
    date: 'Sep 17, 2025',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/git-github-workshop',
  },
  {
    title: 'Linux Command Line Workshop',
    date: 'Sep 24, 2025',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/linux-cli-workshop',
  },
  {
    title: 'Antitrust Implications of FOSS',
    date: 'Nov 20, 2025',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/antitrust-foss',
  },
  {
    title: 'Law in FOSS: Who Owns Open Code?',
    date: 'Nov 23, 2025',
    format: 'Online',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/law-in-foss',
  },
  {
    title: 'Decoding Life: AlphaFold & Protein Folding',
    date: 'Dec 13, 2025',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/alphafold-session',
  },
  {
    title: 'Beyond the Syllabus: Open Source Workshop',
    date: 'Jan 30, 2026',
    format: 'In-person',
    venue: 'SAI University',
    status: 'completed',
    slug: '/docs/events/beyond-syllabus',
  },
  {
    title: 'OpenStreetMap Mapping Party',
    date: 'TBD',
    format: 'In-person',
    venue: 'SAI University',
    status: 'upcoming',
    slug: '/docs/events/osm-mapping-party',
  },
];

export default function EventsTimeline(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.yearBadge}>2025–2026</div>

      <div className={styles.timeline}>
        {events.map((event, index) => {
          const isUpcoming = event.status === 'upcoming';
          const isLast = index === events.length - 1;

          return (
            <div key={event.title} className={styles.entry}>
              <div className={styles.dotColumn}>
                <div
                  className={`${styles.dot} ${isUpcoming ? styles.dotUpcoming : styles.dotCompleted} ${
                    isLast ? styles.dotLast : ''
                  }`}
                />
                {!isLast && <div className={styles.line} />}
              </div>

              <div className={styles.cardColumn}>
                <span className={styles.date}>{event.date}</span>
                <Link to={event.slug} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.title}>{event.title}</span>
                    <span
                      className={`${styles.badge} ${
                        isUpcoming ? styles.badgeUpcoming : styles.badgeCompleted
                      }`}
                    >
                      {isUpcoming ? 'UPCOMING' : 'COMPLETED'}
                    </span>
                  </div>
                  <div className={styles.meta}>
                    {event.format} · {event.venue}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <Link to="/docs/events" className={styles.viewAll}>
          View all events &rarr;
        </Link>
      </div>
    </div>
  );
}
