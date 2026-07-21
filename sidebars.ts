import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'category',
      label: 'About',
      items: ['about/index'],
    },
    {
      type: 'category',
      label: 'Events',
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
      items: ['projects/index'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/index'],
    },
  ],
};

export default sidebars;
