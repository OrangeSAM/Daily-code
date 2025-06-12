// server.ts
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
});

app.use(cors());
app.use(express.json());

app.post("/stream", async (req, res) => {
  try {
    // 设置响应头，支持流式输出
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const stream = await openai.chat.completions.create({
      model: "qwen/qwq-32b:free",
      messages: [
        { role: "user", content: req.body.message || "Tell me a story" },
        { role: "assistant", content: "I'm not sure, but my best guess is" },
      ],
      stream: true,
    });

    // 使用 SSE (Server-Sent Events) 格式发送数据
    for await (const chunk of stream) {
      console.log("chunk:", chunk.choices[0]?.delta);
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// app.post("/stream", async (req, res) => {
//   try {
//     // 设置响应头
//     res.setHeader("Content-Type", "text/event-stream");
//     res.setHeader("Cache-Control", "no-cache");
//     res.setHeader("Connection", "keep-alive");
//     res.setHeader("Transfer-Encoding", "chunked");

//     // 移除初始化空消息
//     // res.write('data: {"content": ""}\n\n'); // 删除这行

//     console.log(req.body.message);
//     const stream = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         { role: "user", content: req.body.message || "Tell me a story" },
//       ],
//       stream: true,
//     });

//     // 添加调试日志
//     console.log("Stream created, starting to send data...");

//     for await (const chunk of stream) {
//       const content = chunk.choices[0]?.delta?.content || "";
//       if (content) {
//         const data = `data: ${JSON.stringify({ content })}\n\n`;
//         console.log("Sending chunk:", content); // 调试日志
//         res.write(data);
//       }
//     }

//     console.log("Stream completed, sending DONE signal");
//     res.write("data: [DONE]\n\n");
//     res.end();
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
