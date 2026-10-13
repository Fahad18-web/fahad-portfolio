# Fahad Portfolio

Premium personal portfolio for **Muhammad Fahad** — Software Engineering student & frontend / MERN developer.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- No heavy animation libs (pure CSS + Tailwind transitions)

## Features

- Dark luxury theme (`#0A0A0A` + mint/teal `#2DD4BF`)
- Responsive navigation + mobile menu
- Hero, tech strip, services, featured projects (LifeTracker, EstatePulse, MERN CRUD)
- Work process, about, contact form (mailto-based, no backend required)
- SEO metadata + Open Graph
- Accessible focus states, semantic HTML

## Getting started

```bash
cd fahad-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy (Vercel)

```bash
npm run build
npm start
```

Or connect the repo to [Vercel](https://vercel.com):

1. Import the GitHub repository
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: default (`.next`)
5. Deploy

No environment variables required for the current contact form (uses `mailto:`).

## Optional: hosted form backend

To replace the mailto flow with a real API:

1. Create a Formspree form or use Resend / API route
2. Point the contact form `action` / `fetch` to that endpoint
3. Keep validation + loading / success / error states as implemented

## Selected projects (from GitHub)

| Project       | Stack                          | Live / Repo                                      |
|---------------|--------------------------------|--------------------------------------------------|
| LifeTracker   | React, Tailwind, Node, MongoDB | https://life-tracker-mern.vercel.app/            |
| EstatePulse   | React 19, Redux, Express, JWT  | https://github.com/Fahad18-web/real-estate-project |
| MERN CRUD     | React, Express, MongoDB        | https://mern-crud-lime.vercel.app                |

## Contact

- Email: fa2367701@gmail.com
- GitHub: https://github.com/Fahad18-web

## Checklist before going live

- [ ] Confirm email address is correct
- [ ] Add LinkedIn if available
- [ ] Optional: real screenshots for project cards (replace gradient previews)
- [ ] Optional: Formspree / Resend for form submissions
- [ ] Add favicon if desired (replace `src/app/favicon.ico`)
