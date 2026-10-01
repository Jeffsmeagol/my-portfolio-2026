# Ifeoluwa Adebowale — Portfolio

A recruiter-facing portfolio built with React, TypeScript, TanStack Start/Router, Tailwind CSS, and Motion. It includes a homepage, selected work, an experience timeline, a technical toolkit, and contact links.

## Local development

```sh
npm ci
npm run dev
# If port 3000 is occupied:
npm run dev -- --port 3100
```

The Netlify adapter is used for production builds; ordinary local development does not require a Netlify account or service connection.

## Verification

```sh
npx tsc --noEmit
npm run lint
npm test
npm run build
```

Vitest runs with a separate configuration so component tests do not start Netlify or the application server. The regression tests cover glow positioning, frame batching, pointer exit, reduced-motion/touch behavior, scroll/unmount cleanup, shared effects, and first-paint theme selection with blocked storage.

## Updating content

Edit `src/lib/portfolio-data.tsx` for profile/contact URLs, experience, education, project summaries, and skills. The homepage features the analytics dashboard, tenant operations tool, and Interswitch reliability work. `ProjectCard` is shared with the experience page.

Keep role titles and dates accurate. Tie numerical outcomes to a project, baseline, measurement, and your contribution. Add public demos, source links, and employer-approved screenshots only when available; do not imply that private work has a public demo.

## Glow cards

`GlowCardGrid` sets shared effect variables and tracks pointer coordinates. `HoverGlowCard` and the avatar-style `GlowCard` use the same `GlowCardEffects` layers: blurred artwork behind content and a masked backdrop-filter border. No fixed height or size containment is required for content cards.

Use `glowColor` on content cards to set the artwork color. The default radius is 16px and glow-border width is 3px, matching the reference defaults. All grid effect props feed the shared CSS layers in `src/styles.css`. Touch/coarse-pointer and reduced-motion input skip pointer tracking; keyboard focus has a static highlight. `disableHoverGlow` opts a content card out.

Adapted from [Chánh Đại’s Glow Card Grid](https://chanhdai.com/components/glow-card-grid), credited to Chánh Đại and inspired by @jh3yy. The upstream MIT notice is retained in `licenses/chanhdai-MIT.txt`.

## Deployment

`npm run build` produces `dist/client` and the Netlify SSR handler. `netlify.toml` contains the existing Netlify configuration. Deploy through the existing site workflow; local edits do not publish automatically.

Review notes and screenshots from the September 2026 improvement pass are in `output/review/REVIEW.md`.
