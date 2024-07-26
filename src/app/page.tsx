'use client';

import GameBoard from "./game/GameBoard";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-custom-blue to-custom-light-blue min-h-screen h-[100dvh]">
      <div className="w-full p-6">
        <GameBoard/>
      </div>
    </main>
  );
}
