import moviesData from "../data/content"
import { supabase } from "../lib/config";
import { createChunks } from "./chunking";
import { generateEmbedding } from "./createEmbeddings";

export async function storeMovies(){    
 
    const dataToStore = [];
    for(const movie of moviesData){
      const chunks = await createChunks(movie.content);
      for(const chunk of chunks){
         const embedding = await generateEmbedding(chunk);
         dataToStore.push({
         title:movie.title,
         releaseYear:movie.releaseYear,
         content:chunk,
         embedding:embedding
        })
      }
   }
   
    try{
       const {error} = await supabase.from("movies").insert(dataToStore);
       if(error){
        throw error
       }
    }catch(error){
         console.error("Error:", error);
    }
}