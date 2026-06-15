"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { playersData } from "@/data/players";
import { teamsData } from "@/data/teams";

export default function LeaderboardPage() {
  const allPlayers = Object.values(playersData);

const topRuns = [...allPlayers]
  .sort((a: any, b: any) => {
    if (b.runs !== a.runs) {
      return b.runs - a.runs;
    }
    return a.name.localeCompare(b.name);
  })
  .slice(0, 5);

const topWickets = [...allPlayers]
  .sort((a: any, b: any) => {
    if (b.wickets !== a.wickets) {
      return b.wickets - a.wickets;
    }
    return a.name.localeCompare(b.name);
  })
  .slice(0, 5);

const calculateFantasyPoints = (player: any) =>
  player.runs +
  player.fours +
  player.sixes * 2 +
  player.wickets * 20 +
  player.catches * 4;

const teamLeaderboard = Object.entries(teamsData)
  .map(([_, team]: any) => {
    const total = team.players.reduce(
      (sum: number, playerName: string) => {
        const player =
          playersData[
            playerName.toLowerCase().replace(/\s+/g, "-") as keyof typeof playersData
          ];

        return player
          ? sum + calculateFantasyPoints(player)
          : sum;
      },
      0
    );

    return {
      name: team.name,
      points: total,
    };
  })
  .sort((a, b) => b.points - a.points);

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold mb-8"
        >
          ← Home
        </Link>

        <motion.h1
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex items-center justify-center gap-3 text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 text-center mb-10"
>
  <span>🏆</span>
 <span>LEADERBOARD</span>
 <span>🏆</span>
</motion.h1>


        <div className="space-y-4">
          {teamLeaderboard.map((team, index) => (
            <div
              key={team.name}
              className={`rounded-2xl p-5 flex justify-between items-center transition-all duration-300 hover:scale-[1.02]
${
  index === 0
    ? "bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 border-2 border-yellow-400 shadow-[0_0_25px_gold]"
    : index === 1
    ? "bg-gradient-to-r from-gray-400/20 to-gray-200/10 border-2 border-gray-300"
    : index === 2
    ? "bg-gradient-to-r from-orange-500/20 to-amber-400/10 border-2 border-orange-400"
    : "bg-slate-900 border border-cyan-500 hover:shadow-[0_0_25px_#22d3ee]"
}`}
            >
              <div>
                <h2 className="text-2xl font-bold text-cyan-300">
  {index === 0
    ? "🥇"
    : index === 1
    ? "🥈"
    : index === 2
    ? "🥉"
    : `${index + 1}️⃣`}{" "}
  {team.name}
</h2>
              </div>

              <div className="text-right">
                <p className="text-gray-400">Points</p>
                <p className="text-4xl font-bold text-yellow-400">
                  {team.points}
                </p>
              </div>
            </div>
          ))}
          <h2 className="text-4xl font-bold text-orange-400 text-center mt-16 mb-8">
  🏏 Orange Cap - Top Run Scorers
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 items-start">
  {topRuns.map((player: any, index) => (
    <div
      key={player.name}
      className={`text-center rounded-2xl p-4 transition-all duration-300 flex flex-col min-h-[200px]
${
  index === 0
    ? "bg-gradient-to-br from-orange-500/30 to-yellow-500/20 border-2 border-yellow-400  shadow-[0_0_30px_orange]"
    : "bg-slate-900 border border-orange-500"
}`}
    >
      <div className="h-28 flex items-center justify-center mb-3">
  <img
    src={`/players/${player.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
    alt={player.name}
    className="w-24 h-24 object-cover rounded-full"
  />
</div>
      {index === 0 && (
  <div className="text-3xl mb-2">👑</div>
)}

<h3 className={`font-bold mb-2 min-h-[70px] ${index === 0 ? "text-xl" : "text-base"}`}>
  #{index + 1} {player.name}
</h3>
      

      <p className={`font-bold ${index === 0 ? "text-2xl text-yellow-300" : "text-orange-400"}`}>
        {player.runs} Runs
      </p>
    </div>
  ))}
</div>
<h2 className="text-4xl font-bold text-purple-400 text-center mt-16 mb-8">
  🎯 Purple Cap - Top Wicket Takers
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 items-start">
  {topWickets.map((player: any, index) => (
      <div
  key={player.name}
  className={`text-center rounded-2xl p-4 transition-all duration-300 flex flex-col min-h-[200px]
${
  index === 0
    ? "bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-2 border-pink-400  shadow-[0_0_30px_purple]"
    : "bg-slate-900 border border-purple-500"
}`}
>
      <img
        src={`/players/${player.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
        alt={player.name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
      />
    
      {index === 0 && (
  <div className="text-3xl mb-2">👑</div>
)}
      <h3 className={`font-bold min-h-[70px] ${index === 0 ? "text-xl" : "text-base"}`}>
  #{index + 1} {player.name}
</h3>

      <p className={`font-bold ${index === 0 ? "text-2xl text-purple-300" : "text-purple-400"}`}>
        {player.wickets} Wickets
      </p>
    </div>
  ))}
</div>
        </div>
      </div>
    </main>
  );
}