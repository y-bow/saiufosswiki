# How to Contribute

Thank you for your interest in contributing to the SaiU FOSS Wiki! This is a community-maintained resource, and we welcome contributions from all club members.

## Getting Started

1. **Fork this repo** — Click the "Fork" button at the top right of [saiufoss/wiki](https://github.com/y-bow/saiufosswiki).

2. **Clone your fork** — Clone the repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/wiki.git
   cd wiki
   ```

3. **Create a new branch** — Give your branch a descriptive name:
   ```bash
   git checkout -b add-my-event
   ```

4. **Add your content** — You can:
   - Add an event writeup under `docs/events/`
   - Write a blog post under `blog/`
   - Improve a resource page under `docs/resources/`
   - Fix a typo or update information anywhere

5. **Submit a Pull Request** — Push your branch and open a PR against the `main` branch with a short description of your changes.

   ```bash
   git add .
    git commit -m "Add writeup for Git Workshop"
   git push origin add-my-event
   ```

A maintainer will review your PR and merge it. Thank you for contributing!

## What Can I Contribute?

- Event writeups and recaps
- Blog posts about your FOSS journey
- New resource links (tools, guides, policy pages)
- Project descriptions and documentation
- Corrections and improvements to existing content

## Add Your Member Profile

Your member profile lives on the wiki and shows up on the [Members](https://saiufosswiki.vercel.app/members) page. It takes less than 5 minutes.

1. **Create a FOSS United account** — Go to [fossunited.org](https://fossunited.org) and create your profile. Set a profile photo there — your wiki profile photo is pulled automatically from your FOSS United account.

2. **Fork this repo** — Click "Fork" at the top right of [saiufosswiki](https://github.com/y-bow/saiufosswiki).

3. **Copy the template** — Find `docs/about/members/TEMPLATE.md` and copy it. Rename the copy to `your-name.md` (use lowercase and hyphens, like `john-doe.md`).

4. **Fill in the fields** — Open the file and fill in every frontmatter field. Your `fossunited` username is required. If you want a custom photo instead of your FOSS United avatar, upload it to `static/img/members/your-name.jpg` and set the `photo` field.

5. **Submit a Pull Request** — Push your changes and open a PR against `main`.

## Style Guide

- Use Markdown (`.md` or `.mdx`) for all content files
- Include a title and description in the frontmatter
- Keep language clear and accessible
- Link to external resources where relevant

## Questions?

Open an [issue](https://github.com/y-bow/saiufosswiki/issues) or reach out to a club maintainer.
