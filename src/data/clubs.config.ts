export interface ClubConfig {
  slug: string;
  name: string;
  tagline: string;
  theme: string;
  color: string;
  iconPath: string;
  blogPluginId: string;
  routeBasePath: string;
}

export const clubs: ClubConfig[] = [
  {
    slug: 'foss',
    name: 'FOSS Club',
    tagline: 'Free and Open Source Software enthusiasts.',
    theme: 'foss',
    color: '#39ff88',
    iconPath: '/img/icons/foss.svg',
    blogPluginId: 'blog-foss',
    routeBasePath: 'clubs/foss/blog',
  },
  {
    slug: 'gardening',
    name: 'Gardening Club',
    tagline: 'Cultivating nature and community.',
    theme: 'gardening',
    color: '#4caf50',
    iconPath: '/img/icons/gardening.svg',
    blogPluginId: 'blog-gardening',
    routeBasePath: 'clubs/gardening/blog',
  },
  {
    slug: 'music',
    name: 'Music Club',
    tagline: 'Where melodies meet community.',
    theme: 'music',
    color: '#e91e63',
    iconPath: '/img/icons/music.svg',
    blogPluginId: 'blog-music',
    routeBasePath: 'clubs/music/blog',
  },
  {
    slug: 'theatre',
    name: 'Theatre Club',
    tagline: 'All the world\'s a stage.',
    theme: 'theatre',
    color: '#ff9800',
    iconPath: '/img/icons/theatre.svg',
    blogPluginId: 'blog-theatre',
    routeBasePath: 'clubs/theatre/blog',
  },
  {
    slug: 'astronomy',
    name: 'Astronomy Club',
    tagline: 'Exploring the cosmos together.',
    theme: 'astronomy',
    color: '#2196f3',
    iconPath: '/img/icons/astronomy.svg',
    blogPluginId: 'blog-astronomy',
    routeBasePath: 'clubs/astronomy/blog',
  },
  {
    slug: 'dance',
    name: 'Dance Club',
    tagline: 'Express yourself through movement.',
    theme: 'dance',
    color: '#9c27b0',
    iconPath: '/img/icons/dance.svg',
    blogPluginId: 'blog-dance',
    routeBasePath: 'clubs/dance/blog',
  },
];
