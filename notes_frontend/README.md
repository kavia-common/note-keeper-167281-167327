# Note Keeper — Ocean Professional (Nuxt 3)

A modern notes application with full CRUD using mock/local storage, styled with the Ocean Professional theme (blue primary, amber accents, rounded corners, soft shadows, smooth transitions).

## Features
- Create, read, update, delete notes (mocked, persisted to `localStorage`)
- Search notes in the top bar
- Pin/unpin notes (pinned float to top)
- Ocean Professional theme across layout (sidebar, topbar, content)
- Minimalist UI with rounded corners and subtle shadows
- Responsive layout and compact grid option

## Tech
- Nuxt 3 + Vue 3
- Pinia for state management
- No backend required (mock storage)

## Development

Install deps and start:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## Notes
- Data is saved in your browser storage under the key `nk_notes`.
- To reset, clear localStorage for the site.
