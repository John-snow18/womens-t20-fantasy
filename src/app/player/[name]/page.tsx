
import { playersData } from "@/data/players";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function PlayerPage({ params }: Props) {
  const { name } = await params;
const player = playersData[name as keyof typeof playersData];

if (!player) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      Player Not Found
    </div>
  );
}
  const playerName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <Link
  href={`/teams/${player.team.toLowerCase().replace(/\s+/g, "-")}`}
  className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold mb-8"
>
  ← Back to Team
</Link>

      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-8 shadow-[0_0_25px_#22d3ee]">

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <Image
                src={`/players/${name}.jpg`}
                alt={playerName}
                width={500}
                height={600}
                className="rounded-3xl w-full h-[500px] object-cover hover:scale-105 transition-all duration-500"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">

              <h1 className="text-5xl font-bold text-cyan-400">
                {player.name}
              </h1>

              <p className="text-gray-400 mt-3 text-lg">
                Women&apos;s T20 Fantasy League
              </p>
<div className="mt-6 grid grid-cols-2 gap-4">
  <div className="bg-slate-800 p-4 rounded-xl hover:border hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300">
    <p className="text-gray-400">Country</p>
    <p className="font-bold">{player.country}</p>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl hover:border hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300">
    <p className="text-gray-400">Role</p>
    <p className="font-bold">{player.role}</p>
  </div>

  <div className="bg-slate-800 p-4 rounded-xl hover:border hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300">
    <p className="text-gray-400">Team</p>
    <p className="font-bold">{player.team}</p>
  </div>
</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

                <div className="bg-slate-800 p-4 rounded-2xl text-center hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-yellow-400">Matches</h3>
                  <p className="text-3xl font-bold">{player.matches}</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-2xl text-center hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-yellow-400">Runs</h3>
                  <p className="text-3xl font-bold">{player.runs}</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-2xl text-center hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-yellow-400">Wickets</h3>
                  <p className="text-3xl font-bold">{player.wickets}</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-2xl text-center hover:shadow-[0_0_20px_#22d3ee] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-yellow-400">Fantasy Points</h3>
                  <p className="text-3xl font-bold">
  {player.runs + player.wickets * 20 + player.fours + player.sixes * 2 + player.catches * 4}
</p>
<div className="bg-slate-800 p-4 rounded-2xl text-center">
  <h3 className="text-yellow-400">4s</h3>
  <p className="text-3xl font-bold">{player.fours}</p>
</div>

<div className="bg-slate-800 p-4 rounded-2xl text-center">
  <h3 className="text-yellow-400">6s</h3>
  <p className="text-3xl font-bold">{player.sixes}</p>
</div>

<div className="bg-slate-800 p-4 rounded-2xl text-center">
  <h3 className="text-yellow-400">Catches</h3>
  <p className="text-3xl font-bold">{player.catches}</p>
</div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}