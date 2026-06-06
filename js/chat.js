function sendMessage() {
      const input = document.getElementById("chatInput");
      const text = input.value.trim();

      if (text === "") return;

      addUserMessage(text);
      input.value = "";

      setTimeout(() => {
        addBotMessage(getBotReply(text));
      }

function quickAsk(text) {
      addUserMessage(text);

      setTimeout(() => {
        addBotMessage(getBotReply(text));
      }

function addUserMessage(text) {
      const chatWindow = document.getElementById("chatWindow");

      const row = document.createElement("div");
      row.className = "chat-row user-chat";
      row.innerHTML = `<div class="bubble">${text}</div>`;

      chatWindow.appendChild(row);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

function addBotMessage(text) {
      const chatWindow = document.getElementById("chatWindow");

      const row = document.createElement("div");
      row.className = "chat-row bot-chat";
      row.innerHTML = `
        <div class="avatar">T</div>
        <div class="bubble">${text}</div>
      `;

      chatWindow.appendChild(row);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }

function getBotReply(text) {
      if (text.includes("소음")) {
        return "도로변과의 거리가 있어 실내 유입 소음은 낮은 편으로 분석됩니다. 다만 야간 시간대 차량 흐름은 실제 방문 시 확인하는 것이 좋습니다.";
      }

function handleEnter(event) {
      if (event.key === "Enter") {
        sendMessage();
      }