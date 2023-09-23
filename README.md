This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Project description

This is a web app which uses [Rest Countries](https://restcountries.com/) API to fetch data of all the countries in the world.

It is hosted on vercel [https://rajat-country-finder.vercel.app/countries](https://rajat-country-finder.vercel.app/countries)

## Features:
- Uses a combination of React server and client components
- Has skeleton loader
- Had dark mode
- Since the API does not provide pagination, it uses Intersection Observer to add client-side infinite scrolling

## Getting Started

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
