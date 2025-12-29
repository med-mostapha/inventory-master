import { GEMINI_API_KEY } from "@env";

export async function askGemini(message: string) {
  if (!GEMINI_API_KEY) {
    console.error("Error: API Key is missing");
    return "Error: API key not found!";
  }

  try {
    const modelName = "gemini-2.0-flash";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    const data = await res.json();

    if (data.error) {
      console.error("Gemini Error:", data.error);
      return `Sorry, an error occurred: ${data.error.message}`;
    }

    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return answer || "I couldn't understand the message.";
  } catch (err) {
    console.error("Network Error:", err);
    return "Sorry, an unexpected error occurred.";
  }
}
