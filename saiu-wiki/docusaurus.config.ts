import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { clubs } from './src/data/clubs.config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SAIU Clubs Wiki',
  tagline: 'Sai University Club Hub',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sai-university.github.io/saiu-clubs-wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sai-university', // Usually your GitHub org/user name.
  projectName: 'saiu-clubs-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ...clubs.map(club => [
      '@docusaurus/plugin-content-blog',
      {
        id: club.blogPluginId,
        path: club.routeBasePath,
        routeBasePath: club.routeBasePath,
        blogTitle: club.name,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
      }
    ]),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SAIU Clubs Wiki',
      logo: {
        alt: 'SAIU Clubs Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'dropdown',
          label: 'Clubs',
          position: 'left',
          items: clubs.map(club => ({
            label: club.name,
            to: `/clubs/${club.slug}/about`,
          })),
        },
        {
          href: 'https://github.com/sai-university/saiu-clubs-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'About',
              to: '/about',
            },
          ],
        },
        {
          title: 'Clubs',
          items: clubs.map(club => ({
            label: club.name,
            to: `/clubs/${club.slug}/about`,
          })),
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sai University. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
