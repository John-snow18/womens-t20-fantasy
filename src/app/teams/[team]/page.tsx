import Image from "next/image";
import Link from "next/link";
import { playersData } from "@/data/players";
import { teamsData } from "@/data/teams";

type Props = {
  params: Promise<{
    team: string;
  }>;
};


function calculateFantasyPoints(player: { runs: number; fours: number; sixes: number; wickets: number; catches: number }) {
  return (
    player.runs +
    player.fours +
    player.sixes * 2 +
    player.wickets * 20 +
    player.catches * 4
  );
}
export default async function TeamPage({ params }: Props) {
  const { team } = await params;

  const teamData = teamsData[team as keyof typeof teamsData];

  const totalTeamPoints = teamData.players.reduce(
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
  
  const topRunScorer = [...teamData.players]
  .map(
    (name: string) =>
      playersData[name.toLowerCase().replace(/\s+/g, "-") as keyof typeof playersData]
  )
  .filter(Boolean)
  .sort((a , b) => b.runs - a.runs)[0];
  
  const topWicketTaker = [...teamData.players]
  .map(
    (name: string) =>
      playersData[name.toLowerCase().replace(/\s+/g, "-") as keyof typeof playersData]
  )
  .filter(Boolean)
  .sort((a: any, b: any) => b.wickets - a.wickets)[0];
  if (!teamData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Team Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <Link
        href="/"
        className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold mb-8"
      >
        ← Back
      </Link>

      <h1 className="text-5xl font-bold text-cyan-400 text-center">
        {teamData.name}
      </h1>

      <p className="text-center mt-3">
  Owner: {teamData.owner}
</p>

<p className="text-center text-2xl font-bold text-yellow-400 mt-4 mb-8">
  🏆 Total Fantasy Points: {totalTeamPoints}
</p>

<div className="grid md:grid-cols-2 gap-6 mb-10">
  <div className="bg-slate-900 border border-orange-500 rounded-2xl p-5 text-center">
    <h2 className="text-2xl font-bold text-orange-400">
      ⭐ Top Run Scorer
    </h2>

    <p className="mt-3 text-xl font-bold">
      {topRunScorer?.name}
    </p>

    <p className="text-orange-300">
      {topRunScorer?.runs} Runs
    </p>
  </div>

  <div className="bg-slate-900 border border-purple-500 rounded-2xl p-5 text-center">
    <h2 className="text-2xl font-bold text-purple-400">
      🎯 Top Wicket Taker
    </h2>

    <p className="mt-3 text-xl font-bold">
      {topWicketTaker?.name}
    </p>

    <p className="text-purple-300">
      {topWicketTaker?.wickets} Wickets
    </p>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.players.map((player: string) => (
  <Link
    key={player}
    href={`/player/${player.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-6 hover:scale-105 transition duration-300 cursor-pointer">
            <Image
  src={`/players/${player.toLowerCase().replace(/\s+/g, "-")}.jpg`}
  alt={player}
  width={300}
  height={200}
  className="w-full h-40 object-contain rounded-xl bg-slate-800"
/>

            <h2 className="text-xl font-bold mt-4">
              {player}
            </h2>

            <p className="text-yellow-400 mt-2">
  Fantasy Points: {
    calculateFantasyPoints(
      playersData[
        player.toLowerCase().replace(/\s+/g, "-") as keyof typeof playersData
      ]
    )
  }
</p>
          </div>
          </Link>
        ))}
      </div>
    </main>
  );
}