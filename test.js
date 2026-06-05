import { config } from "dotenv";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

config();

async function main() {
  try {
    const result = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: "Hi.",
    });

    console.log("=== RESPONSE ===");
    console.log(result.text);

    console.log("\n=== USAGE ===");
    console.log(result.usage);
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}

main();