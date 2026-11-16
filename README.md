# Channels.social: Waitlist and Rebrand Landing Page

The public landing page for **Channels.social** (formerly **Chips.social**), a
community platform for topic-based group chats, curated profiles, events and
content sharing.

The page went through two phases, and both are in the history:

1. **Pre-launch waitlist** (Nov 2024): a marketing page with an email capture
   form posting to the product API, plus feature cards describing the product.
2. **Rebrand announcement** (Apr 2025, current): tells existing Chips.social
   users that the product is now Channels.social, that their data has been
   migrated, and points them to the new app or a booking link to talk to the
   team.

## Features

- **Waitlist sign-up:** email input with client-side validation, posted with
  Axios to `POST /api/join-waitlist`. The server's response message is shown
  inline, and the field resets on success.
- **Feature showcase:** four alternating, color-coded cards ("More than just a
  link-in-bio", "Create your digital space", "Manage and share content",
  "Discover and connect") with product imagery served from S3.
- **Rebrand screen:** a split layout with the brand panel and calls to action on
  the left and an illustration on the right; primary CTA to channels.social and
  a secondary CTA that opens a Calendly booking.
- **SEO and social previews:** per-page `<title>` and favicon via
  `react-helmet`, plus Open Graph meta tags in `public/index.html` for link
  previews.
- **Responsive layout:** hand-written CSS (no UI framework) with Rubik and Inter
  web fonts; the layout stacks on mobile.
- **Shared footer** with social links.

## Tech stack

| | |
|---|---|
| Framework | React 18 (Create React App) |
| HTTP | Axios |
| Head management | react-helmet |
| Styling | Plain CSS, Google Fonts (Rubik, Inter) |
| Assets | SVG logos and illustrations; card images on AWS S3 |

## Project structure

```
public/
  index.html        meta tags, Open Graph card, fonts
src/
  App.js            landing / rebrand screen (the waitlist form is in git history)
  Footer.js         social links footer
  App.css           layout and responsive styles
  assets/           logos, arrow icon, hero illustration
```

## Running locally

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
```

To see the original waitlist version with the email form:

```bash
git log --oneline          # find the commit before "Chips"
git checkout <commit> -- src/App.js
```

## Context

Built for Chips2Connect, the startup behind Chips.social and Channels.social, to
collect early-access sign-ups before launch and later to carry users through the
rename without losing them.
