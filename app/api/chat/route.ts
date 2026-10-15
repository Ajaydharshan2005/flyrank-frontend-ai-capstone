
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages: UIMessage[];
    };

    const result = streamText({
      model: google("gemini-3.6-flash"),
      system:
        "You are a helpful assistant. Give clear, accurate, and concise answers.",
      messages: await convertToModelMessages(body.messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "Unable to generate a response. Please try again." },
      { status: 500 },
    );
  }
}
