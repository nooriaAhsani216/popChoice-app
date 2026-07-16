import Header from "./Header";

export default function ResultView({ recommendation,onAgain }) {
  const { movie, explanation } = recommendation;

  return (
    <section className="w-full max-w-xl m-8 flex flex-col items-center ">
      <Header/>

      <div className="bg-white/10 text-white rounded-2xl p-6 shadow-xl shadow-[#51E08A]/30">
        <h1 className="text-2xl font-bold bg-linear-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
          {movie.title} <span className="text-white">({movie.releaseYear})</span>
        </h1>
        <div className="mt-5">
          <h2 className="text-xl font-semibold">
            Movie Description
          </h2>
          <p className="mt-2 text-gray-300 leading-relaxed">
            {movie.content}
          </p>
        </div>

        <div className="mt-5 bg-blue-900/40 p-4 rounded-xl">
          <h2 className="text-xl font-semibold">
           🤖 AI Recommendation
          </h2>
          <p className="mt-2 text-gray-200">
            {explanation}
          </p>
        </div>
        <button 
        onClick={onAgain}
        className="bg-[#51E08A] text-[#000C36] text-xl font-bold rounded-xl w-full px-8 py-4 mt-4">🔄 Go Again</button>
      </div>
    </section>
  );
}