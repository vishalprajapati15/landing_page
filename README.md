# MaxPoint

Basic information for the MaxPoint project and a full folder structure.

**Project:** MaxPoint
- **Framework:** Next.js (16.3.0)
- **React:** 19.2.8
- **Language:** TypeScript
- **Styling / tools:** Tailwind CSS (v4), PostCSS

**Quick start**

Run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

**Available npm scripts**

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint`

**Notable dependencies**

- `next` 16.3.0
- `react` 19.2.8, `react-dom` 19.2.8
- `tailwindcss` (v4), `@tailwindcss/postcss`
- UI and helpers: `@base-ui/react`, `lucide-react`, `class-variance-authority`, `clsx`, `shadcn`, `tailwind-merge`

---

## Folder structure

```
maxpoint/
├─ .git/
├─ .gitignore
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ next-env.d.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
├─ README.md
├─ tsconfig.json
├─ public/
│  ├─ file.svg
│  ├─ next.svg
│  ├─ globe.svg
│  ├─ window.svg
│  └─ vercel.svg
├─ src/
│  ├─ app/
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ about/
│  │  │  └─ page.tsx
│  │  ├─ contact/
│  │  │  └─ page.tsx
│  │  ├─ privacy-policy/
│  │  │  └─ page.tsx
│  │  ├─ services/
│  │  │  └─ page.tsx
│  │  └─ terms/
│  │     └─ page.tsx
│  ├─ components/
│  │  ├─ home/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ HeroMetrics.tsx
│  │  │  ├─ ServicesMarquee.tsx
│  │  │  ├─ ServicesSection.tsx
│  │  │  ├─ DigitalDeskCard.tsx
│  │  │  └─ WhatsAppCTA.tsx
│  │  ├─ layout/
│  │  │  ├─ NavBar.tsx
│  │  │  └─ Footer.tsx
│  │  └─ ui/
│  │     └─ button.tsx
│  └─ lib/
│     └─ utils.ts
└─ next.config.ts
```

If you want a different layout for this README (more details, usage examples, or deployment steps), tell me which sections to expand and I will update `README.md` accordingly.
