import { openai } from "../lib/config";
const prompt = `
Role:
You are a smart AI movie recommendation assistant.

Context:
The user answered questions about their movie preferences.
A recommendation system has already selected a movie based on semantic similarity.
Your job is to help the user understand why this movie was chosen.

Task:
Explain why the recommended movie matches the user's preferences.
Connect the movie's characteristics with the user's answers.

Constraints:
- Be concise (2-4 sentences).
- Sound natural and friendly.
- Reference the user's preferences.
- Explain why this specific movie was selected.
- Do not only summarize the movie plot.
`;

export async function generateExplanation(userPreferences, movie) {
  try {
    const response = await openai.chat.completions.create({
      model: import.meta.env.VITE_OPENAI_MODEL,
      messages: [
        { role: "system", content: prompt },
       {
         role: "user",
         content: `
         User preferences:${userPreferences}
         Recommended movie: ${movie.title}
         Movie description: ${movie.content}`}
      ],
      temperature: 0.3,
      max_tokens: 500,
    });
    const explanation = response.choices[0].message.content;
    return explanation;
  } catch (error) {
    if (error.status) {
      console.log("Status:", error.status);
    }

    throw error;
  }
}
