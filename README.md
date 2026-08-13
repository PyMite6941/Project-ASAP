# Project ASAP

**Immediate Project Recovery For All** — a disaster-relief web front end that connects survivors of natural disasters with first responders, volunteers, and resources.

React 18 + Vite single-page app, deployed to Cloudflare Pages.

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, mission, and contact sections |
| `/find-people` | Find People | Missing-persons listings with last known location |
| `/donate` | Donations | Donation flow (demo — no funds are processed) |
| `/login` | Login / Signup | Account entry |
| `/contacts` | Contacts | Team cards, program cards, and direct phone numbers for relief programs |

## Stack

- **React 18** with **react-router-dom 6** for client-side routing
- **Vite 5** for dev server and build
- **CSS Modules** per component (`*.module.css`) — each of `Navbar`, `Hero`, `Section`, `Footer` and every page owns its own scoped styles, with shared design tokens in `src/index.css`
- **Cloudflare Pages** for hosting, deployed by GitHub Actions on push to `main`

`Section.jsx` is the layout primitive the home page is built from — it takes a label, a heading, and a body slot, so page content is composed rather than hand-laid-out.

## Running locally

```bash
npm install
npm run dev        # dev server
npm run build      # production build to dist/
npm run preview    # serve the built output
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` to Cloudflare Pages under the project name `project-asap`. It needs two repository secrets:

| Secret | Purpose |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Pages deploy permission |
| `CLOUDFLARE_ACCOUNT_ID` | Target Cloudflare account |

`public/_redirects` maps all routes back to `index.html` so client-side routing survives a hard refresh on a deep link.

## Status

The routing, layout system, and all five pages are built and deploying. The donation flow is a front end only — the page states plainly that no funds are processed. The "Work" section on the home page is still placeholder copy and needs real content before this is shown to anyone as finished.
