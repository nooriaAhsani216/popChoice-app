import './App.css'
import { useState } from 'react'
import QuestionForm from './components/QuestionForm'
import { generateEmbedding } from './utils/generateEmbedding'
import { searchMovies } from './utils/searchMovies'
import { generateExplanation } from './utils/generateExplanation'
import ResultView from './components/ResultView'
import Home from './components/Home'

function App() {
  const [formData, setFormData] = useState({
    favoriteMovie: "",
    mood: "",
    funOrSerious: ""
  })
  const [error,setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step,setStep] = useState("home");
  const [recommendation, setRecommendation] = useState(null);

  const handleStart = () => {
  setStep("form");
};
  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if(
      !formData.favoriteMovie || !formData.mood || !formData.funOrSerious
    ){
      setError("Please fill all fields")
      return;
    } 
    const userPreferences = `My favorite movie is ${formData.favoriteMovie}.
                             I am looking for ${formData.mood} movie.
                             I prefer ${formData.funOrSerious} movie.`.trim();

    try {
       setLoading(true);
      const embedding = await generateEmbedding(userPreferences);
      const movie = await searchMovies(embedding);
      const explanation = await generateExplanation(userPreferences, movie);
      setRecommendation({
        movie,
        explanation
      });
      setFormData({
        favoriteMovie:"",
        mood:"",
        funOrSerious:""
      })
      setStep("result")
    } catch (error) {
      console.log("Error",error)
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleAgain = () => {
  setStep("form");
  setRecommendation(null);
}
  return (
    <main className='bg-[#000C36] min-h-screen flex flex-col items-center'>
     {step === "home" && (
       <Home onStart = {handleStart}/>
     )}
      {step === "form" && (
        <QuestionForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        isLoading={loading} />
      )}
      {step === "result" &&(
        <ResultView 
         recommendation={recommendation}
         onAgain={handleAgain}
  />
      )}
    </main>
  )
}

export default App
