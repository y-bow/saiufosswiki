---
title: "Adding Your Member Profile"
---

# Add Your Member Profile

Your member profile lives on this wiki and shows up on the [Members](../members/) page. It takes less than 5 minutes.

## Steps

1. **Create a FOSS United account** — Go to [fossunited.org](https://fossunited.org) and create your profile. Set a profile photo there — your wiki profile photo is pulled automatically from your FOSS United account.

2. **Fork this repo** — Click "Fork" at the top right of [saiufosswiki](https://github.com/y-bow/saiufosswiki).

3. **Copy the template** — Find `docs/members/TEMPLATE.md` and copy it. Rename the copy to `your-name.md` (use lowercase and hyphens, like `john-doe.md`).

4. **Fill in the fields** — Open the file and fill in every frontmatter field. Your `fossunited` username is required. If you want a custom photo instead of your FOSS United avatar, upload it to `static/img/members/your-name.jpg` and set the `photo` field.

5. **Submit a Pull Request** — Push your changes and open a PR against `main`.

6. **A maintainer will review and merge it** — usually within a few days. Once merged, your profile will appear on the Members page automatically.

## Frontmatter Fields

| Field | Required | Example |
|-------|----------|---------|
| `name` | Yes | `Vaibhav B` |
| `role` | Yes | `President`, `Core Member`, or `Member` |
| `batch` | Yes | `2028` |
| `github` | Yes | `y-bow` |
| `fossunited` | Yes | `your-fossunited-username` |
| `photo` | No | `/img/members/your-name.jpg` (custom photo path, optional — FOSS United avatar used by default) |
| `linkedin` | No | `your-linkedin-username` |
| `instagram` | No | `your-instagram-username` |
| `email` | No | `you@example.com` |
| `about` | Yes | A short paragraph about yourself |
| `events` | Yes | List of events you attended |
| `projects` | Yes | List of projects you contributed to |

## Questions?

Open an [issue](https://github.com/y-bow/saiufosswiki/issues) or ping a maintainer in the FOSS Club chat.
