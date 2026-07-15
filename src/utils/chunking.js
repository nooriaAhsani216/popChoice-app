import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters"
export async function createChunks (text){
    try{
        const splitter = new RecursiveCharacterTextSplitter({
             chunkSize:300, 
             chunkOverlap:20
        })
        const chunks = await splitter.splitText(text);
        return chunks;
    }catch(error){
        console.error(error)
    }
}