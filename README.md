# Digital Meda Website (Next-Gen Architecture)

A high-performance, Neo-brutalist React web app for Digital Meda, modernized for a premium startup identity. 

## Vercel Deployment
This project is ready for one-click deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically detect the React build settings.


## Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (comes with Node.js)

## Getting Started

1. Open a terminal in this folder:

```bash
cd digital-meda-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open in browser:

- http://localhost:3000

## Build for Production

```bash
npm run build
```

The optimized output is generated in the `build` folder.

## Project Structure

- `src/` - React source code (pages, components, context, and data)
- `public/` - Static files
- `tailwind.config.js` - Tailwind setup
- `postcss.config.js` - PostCSS setup

## Main Areas to Edit

- Team data: `src/data/teamData.js`
- Projects data: `src/data/projectsData.js`
- Products data: `src/data/productsData.js`
- Pages: `src/pages/`
- Shared layout: `src/components/layout/`

## Useful Commands

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests (if tests are configured)

## Environment Variables

Copy `.env.example` into `.env` if you need local environment configuration.

## Troubleshooting

- If install fails, remove `node_modules` and run `npm install` again.
- If port 3000 is busy, accept the prompt to use another port.
