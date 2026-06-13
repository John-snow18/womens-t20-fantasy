"use client";

import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const teamsData: Record<string, any> = {
  "ramcharan-x": {
    name: "Ramcharan X",
    owner: "Ramcharan",
    players: [
      "Izzy Gaze",
      "Laura Wolvaardt",
      "Phoebe Litchfield",
      "Fatima Sana",
      "Chamari Athapaththu",
      "Georgia Wareham",
      "Annabel Sutherland",
      "Nicola Carey",
      "Jess Kerr",
      "Sophie Molineux",
      "Nandani Sharma",
    ],
  },

  "sriman-x": {
    name: "Sriman X",
    owner: "Sriman",
    players: [
      "Amy Jones",
      "Jemimah Rodrigues",
      "Alice Capsey",
      "Danni Wyatt-Hodge",
      "Tazmin Brits",
      "Ash Gardner",
      "Sophie Devine",
      "Grace Harris",
      "Kim Garth",
      "Meghan Schutt",
      "Sree Charani",
    ],
  },

  "rishwanth-x": {
    name: "Rishwanth X",
    owner: "Rishwanth",
    players: [
      "Beth Mooney",
      "Heather Knight",
      "Georgia Voll",
      "Amelia Kerr",
      "Marizanne Kapp",
      "Tahlia McGrath",
      "Nadine de Klerk",
      "Sophie Ecclestone",
      "Renuka Singh",
      "Mlaba",
      "Shafali Verma",
    ],
  },

  "honey-x": {
    name: "Honey X",
    owner: "Honey",
    players: [
      "Smriti Mandhana",
      "Hayley Matthews",
      "Nat Sciver-Brunt",
      "Harmanpreet Kaur",
      "Richa Ghosh",
      "Deepti Sharma",
      "Charlie Dean",
      "C Henry",
      "Shabnim Ismail",
      "Arundhati Reddy",
      "Kranti Goud",
    ],
  },

  "pradeep-x": {
    name: "Pradeep X",
    owner: "Pradeep",
    players: [
      "Yastika Bhatia",
      "Georgia Plimmer",
      "Maddy Green",
      "Eyman Fatima",
      "Sophia Dunkley",
      "Ellyse Perry",
      "Suzie Bates",
      "Radha Yadav",
      "Lauren Bell",
      "Lea Tahuhu",
      "Sadia Iqbal",
    ],
  },
};

export default async function TeamPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team } = await params;

  const teamData = teamsData[team];

  if (!teamData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl">
        Team Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold mb-8"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-extrabold text-center text-cyan-400">
          {teamData.name}
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-10">
          Owner: {teamData.owner}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {teamData.players.map((player: string, index: number) => (
          <motion.div
            key={player}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-900 border border-cyan-500 rounded-3xl p-6 hover:scale-105 transition duration-300 hover:shadow-[0_0_30px_#22d3ee]"
          >
            <div className="h-40 rounded-2xl bg-slate-800 flex items-center justify-center text-5xl">
              🏏
            </div>

            <h2 className="text-xl font-bold mt-4">
              {player}
            </h2>

            <div className="flex items-center gap-2 mt-3 text-yellow-400">
              <Trophy size={18} />
              <span>Fantasy Points: 0</span>
            </div>
          </motion.div>
        ))}

      </div>
    </main>
  );
}
