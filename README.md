<!-- Copyright (c) 2026 Muhammad Hassan. All rights reserved. -->

# Muhammad Hassan’s Portfolio

A personal portfolio for my work in full-stack development, mathematics, and research. It features selected projects, technical skills, academic awards, certificates, and contact information.

The site uses React, Vite, Tailwind CSS, and React Icons.

## Run locally

Use Node.js 20.19+ in the 20.x series, or Node.js 22.12 or later, with npm.

```sh
npm ci
npm run dev -- --port 5173
```

Open [the local portfolio](http://localhost:5173/). To enable contact form submissions, add your own Web3Forms access key to a local `.env` file.

```dotenv
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Run `npm run build` to create a production build in `dist/`, `npm run preview` to serve that build locally, or `npm run lint` to check the source.

## Update the portfolio

- Edit project descriptions, images, and links in [`src/data/projectData.js`](src/data/projectData.js).
- Edit awards and certificates in [`src/data/achievementData.js`](src/data/achievementData.js). See [achievement sources](docs/achievement-sources.md) for verification links and notes.
- Edit section layouts in [`src/sections/`](src/sections/) and shared styles in [`src/index.css`](src/index.css).

## Copyright

Copyright © 2026 Muhammad Hassan. All rights reserved for the original portfolio code, design, and content. Third-party certificates, logos, and other materials remain the property of their respective rights holders. Dependencies retain their own licenses.
