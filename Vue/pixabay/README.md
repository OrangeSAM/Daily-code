# Pixabay 视频下载器

一个基于 Node.js 和 Pixabay API 的视频搜索和下载工具，提供美观的 Web 界面。

## 功能特性

- 🔍 **智能搜索**: 通过关键词搜索 Pixabay 上的免费视频
- 📥 **自动下载**: 点击即可下载视频到本地
- 🎬 **质量选择**: 支持多种视频质量下载（小、中、大、原始）
- 📊 **下载管理**: 查看下载历史和文件信息
- 🎨 **美观界面**: 响应式设计，支持手机和桌面端
- ⚡ **高性能**: 异步处理，支持批量操作

## 快速开始

### 1. 获取 Pixabay API Key

1. 访问 [Pixabay 注册页面](https://pixabay.com/accounts/register/) 创建账号
2. 登录后访问 [API 文档页面](https://pixabay.com/api/docs/) 获取你的 API Key
3. 复制 API Key 备用

### 2. 安装项目依赖

```bash
# 确保你在项目目录中
cd /Users/hb03826/Desktop/pixabay

# 安装依赖包
npm install
```

### 3. 配置 API Key

打开 `server.js` 文件，找到第 8 行:

```javascript
const PIXABAY_API_KEY = "YOUR_PIXABAY_API_KEY"; // 请替换为你的实际API Key
```

将 `YOUR_PIXABAY_API_KEY` 替换为你从 Pixabay 获取的真实 API Key。

### 4. 启动服务器

```bash
# 启动开发服务器
npm start

# 或者使用 nodemon 自动重启（需要先安装）
npm run dev
```

### 5. 访问应用

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 使用说明

### 搜索视频

1. 在搜索框中输入关键词（支持中英文）
2. 点击「🔍 搜索」按钮或按 Enter 键
3. 等待搜索结果加载

### 下载视频

1. 在搜索结果中点击任意视频的「📥 下载视频」按钮
2. 在弹出的模态框中预览视频
3. 选择合适的视频质量
4. 点击「开始下载」
5. 等待下载完成

### 管理下载

- 在页面底部的「📁 下载历史」区域查看已下载的文件
- 点击「刷新列表」更新下载记录
- 下载的文件保存在项目的 `downloads/` 目录中

## API 接口

### 搜索视频

```
GET /api/search-videos?q=关键词&per_page=9&page=1
```

### 下载视频

```
POST /api/download-video
Body: {
  "videoUrl": "视频URL",
  "fileName": "文件名",
  "videoId": "视频ID"
}
```

### 获取下载列表

```
GET /api/downloads
```

## 项目结构

```
pixabay/
├── server.js           # Node.js 后端服务器
├── package.json        # 项目配置和依赖
├── README.md          # 项目说明文档
├── downloads/         # 视频下载目录（自动创建）
└── public/            # 前端静态文件
    ├── index.html     # 主页面
    ├── styles.css     # 样式文件
    └── script.js      # JavaScript 逻辑
```

## 技术栈

- **后端**: Node.js + Express
- **前端**: 原生 HTML/CSS/JavaScript
- **API**: Pixabay REST API
- **依赖**:
  - `express`: Web 服务器框架
  - `axios`: HTTP 请求库
  - `fs`: 文件系统操作
  - `path`: 路径处理

## 注意事项

### API 限制

- 免费账号每分钟最多 100 次请求
- 请求需要缓存 24 小时
- 不允许大规模自动下载

### 版权说明

- Pixabay 上的内容遵循 [Content License](https://pixabay.com/service/license/)
- 下载的视频可用于商业和非商业用途
- 建议在使用时标注来源

### 存储空间

- 视频文件较大，请注意本地存储空间
- 定期清理不需要的视频文件

## 故障排除

### 常见问题

**Q: 搜索时提示"请配置 Pixabay API Key"**
A: 检查 `server.js` 文件中的 API Key 是否正确配置

**Q: 下载失败或下载速度很慢**
A: 可能是网络问题或 Pixabay 服务器繁忙，请稍后重试

**Q: 找不到想要的视频**
A: 尝试使用更精确或不同的关键词搜索

**Q: 页面加载不出来**
A: 确保服务器正在运行 (`npm start`) 并访问正确的地址

### 开发调试

查看服务器日志:

```bash
# 直接查看 console 输出
npm start
```

检查下载目录:

```bash
ls -la downloads/
```

## 许可证

MIT License - 详见项目根目录下的 LICENSE 文件

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

如果你觉得这个项目有用，请给它一个 ⭐️！
