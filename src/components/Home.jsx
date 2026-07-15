import movieBg from "../assets/moviebg.jfif"
import brandingImg from "../assets/Branding.png"
export default function Home({onStart}) {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 w-full min-h-screen"  style={{ backgroundImage: `url(${movieBg})` }}>
           <img src={brandingImg} className="mt-3"/>
       <div className="text-center space-y-2 m-5">
             <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Your Personalized Movie Guide
            </h1>
            <h2 className="font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">Discover your next favorite movie with AI-powered recommendations.</h2>
            <button 
            onClick={onStart} 
            className="bg-[#51E08A] text-[#000C36] px-8 py-3 rounded-2xl font-bold  hover:scale-105 transition-all duration-300">Get Started</button>
       </div>
        </div>
    )
}
