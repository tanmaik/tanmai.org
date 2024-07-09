"use server";

import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

export async function streamComponent(input: string) {
  const { textStream } = await streamText({
    model: openai("gpt-4o"),
    prompt: input,
    system:
      "Generate raw HTML with inline styling to render a component; use raw HTML and no imports; style as nicely as you can. Generate just the stuff inside the <body> tag, and don't include any extra commentary.  \n Example input: A card that says hello. \n Example output: <div>Hello!</div>",
  });
  let stream = "";
  for await (const textPart of textStream) {
    stream += textPart;
    console.log(textPart);
  }
  return stream;
}
