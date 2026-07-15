import Header from "./Header";
import LoadingState from "./LoadingState";

export default function QuestionForm({formData,handleChange,handleSubmit,error,isLoading}) {
   const labelStyle = "mb-2 text-base font-semi-bold text-slate-300 block";
 const inputStyle =
  "w-full bg-[#3B4877] text-white rounded-xl px-4 py-2 border border-transparent hover:border-[#51E08A] hover:shadow-lg hover:shadow-[#51E08A]/30 outline-none transition-all duration-300";
    
   return (
      <section className="w-full max-w-xl m-8 flex flex-col items-center sha">
         <Header/>
         <form action=""  onSubmit={handleSubmit}  className="w-full bg-white/10 text-white rounded-2xl shadow-xl shadow-[#51E08A]/30  p-6 space-y-2 ">
            <div className="space-y-2">
               <label className={labelStyle}>01 What is your favorite movie and why?</label>
               <textarea
                  placeholder="The Shawshank Redemption Because it taught me to never give up hope no matter how hard life gets"
                  rows={3}
                  name="favoriteMovie"
                  value={formData.favoriteMovie}
                  onChange={(e)=>handleChange("favoriteMovie",e.target.value)}
                  className={inputStyle}
               />
            </div>
             <div className="space-y-2">
               <label className={labelStyle}>02 Are you in the mood for something new or classic?</label>
               <textarea
                  name="mood"
                   value={formData.mood}
                  onChange={(e)=>handleChange("mood",e.target.value)}
                  placeholder="I want to watch movies that were released after 1990"
                   className={inputStyle}

               />
            </div>
           <div className="space-y-2">
               <label className={labelStyle}>03 Do you wanna have fun or do you want something serious?</label>
               <textarea
                  name="funOrSerious"
                   value={formData.funOrSerious}
                  onChange={(e)=>handleChange("funOrSerious",e.target.value)}
                  placeholder="I want to watch something stupid and fun"
                  className={inputStyle}
               />
            </div>
           {error ? (
             <p className="p-4 border rounded-2xl text-red-500 text-sm mb-2"> ⚠️ {error}</p>
           ):""}
            <button 
            type="submit"
            disabled={isLoading}
            className="bg-[#51E08A] text-[#000C36] text-xl font-bold rounded-xl w-full px-8 py-4 ">{isLoading ? <LoadingState/> : "Get Recommendation"}</button>
         </form>
      </section>
   )
}
