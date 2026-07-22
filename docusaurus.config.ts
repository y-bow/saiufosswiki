import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SaiU FOSS Wiki',
  tagline: 'A living record of the FOSS Club at Sai University',
  favicon: 'img/logo.png',

  future: {
    v4: true,
  },

  url: 'https://saiufoss.github.io',
  baseUrl: '/saiufosswiki/',

  organizationName: 'y-bow',
  projectName: 'saiufosswiki',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          editUrl:
            'https://github.com/y-bow/saiufosswiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          editUrl:
            'https://github.com/y-bow/saiufosswiki/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/saiu-foss-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'SaiU FOSS Wiki',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/y-bow/saiufosswiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'About the Club',
              to: '/docs/about',
            },
            {
              label: 'Events',
              to: '/docs/events',
            },
            {
              label: 'Projects',
              to: '/docs/projects',
            },
          ],
        },
        {
          title: 'Stay in Touch',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'FOSS United',
              href: 'https://fossunited.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/y-bow/saiufosswiki',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'Contributing Guide',
              to: '/docs/resources',
            },
            {
              label: 'Report an Issue',
              href: 'https://github.com/y-bow/saiufosswiki/issues',
            },
            {
              label: 'Open Source Licenses',
              href: 'https://creativecommons.org/licenses/by-sa/4.0/',
            },
          ],
        },
      ],
      copyright: `SaiU FOSS Club. Content: <a href="https://creativecommons.org/licenses/by-sa/4.0/" style="color: #7DD3FC;">CC BY-SA 4.0</a>. Code: <a href="https://opensource.org/licenses/MIT" style="color: #7DD3FC;">MIT</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
