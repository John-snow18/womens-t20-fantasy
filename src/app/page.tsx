
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const teams = [
  {
    name: "Ramcharan X",
    owner: "Ramcharan",
    slug: "ramcharan-x",
    icon: "🔥",
  },
  {
    name: "Sriman X",
    owner: "Sriman",
    slug: "sriman-x",
    icon: "⚡",
  },
  {
    name: "Rishwanth X",
    owner: "Rishwanth",
    slug: "rishwanth-x",
    icon: "🐺",
  },
  {
    name: "Honey X",
    owner: "Honey",
    slug: "honey-x",
    icon: "👑",
  },
  {
    name: "Pradeep X",
    owner: "Pradeep",
    slug: "pradeep-x",
    icon: "❄️",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
>
  <source src="/videos/background.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/30"></div>

<div className="relative z-10">
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-6 bg-transparent overflow-hidden">
       <div className="absolute top-10 left-10  w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

<div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full"></div> 
<motion.h1
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-6xl md:text-8xl font-extrabold text-cyan-400 tracking-wider"
>
  WOMEN&apos;S T20
</motion.h1>
          

        <motion.h2
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="text-5xl md:text-7xl font-bold text-purple-400 mt-4"
>
  FANTASY LEAGUE 🏏
</motion.h2>

        <p className="text-gray-300 mt-6 text-lg animate-pulse">
          Select Your Fantasy Team
        </p>
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
  <Link
    href="/leaderboard"
    className="relative z-20 bg-cyan-500 text-black px-6 py-3 rounded-xl"
  >
    🏆 Leaderboard
  </Link>

  <Link
    href="/rules"
    className="relative z-20 bg-yellow-400 text-black px-6 py-3 rounded-xl"
  >
    📜 Rules
  </Link>
</div>
      </section>

      <section className="px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Fantasy Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <Link key={team.slug} href={`/teams/${team.slug}`}>
              <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-8 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300 cursor-pointer">
                <div className="text-5xl text-center mb-4">
                  {team.icon}
                </div>

                <h3 className="text-2xl font-bold text-center text-cyan-300">
                  {team.name}
                </h3>

                <p className="text-center text-gray-400 mt-2">
                  Owner: {team.owner}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}