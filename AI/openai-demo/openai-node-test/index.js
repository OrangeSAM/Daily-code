import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "openai/gpt-4o",
    messages: [
      {
        role: "user",
        content: "What is the meaning of life?",
      },
    ],
  });

  console.log(completion.choices[0].message);
}

async function main2() {
  console.log("Hello");
  try {
    console.log(1);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "reponse a long story" }],
      model: "gpt-4o",
    });
    console.log(
      22,
      chatCompletion,
      chatCompletion.data.choices[0].message.content
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

async function main3() {
  console.log(222);
  const stream = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "response a long story" }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
}

main3();
