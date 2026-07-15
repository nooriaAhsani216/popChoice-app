import { openai } from "../lib/config"

export async function generateEmbedding(text){
    try{
        const res = await openai.embeddings.create({
            input:text,
            model:import.meta.env.VITE_EMBEDDING_MODEL,
            encoding_format:"float"
        })
        return res.data[0].embedding;
    }catch(error){
        console.error(error)
    }
}