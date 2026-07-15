import { supabase } from "../lib/config";

export async function searchMovies(queryEmbedding) {
const {data,error} = await supabase.rpc("match_movies",{
      query_embedding:queryEmbedding,
      match_threshold: 0.3,
      match_count :1
});
if(error){
    throw new Error(error)
}
return data[0];
}