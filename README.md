# Agents Benchmark

A modern benchmark website for evaluating AI agents built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Beautiful hero section with overview of Agents Benchmark
- **Leaderboard**: Interactive leaderboard showing agent rankings and performance metrics
- **Documentation**: Comprehensive documentation section with guides and examples
- **News**: News and updates section with latest announcements
- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI**: Clean, professional design with smooth animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
agents-bench-replica/
├── app/
│   ├── page.tsx          # Homepage
│   ├── leaderboard/      # Leaderboard page
│   │   └── [agent]/      # Agent detail pages
│   ├── docs/             # Documentation page
│   ├── news/             # News page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation component
│   └── Footer.tsx        # Footer component
└── lib/
    └── utils.ts          # Utility functions
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
