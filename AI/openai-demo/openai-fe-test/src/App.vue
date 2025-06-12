<template>
  <div class="stream-chat">
    <div class="message-container">
      <div v-html="formattedMessage"></div>
      <div v-if="isLoading" class="loading">正在输入中...</div>
    </div>
    <div class="input-container">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="输入消息..."
        :disabled="isLoading"
      />
      <button @click="sendMessage" :disabled="isLoading">
        {{ isLoading ? "等待回复..." : "发送" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const userInput = ref("");
const message = ref("");
const isLoading = ref(false);

const formattedMessage = computed(() => {
  return message.value.replace(/\n/g, "<br>");
});

const sendMessage = async () => {
  if (!userInput.value || isLoading.value) return;

  isLoading.value = true;
  message.value = "";

  try {
    const response = await fetch("http://localhost:3000/stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput.value }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No reader available");
    }

    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      const lines = text.split("\n");

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(5).trim();
          if (data === "[DONE]") {
            console.log("Stream completed");
            break;
          }

          try {
            const parsed = JSON.parse(data);
            if (parsed.content) {
              // 只有当有内容时才追加
              message.value += parsed.content;
              // 可选：滚动到底部
              setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
              }, 0);
            }
          } catch (e) {
            console.error("Failed to parse JSON:", e);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
    message.value = "发生错误，请重试";
  } finally {
    isLoading.value = false;
    userInput.value = "";
  }
};
</script>

<style scoped>
.stream-chat {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.message-container {
  min-height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  white-space: pre-wrap;
  position: relative;
}

.loading {
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: #666;
  font-style: italic;
}

.input-container {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input:disabled {
  background-color: #f5f5f5;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-width: 100px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
