This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Card matching game (React frontend challenge)
This project is for learning more about coding.

## Description
You have to match 2 cards that have the same by clicking each card (ex: 1-1 2-2). The number of cards is 12. By clicking 1 time the moves you use will increase by 1. You can click "New game" to restart the move and "Clear High Score" to clear your high score.

## Built With
- Next.js
- React
- Tailwindcss
- Typescript

### Installing

1. In this project used (mockapi.io) for API. If you want to create yourown global best score you can create API by yourself and change in .env and GlobalScoreService.tsx
```bash
    NEXT_PUBLIC_API_URL = "your API"
```
2. Clone the project
```bash
   git clone https://github.com/hrtbrxkxr/react-card-pairing.git
```
3. install package
```bash
   npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

[https://react-card-pairing.vercel.app](https://react-card-pairing.vercel.app)

## Acknowledgments
Inspiration, code snippets, etc.
[Build a Card Memory Game with React](https://javascript.plainenglish.io/building-a-card-memory-game-in-react-e6400b226b8f)
