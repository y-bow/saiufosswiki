---
title: "Adding Your Member Profile"
---

# Add Your Member Profile

Your member profile lives on this wiki and shows up on the [Members](/about/members/) page. It takes about 5 minutes.

:::warning
**Do NOT edit `TEMPLATE.md` directly.** It is a read-only template. You must **copy** it to a new file and edit your copy.
:::

## Overview

You will touch **3 files**:

| File | What to do |
|------|------------|
| `docs/about/members/your-name.md` | **Create** — copy the template, fill in your details |
| `src/data/members.ts` | **Edit** — add your entry so the grid card appears |
| `sidebars.ts` | **Edit** — add your page to the sidebar |

## Step-by-step

### 1. Create a FOSS United account

Go to [fossunited.org](https://fossunited.org) and create your profile. **Set a profile photo there** — your wiki photo is pulled automatically from your FOSS United account.

### 2. Fork and clone

Click "Fork" at the top right of [saiufosswiki](https://github.com/y-bow/saiufosswiki), then clone your fork locally.

### 3. Create your profile page

```bash
cp docs/about/members/TEMPLATE.md docs/about/members/your-name.md
```

Open `docs/about/members/your-name.md` and replace the entire file with:

```mdx
---
title: Your Full Name
sidebar_label: Your Full Name
---

import { useMemberPhoto } from '@site/src/hooks/useMemberPhoto';

export function YourProfile() {
  const { photoUrl } = useMemberPhoto('your-fossunited-username', 'your-github-username');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
      <img
        src={photoUrl}
        alt="Your Full Name"
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
          border: '2px solid #38bdf8',
          objectFit: 'cover',
        }}
      />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 24 }}>Your Full Name</h1>
          <span
            style={{
              padding: '2px 10px',
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
              background: '#38bdf820',
              color: '#38bdf8',
            }}
          >
            Member
          </span>
        </div>
        <div style={{ fontSize: 13, color: '#8b949e', marginTop: 4 }}>Batch 20XX</div>
        <div style={{ display: 'flex', gap: 10, marginTop: 8, fontSize: 16 }}>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" title="GitHub">🐙</a>
          <a href="https://fossunited.org/u/your-fossunited-username" target="_blank" rel="noopener noreferrer" title="FOSS United">🌐</a>
        </div>
        <a
          href="https://fossunited.org/u/your-fossunited-username"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 8,
            fontSize: 13,
            color: '#38bdf8',
            textDecoration: 'none',
          }}
        >
          View FOSS United Profile →
        </a>
      </div>
    </div>
  );
}

<YourProfile />

## About

Write a short paragraph about yourself — what you study, what you're interested in, and what got you into FOSS.

---

*Contributing to the SAIU FOSS Wiki since 2025.*
```

Replace all the placeholder values (`your-github-username`, `your-fossunited-username`, `Your Full Name`, `Batch 20XX`, etc.) with your real info.

### 4. Register your member card

Open **`src/data/members.ts`** and add an entry to the `members` array:

```ts
{
  name: 'Your Full Name',
  role: 'Member',           // or 'Core Member'
  batch: 2028,
  slug: 'your-name',        // must match your .md filename (without extension)
  github: 'your-github-username',
  fossunited: 'your-fossunited-username',
  linkedin: 'your-linkedin-username',   // optional
  order: 6,                 // next number after the last member
  isCore: false,            // true only for core members
},
```

:::danger
The `slug` **must match** your `.md` filename exactly (without the `.md` extension). If your file is `john-doe.md`, the slug must be `'john-doe'`.
:::

### 5. Add to the sidebar

Open **`sidebars.ts`** and add your page ID to the "About the Club" category:

```ts
'about/members/your-name',   // matches your .md filename
```

### 6. Preview locally

```bash
npm run start
```

Visit `http://localhost:3000/saiufosswiki/about/members/your-name` to check your page, and `/about/members/` to see your card in the grid.

### 7. Submit a Pull Request

Push your branch and open a PR against `main`. A maintainer will review and merge it — usually within a few days. Once merged, your profile appears on the Members page automatically.

## Fields reference

| Field | Where | Required | Example |
|-------|-------|----------|---------|
| `name` | `.md` frontmatter + `members.ts` | Yes | `John Doe` |
| `role` | `members.ts` | Yes | `Member` |
| `batch` | `.md` + `members.ts` | Yes | `2028` |
| `slug` | `members.ts` | Yes | `john-doe` |
| `github` | `.md` + `members.ts` | Yes | `johndoe` |
| `fossunited` | `.md` + `members.ts` | Yes | `john_doe` |
| `linkedin` | `members.ts` | No | `john-doe` |
| `order` | `members.ts` | Yes | `6` |
| `isCore` | `members.ts` | Yes | `false` |

## Questions?

Open an [issue](https://github.com/y-bow/saiufosswiki/issues) or ping a maintainer in the FOSS Club chat.
