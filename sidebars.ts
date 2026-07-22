import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'about/index',
      label: 'Home',
    },
    {
      type: 'category',
      label: 'About the Club',
      collapsed: false,
      items: [
        'about/mission',
        'about/team',
        'about/contact',
      ],
    },
    {
      type: 'category',
      label: 'Events',
      collapsed: false,
      items: [
        'events/index',
        'events/club-launch',
        'events/git-github-workshop',
        'events/linux-cli-workshop',
        'events/antitrust-foss',
        'events/law-in-foss',
        'events/alphafold-session',
        'events/beyond-syllabus',
        'events/osm-mapping-party',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: true,
      items: [
        'projects/index',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'resources/index',
        'resources/foss-tools',
        'resources/policy',
        'resources/osm-guide',
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      collapsed: true,
      items: [
        'contribute/index',
        'contribute/add-event',
        'contribute/add-resource',
        'contribute/write-blog',
      ],
    },
  ],
};

export default sidebars;
