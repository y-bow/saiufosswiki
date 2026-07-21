# SAIU FOSS Wiki

A community-maintained knowledge base for the FOSS Club at SAI University. Built with [Docusaurus](https://docusaurus.io/) and hosted on GitHub Pages.

**Live site:** [saiufoss.github.io/saiufosswiki](https://saiufoss.github.io/saiufosswiki/)

---

## About

The SAIU FOSS Wiki is the central record of the FOSS Club's events, projects, resources, and blog posts. It is maintained collaboratively by club members and open to contributions from anyone in the community.

This project is part of the [FOSS United](https://fossunited.org) campus clubs network.

## Structure

```
docs/
  about/          Club overview and mission
  events/         Event writeups and recaps
  projects/       Club-maintained open source projects
  resources/      Curated FOSS tools, guides, and policy links
blog/             Student posts and club updates
src/
  components/     Custom React components
  css/            Theme and global styles
  pages/          Homepage
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/y-bow/saiufosswiki.git
cd saiufosswiki
npm install
```

### Development

```bash
npm start
```

Opens a local development server at `http://localhost:3000/saiufosswiki/`.

### Production Build

```bash
npm run build
```

Generates static files in the `build/` directory.

### Preview Production Build

```bash
npm run serve
```

## Contributing

We welcome contributions from all club members and the wider community. You can:

- Add an event writeup under `docs/events/`
- Write a blog post under `blog/`
- Improve or add resources under `docs/resources/`
- Fix typos, update information, or suggest new content

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

### Adding an Event

1. Fork this repository
2. Create a branch: `git checkout -b add-my-event`
3. Add a markdown file under `docs/events/`
4. Submit a pull request

### Reporting Issues

Use the [issue templates](https://github.com/y-bow/saiufosswiki/issues/new/choose) to suggest events or resources.

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`. The workflow is defined in `.github/workflows/deploy.yml`.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Docusaurus 3 |
| Language | TypeScript |
| Styling | CSS Modules |
| Search | docusaurus-search-local |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## License

This repository uses a dual license:

- **Content** (markdown, blog posts, documentation): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Code** (source, configuration, components): [MIT](https://opensource.org/licenses/MIT)

See [LICENSE.md](LICENSE.md) for full details.

## Acknowledgements

- [FOSS United](https://fossunited.org) for the campus clubs program and knowledge base design inspiration
- [Docusaurus](https://docusaurus.io/) for the static site framework
- All club members who contribute content and maintain this wiki
