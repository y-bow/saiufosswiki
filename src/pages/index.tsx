import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';

/* ─── SECTION 1: Hero ───────────────────────────── */

function HeroSection() {
  const {colorMode} = useColorMode();
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              Building SAI University's FOSS Ecosystem
            </Heading>
            <p className={styles.heroSubtitle}>
              We meet, we map, we build, we share — openly.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/events">
                Explore Events
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/about">
                Join the Club
              </Link>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            <img
              src={colorMode === 'dark' ? 'C:\Users\vaibh\Documents\GitHub\saiufosswiki\static\img\logo-light.png' : 'C:\Users\vaibh\Documents\GitHub\saiufosswiki\static\img\logo-dark.png'}
              alt="SAIU FOSS Club Logo"
              className={styles.heroLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: About ──────────────────────────── */

function AboutSection() {
  const goals = [
    {
      number: '01',
      text: 'To promote the spirit of hacking and tinkering.',
    },
    {
      number: '02',
      text: 'To build and contribute to FOSS projects.',
    },
    {
      number: '03',
      text: 'To evangelise the use of FOSS in education and communities.',
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <span className={styles.sectionLabel}>ABOUT</span>
            <Heading as="h2" className={styles.aboutTitle}>
              A community-driven space for free and open source software at SAI University.
            </Heading>
            <p className={styles.aboutText}>
              The FOSS Club at SAI University brings together students passionate
              about open source. We organise workshops, mapping parties, hack nights,
              and contribute to upstream projects — all in the spirit of learning by
              doing, sharing freely, and building in the open.
            </p>
          </div>
          <div className={styles.aboutRight}>
            <span className={styles.sectionLabel}>GOALS</span>
            <div className={styles.goalsList}>
              {goals.map((goal) => (
                <div key={goal.number} className={styles.goalItem}>
                  <span className={styles.goalNumber}>{goal.number}</span>
                  <p className={styles.goalText}>{goal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: Programs ───────────────────────── */

function ProgramsSection() {
  const programs = [
    {
      icon: '\u{1F4CB}',
      title: 'Events',
      description: 'Club events, mapping parties, workshops, and hack nights that bring the community together.',
      link: '/docs/events',
    },
    {
      icon: '\u{1F4DA}',
      title: 'Wiki & Resources',
      description: 'Curated FOSS resources, tool guides, policy links, and learning paths for students.',
      link: '/docs/resources',
    },
    {
      icon: '\u{1F4E6}',
      title: 'Projects',
      description: 'Open source projects built and maintained by club members for the campus and beyond.',
      link: '/docs/projects',
    },
  ];

  return (
    <section className={styles.programsSection}>
      <div className="container">
        <span className={styles.sectionLabel}>PROGRAMS</span>
        <Heading as="h2" className={styles.programsTitle}>
          What we do
        </Heading>
        <div className={styles.programsGrid}>
          {programs.map((program) => (
            <Link key={program.title} to={program.link} className={styles.programCard}>
              <span className={styles.programIcon}>{program.icon}</span>
              <Heading as="h3" className={styles.programCardTitle}>
                {program.title}
              </Heading>
              <p className={styles.programCardDesc}>{program.description}</p>
              <span className={styles.programCardLink}>View More &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: Recent Events ──────────────────── */

function EventsSection() {
  const events = [
    {
      badge: 'CHENNAI',
      title: 'OpenStreetMap Mapping Party',
      date: 'August 2025',
      location: 'SAI University Campus',
    },
    {
      badge: 'ONLINE',
      title: 'Intro to Git & GitHub Workshop',
      date: 'September 2025',
      location: 'Zoom',
    },
    {
      badge: 'CHENNAI',
      title: 'FOSS Install Fest',
      date: 'October 2025',
      location: 'SAI University, Chennai',
    },
  ];

  return (
    <section className={styles.eventsSection}>
      <div className="container">
        <span className={styles.sectionLabel}>EVENTS</span>
        <Heading as="h2" className={styles.eventsTitle}>
          Upcoming &amp; Recent Events
        </Heading>
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.title} className={styles.eventCard}>
              <span className={styles.eventBadge}>{event.badge}</span>
              <Heading as="h3" className={styles.eventCardTitle}>
                {event.title}
              </Heading>
              <p className={styles.eventCardMeta}>
                {event.date} &middot; {event.location}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.eventsFooter}>
          <Link to="/docs/events" className="button button--outline">
            View all Events &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: Contribute Banner ──────────────── */

function ContributeSection() {
  return (
    <section className={styles.contributeSection}>
      <div className="container">
        <div className={styles.contributeContent}>
          <Heading as="h2" className={styles.contributeTitle}>
            This wiki is open source
          </Heading>
          <p className={styles.contributeText}>
            Anyone can contribute &mdash; add an event writeup, fix a typo, or write a blog post.
          </p>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/y-bow/saiufosswiki">
            Contribute on GitHub &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────── */

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="A living record of the FOSS Club at SAI University">
      <HeroSection />
      <main>
        <AboutSection />
        <ProgramsSection />
        <EventsSection />
        <ContributeSection />
      </main>
    </Layout>
  );
}
