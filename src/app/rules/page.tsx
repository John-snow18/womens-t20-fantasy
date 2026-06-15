import Link from "next/link";

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/"
          className="inline-block bg-cyan-500 text-black px-4 py-2 rounded-xl font-bold mb-8"
        >
          ← Home
        </Link>

        <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
          📜 Fantasy League Rules
        </h1>

        <div className="bg-slate-900 border border-cyan-500 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Fantasy Points System
          </h2>

          <div className="space-y-3 text-lg">

            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>Run</span>
              <span>+1 Point</span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>Four</span>
              <span>+1 Bonus Point</span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>Six</span>
              <span>+2 Bonus Points</span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>Wicket</span>
              <span>+20 Points</span>
            </div>

            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span>Catch</span>
              <span>+4 Points</span>
            </div>

          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Example
            </h2>

            <div className="bg-slate-800 p-5 rounded-2xl">
              <p>Runs: 45</p>
              <p>4s: 6</p>
              <p>6s: 1</p>
              <p>Wickets: 2</p>
              <p>Catches: 1</p>

              <hr className="my-4 border-slate-600" />

              <p className="font-bold text-cyan-400">
                Fantasy Points = 97
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}