import Groq from "groq-sdk";
import { GROQ_API_KEY, OMDB_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";

// Initialize Groq client
if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not set in the environment variables.");
}

const client = new Groq({
    apiKey: GROQ_API_KEY,
});

export async function POST({ request }) {
    try {
        const { movie } = await request.json();

        if (!movie || movie.trim() === "") {
            return json({ message: "Movie name is required." }, { status: 400 });
        }

        // Step 1: Get suggestions from Groq
        const response = await client.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are an AI that suggests similar movies to the user's input.  Respond only with a plain list of movie names, one per line, without any additional text.",
                },
                {
                    role: "user",
                    content: `Suggest 5 movies similar to ${movie}. `,
                },
            ],
            model: "llama3-8b-8192",
        });

        const suggestedMovies = response.choices[0].message.content
            .split("\n")
            .map((line) =>
                line
                    .replace(/^\d+\.\s*/, "") // Remove leading numbers followed by a period and space (e.g., "3. ")
                    .replace(/^-\s*/, "")     // Remove leading dashes and spaces (e.g., "- Movie")
                    .trim()                  // Trim any extra spaces
            )
            .filter(Boolean)

        if (suggestedMovies.length === 0) {
            return json({ message: "No suggestions found." }, { status: 404 });
        }
        console.log(suggestedMovies)
        // Step 2: Fetch movie details from OMDb for each suggestion
        const movieDetailsPromises = suggestedMovies.map(async (movieName) => {
            const omdbResponse = await fetch(
                `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movieName)}`
            );

            if (!omdbResponse.ok) {
                console.error(`Failed to fetch details for movie: ${movieName}`);
                return null; // Skip movies with failed fetch
            }
            if(omdbResponse.ok){
                const data = await omdbResponse.json();
                if (data.Response === "True")
                    return data
            }
            
        });

        // Wait for all movie details to resolve
        const detailedMovies = (await Promise.all(movieDetailsPromises)).filter(Boolean);

        return json({ suggestions: detailedMovies }, { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);

        return json(
            {
                message: "An unexpected error occurred.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
