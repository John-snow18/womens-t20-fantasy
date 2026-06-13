"use client";
import Link from "next/link";
import { Trophy, Crown, Zap } from "lucide-react";
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
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#000000_70%)]" />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Trophy size={90} className="text-cyan-400 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-cyan-400"
        >
          WOMEN'S T20
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-purple-400 mt-4"
        >
          FANTASY LEAGUE
        </motion.h2>

        <p className="text-gray-300 mt-6 text-lg">
          Select Your Team
        </p>
      </section>

      <section className="relative z-10 px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Fantasy Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teams.map((team, index) => (
            <motion.div
              key={team.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/teams/${team.slug}`}>
                <div className="bg-slate-900/70 backdrop-blur-md border border-cyan-500 rounded-3xl p-8 hover:scale-105 transition duration-300 hover:shadow-[0_0_30px_#22d3ee]">

                  <div className="flex justify-center mb-4 text-5xl">
                    {team.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-center">
                    {team.name}
                  </h3>

                  <p className="text-center text-gray-400 mt-2">
                    Owner: {team.owner}
                  </p>

                  <div className="flex justify-center mt-4">
                    <Crown className="text-yellow-400" />
                  </div>

                  <div className="flex justify-center mt-4 text-cyan-400">
                    <Zap />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}
