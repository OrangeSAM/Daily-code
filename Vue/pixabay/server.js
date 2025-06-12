const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const { promisify } = require("util");
const streamPipeline = promisify(pipeline);

const app = express();
const PORT = 3000;

// 配置你的Pixabay API Key
const PIXABAY_API_KEY = "29266010-0cbcf9a9e9059bdd5bc982cb0"; // 请替换为你的实际API Key

// 中间件
app.use(express.json());
app.use(express.static("public"));

// 创建下载目录
const downloadDir = path.join(__dirname, "downloads");
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// API路由 - 搜索视频
app.get("/api/search-videos", async (req, res) => {
  try {
    const { q, per_page = 20, page = 1 } = req.query;

    if (!q) {
      return res.status(400).json({ error: "请提供搜索关键词" });
    }

    if (!PIXABAY_API_KEY || PIXABAY_API_KEY === "YOUR_PIXABAY_API_KEY") {
      return res.status(500).json({ error: "请配置Pixabay API Key" });
    }

    const response = await axios.get("https://pixabay.com/api/videos/", {
      params: {
        key: PIXABAY_API_KEY,
        q: q,
        video_type: "all",
        category: "all",
        per_page: per_page,
        page: page,
        safesearch: "true",
      },
    });

    res.json({
      success: true,
      data: response.data,
      total: response.data.total,
      totalHits: response.data.totalHits,
    });
  } catch (error) {
    console.error("搜索视频时出错:", error.message);
    res.status(500).json({
      success: false,
      error: "搜索视频失败: " + error.message,
    });
  }
});

// API路由 - 下载视频
app.post("/api/download-video", async (req, res) => {
  try {
    const { videoUrl, fileName, videoId } = req.body;

    if (!videoUrl || !fileName) {
      return res.status(400).json({ error: "缺少必要参数" });
    }

    // 确保文件名安全
    const safeFileName = fileName.replace(/[^a-z0-9.-]/gi, "_");
    const filePath = path.join(downloadDir, `${videoId}_${safeFileName}.mp4`);

    // 检查文件是否已存在
    if (fs.existsSync(filePath)) {
      return res.json({
        success: true,
        message: "文件已存在",
        filePath: filePath,
      });
    }

    console.log(`开始下载视频: ${videoUrl}`);

    // 下载视频
    const response = await axios({
      method: "GET",
      url: videoUrl,
      responseType: "stream",
    });

    // 保存到文件
    await streamPipeline(response.data, fs.createWriteStream(filePath));

    console.log(`视频下载完成: ${filePath}`);

    res.json({
      success: true,
      message: "视频下载成功",
      filePath: filePath,
      fileName: `${videoId}_${safeFileName}.mp4`,
    });
  } catch (error) {
    console.error("下载视频时出错:", error.message);
    res.status(500).json({
      success: false,
      error: "下载视频失败: " + error.message,
    });
  }
});

// API路由 - 获取下载列表
app.get("/api/downloads", (req, res) => {
  try {
    const files = fs
      .readdirSync(downloadDir)
      .filter((file) => file.endsWith(".mp4"))
      .map((file) => ({
        name: file,
        size: fs.statSync(path.join(downloadDir, file)).size,
        createdAt: fs.statSync(path.join(downloadDir, file)).birthtime,
      }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({ success: true, files });
  } catch (error) {
    console.error("获取下载列表时出错:", error.message);
    res.status(500).json({
      success: false,
      error: "获取下载列表失败: " + error.message,
    });
  }
});

// 主页路由
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log("下载目录:", downloadDir);
  console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
  console.log("重要提示:");
  console.log("1. 请在server.js中配置你的Pixabay API Key");
  console.log("2. 你可以在 https://pixabay.com/accounts/register/ 注册账号");
  console.log("3. 然后在 https://pixabay.com/api/docs/ 获取API Key");
  console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
});
