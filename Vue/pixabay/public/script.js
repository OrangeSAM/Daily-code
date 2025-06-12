class PixabayDownloader {
  constructor() {
    this.currentPage = 1;
    this.totalHits = 0;
    this.perPage = 9;
    this.currentQuery = "";
    this.currentVideos = [];

    this.initializeEventListeners();
    this.loadDownloadsList();
  }

  initializeEventListeners() {
    // 搜索相关事件
    document
      .getElementById("searchBtn")
      .addEventListener("click", () => this.searchVideos());
    document.getElementById("searchInput").addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.searchVideos();
    });
    document
      .getElementById("clearBtn")
      .addEventListener("click", () => this.clearResults());

    // 分页事件
    document
      .getElementById("prevBtn")
      .addEventListener("click", () => this.previousPage());
    document
      .getElementById("nextBtn")
      .addEventListener("click", () => this.nextPage());

    // 每页数量改变事件
    document.getElementById("perPageSelect").addEventListener("change", (e) => {
      this.perPage = parseInt(e.target.value);
      this.currentPage = 1;
      if (this.currentQuery) {
        this.searchVideos();
      }
    });

    // 刷新下载列表
    document
      .getElementById("refreshDownloadsBtn")
      .addEventListener("click", () => {
        this.loadDownloadsList();
      });

    // 批量下载按钮
    document
      .getElementById("batchDownloadBtn")
      .addEventListener("click", () => this.batchDownloadVideos());

    // 模态框事件
    document
      .querySelector(".close")
      .addEventListener("click", () => this.closeModal());
    document
      .getElementById("confirmDownloadBtn")
      .addEventListener("click", () => this.downloadSelectedVideo());

    // 点击模态框外部关闭
    window.addEventListener("click", (e) => {
      const modal = document.getElementById("downloadModal");
      if (e.target === modal) {
        this.closeModal();
      }
    });
  }

  async searchVideos() {
    const query = document.getElementById("searchInput").value.trim();
    if (!query) {
      this.showError("请输入搜索关键词");
      return;
    }

    this.currentQuery = query;
    this.showLoading(true);
    this.hideError();

    try {
      const response = await fetch(
        `/api/search-videos?q=${encodeURIComponent(query)}&per_page=${
          this.perPage
        }&page=${this.currentPage}`
      );
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      this.currentVideos = result.data.hits;
      this.totalHits = result.data.totalHits;

      this.displayVideos(this.currentVideos);
      this.updatePagination();
      this.updateStats();
    } catch (error) {
      console.error("搜索错误:", error);
      this.showError(error.message);
    } finally {
      this.showLoading(false);
    }
  }

  displayVideos(videos) {
    const container = document.getElementById("videoResults");
    const batchDownloadBtn = document.getElementById("batchDownloadBtn");

    if (videos.length === 0) {
      container.innerHTML =
        '<div class="no-results">未找到相关视频，请尝试其他关键词</div>';
      batchDownloadBtn.style.display = "none";
      return;
    }

    // 显示批量下载按钮
    batchDownloadBtn.style.display = "inline-block";

    container.innerHTML = videos
      .map(
        (video) => `
            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="${
                      video.videos?.medium?.thumbnail ||
                      video.videos?.small?.thumbnail ||
                      ""
                    }" 
                         alt="${video.tags}" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuaXoOWbvuWDjzwvdGV4dD48L3N2Zz4='">
                    <button class="play-button" onclick="pixabayDownloader.openDownloadModal(${
                      video.id
                    })">
                        ▶
                    </button>
                </div>
                <div class="video-info">
                    <div class="video-title">${this.truncateText(
                      video.tags,
                      50
                    )}</div>
                    <div class="video-meta">
                        <span>👁️ ${video.views?.toLocaleString() || 0}</span>
                        <span>⏱️ ${video.duration || 0}s</span>
                    </div>
                    <div class="video-tags">${video.tags}</div>
                    <button class="download-btn" onclick="pixabayDownloader.openDownloadModal(${
                      video.id
                    })">
                        📥 下载视频
                    </button>
                </div>
            </div>
        `
      )
      .join("");
  }

  openDownloadModal(videoId) {
    const video = this.currentVideos.find((v) => v.id === videoId);
    if (!video) return;

    // 填充模态框信息
    document.getElementById("modalTitle").textContent = video.tags;
    document.getElementById("modalDuration").textContent =
      video.duration || "N/A";

    // 填充质量选项
    const qualitySelect = document.getElementById("qualitySelect");
    qualitySelect.innerHTML = "";

    if (video.videos) {
      Object.keys(video.videos).forEach((quality) => {
        if (video.videos[quality] && video.videos[quality].url) {
          const option = document.createElement("option");
          option.value = quality;
          option.textContent = `${quality} (${video.videos[quality].width}x${
            video.videos[quality].height
          }) - ${this.formatFileSize(video.videos[quality].size)}`;
          qualitySelect.appendChild(option);
        }
      });
    }

    // 设置预览视频
    const modalVideo = document.getElementById("modalVideo");
    const firstQuality = Object.keys(video.videos)[0];
    if (firstQuality && video.videos[firstQuality]) {
      modalVideo.src = video.videos[firstQuality].url;
      document.getElementById(
        "modalResolution"
      ).textContent = `${video.videos[firstQuality].width}x${video.videos[firstQuality].height}`;
      document.getElementById("modalSize").textContent = this.formatFileSize(
        video.videos[firstQuality].size
      );
    }

    // 存储当前视频信息
    this.currentDownloadVideo = video;

    // 显示模态框
    document.getElementById("downloadModal").style.display = "flex";
  }

  async downloadSelectedVideo() {
    if (!this.currentDownloadVideo) return;

    const selectedQuality = document.getElementById("qualitySelect").value;
    const videoData = this.currentDownloadVideo.videos[selectedQuality];

    if (!videoData) {
      this.showError("选择的视频质量不可用");
      return;
    }

    // 显示下载进度
    document.getElementById("downloadProgress").style.display = "block";
    document.getElementById("confirmDownloadBtn").disabled = true;

    try {
      const response = await fetch("/api/download-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl: videoData.url,
          fileName: this.sanitizeFileName(this.currentDownloadVideo.tags),
          videoId: this.currentDownloadVideo.id,
        }),
      });

      const result = await response.json();

      if (result.success) {
        this.showSuccess("视频下载成功！");
        this.loadDownloadsList();
        this.closeModal();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("下载错误:", error);
      this.showError("下载失败: " + error.message);
    } finally {
      document.getElementById("downloadProgress").style.display = "none";
      document.getElementById("confirmDownloadBtn").disabled = false;
    }
  }

  closeModal() {
    document.getElementById("downloadModal").style.display = "none";
    document.getElementById("downloadProgress").style.display = "none";
    document.getElementById("confirmDownloadBtn").disabled = false;
  }

  async loadDownloadsList() {
    try {
      const response = await fetch("/api/downloads");
      const result = await response.json();

      if (result.success) {
        this.displayDownloadsList(result.files);
      } else {
        console.error("加载下载列表失败:", result.error);
      }
    } catch (error) {
      console.error("加载下载列表错误:", error);
    }
  }

  displayDownloadsList(files) {
    const container = document.getElementById("downloadsList");

    if (files.length === 0) {
      container.innerHTML =
        '<p style="color: #666; text-align: center; padding: 20px;">暂无下载记录</p>';
      return;
    }

    container.innerHTML = files
      .map(
        (file) => `
            <div class="download-item">
                <div class="download-info">
                    <div class="download-name">${file.name}</div>
                    <div class="download-meta">
                        大小: ${this.formatFileSize(file.size)} | 
                        下载时间: ${new Date(file.createdAt).toLocaleString(
                          "zh-CN"
                        )}
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchVideos();
    }
  }

  nextPage() {
    const maxPage = Math.ceil(this.totalHits / this.perPage);
    if (this.currentPage < maxPage) {
      this.currentPage++;
      this.searchVideos();
    }
  }

  updatePagination() {
    const maxPage = Math.ceil(this.totalHits / this.perPage);

    document.getElementById("prevBtn").disabled = this.currentPage === 1;
    document.getElementById("nextBtn").disabled = this.currentPage >= maxPage;
    document.getElementById(
      "pageInfo"
    ).textContent = `第 ${this.currentPage} 页，共 ${maxPage} 页`;

    document.getElementById("paginationSection").style.display =
      maxPage > 1 ? "flex" : "none";
  }

  updateStats() {
    document.getElementById("statsText").innerHTML = `找到 <strong>${
      this.totalHits
    }</strong> 个视频，显示第 <strong>${
      (this.currentPage - 1) * this.perPage + 1
    }</strong> - <strong>${Math.min(
      this.currentPage * this.perPage,
      this.totalHits
    )}</strong> 个`;
    document.getElementById("statsSection").style.display = "block";
  }

  clearResults() {
    document.getElementById("videoResults").innerHTML = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("statsSection").style.display = "none";
    document.getElementById("paginationSection").style.display = "none";
    document.getElementById("batchDownloadBtn").style.display = "none";
    this.currentQuery = "";
    this.currentPage = 1;
    this.hideError();
  }

  showLoading(show) {
    document.getElementById("loadingSection").style.display = show
      ? "block"
      : "none";
  }

  showError(message) {
    const errorSection = document.getElementById("errorSection");
    errorSection.textContent = message;
    errorSection.style.display = "block";
  }

  hideError() {
    document.getElementById("errorSection").style.display = "none";
  }

  showSuccess(message) {
    // 创建临时成功消息
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.style.cssText = `
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #c3e6cb;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            max-width: 300px;
        `;
    successDiv.textContent = message;

    document.body.appendChild(successDiv);

    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 3000);
  }

  truncateText(text, maxLength) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  sanitizeFileName(name) {
    return name.replace(/[^a-z0-9\-_]/gi, "_").substring(0, 50);
  }

  formatFileSize(bytes) {
    if (!bytes) return "N/A";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  }

  async batchDownloadVideos() {
    if (!this.currentVideos || this.currentVideos.length === 0) {
      this.showError("没有可下载的视频");
      return;
    }

    // 确认下载
    const confirmMessage = `确定要下载当前页面的全部 ${this.currentVideos.length} 个视频吗？\n\n注意：批量下载可能需要较长时间，建议选择较小的视频质量。`;
    if (!confirm(confirmMessage)) {
      return;
    }

    const batchDownloadBtn = document.getElementById("batchDownloadBtn");
    batchDownloadBtn.disabled = true;
    batchDownloadBtn.textContent = "下载中...";

    let successCount = 0;
    let failCount = 0;
    const totalVideos = this.currentVideos.length;

    this.showSuccess(`开始批量下载 ${totalVideos} 个视频...`);

    // 逐个下载视频（避免服务器压力过大）
    for (let i = 0; i < this.currentVideos.length; i++) {
      const video = this.currentVideos[i];

      try {
        // 选择最小质量的视频以节省时间和空间
        const availableQualities = Object.keys(video.videos || {});
        if (availableQualities.length === 0) {
          console.warn(`视频 ${video.id} 没有可用的下载链接`);
          failCount++;
          continue;
        }

        // 优先选择小质量：small -> medium -> large -> 其他
        let selectedQuality = availableQualities[0];
        const qualityPriority = ["small", "medium", "large"];
        for (const quality of qualityPriority) {
          if (availableQualities.includes(quality)) {
            selectedQuality = quality;
            break;
          }
        }

        const videoData = video.videos[selectedQuality];
        if (!videoData || !videoData.url) {
          console.warn(`视频 ${video.id} 的 ${selectedQuality} 质量不可用`);
          failCount++;
          continue;
        }

        // 更新按钮状态
        batchDownloadBtn.textContent = `下载中... (${i + 1}/${totalVideos})`;

        // 调用下载API
        const response = await fetch("/api/download-video", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            videoUrl: videoData.url,
            fileName: this.sanitizeFileName(video.tags),
            videoId: video.id,
          }),
        });

        const result = await response.json();

        if (result.success) {
          successCount++;
          console.log(`成功下载视频: ${video.tags}`);
        } else {
          console.error(`下载失败: ${video.tags}`, result.error);
          failCount++;
        }

        // 添加短暂延迟，避免服务器压力过大
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`下载视频 ${video.id} 时发生错误:`, error);
        failCount++;
      }
    }

    // 恢复按钮状态
    batchDownloadBtn.disabled = false;
    batchDownloadBtn.textContent = "📥 一键下载整页";

    // 显示下载结果
    if (successCount > 0) {
      this.showSuccess(
        `批量下载完成！成功: ${successCount} 个，失败: ${failCount} 个`
      );
      this.loadDownloadsList(); // 刷新下载列表
    } else {
      this.showError(`批量下载失败！所有 ${totalVideos} 个视频都下载失败`);
    }
  }
}

// 初始化应用
const pixabayDownloader = new PixabayDownloader();
