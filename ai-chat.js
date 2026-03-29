// Tự động tạo giao diện Chatbox khi trang web load
const chatContainer = document.createElement('div');
chatContainer.innerHTML = `
    <div id="ai-chat-wrapper" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: sans-serif;">
        <div id="chat-window" style="display: none; width: 320px; height: 450px; background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); flex-direction: column; overflow: hidden; border: 1px solid #eee;">
            <div style="background: #6b4fbb; color: white; padding: 15px; font-weight: bold; display: flex; justify-content: space-between;">
                <span>DNA.Me Assistant 🤖</span>
                <span onclick="toggleChat()" style="cursor:pointer;">×</span>
            </div>
            <div id="chat-content" style="flex: 1; overflow-y: auto; padding: 15px; background: #f9f9f9; font-size: 14px;">
                <div style="background: white; padding: 8px; border-radius: 10px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    Chào Minh! Mình có thể giúp gì cho bạn về DNA, Cortisol hay Chronotype?
                </div>
            </div>
            <div style="padding: 10px; border-top: 1px solid #eee; display: flex; background: white;">
                <input type="text" id="user-input" placeholder="Hỏi AI..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 20px; outline: none; padding-left: 15px;">
                <button onclick="askAI()" style="margin-left: 8px; background: #6b4fbb; color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer;">Gửi</button>
            </div>
        </div>
        <button onclick="toggleChat()" style="width: 60px; height: 60px; border-radius: 50%; background: #6b4fbb; color: white; border: none; cursor: pointer; font-size: 24px; box-shadow: 0 4px 15px rgba(107, 79, 187, 0.4); float: right; margin-top: 10px;">🤖</button>
    </div>
`;
document.body.appendChild(chatContainer);

function toggleChat() {
    const win = document.getElementById('chat-window');
    win.style.display = (win.style.display === 'none' || win.style.display === '') ? 'flex' : 'none';
}

async function askAI() {
    const input = document.getElementById('user-input');
    const content = document.getElementById('chat-content');
    const question = input.value.trim();
    if (!question) return;

    content.innerHTML += `<div style="text-align: right; margin-bottom: 10px;"><span style="background: #e1bee7; padding: 8px; border-radius: 10px; display: inline-block;">${question}</span></div>`;
    input.value = '';
    content.scrollTop = content.scrollHeight;

    try {
        const response = await fetch('http://localhost:3000/ask-ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                userQuestion: question,
                quizContext: "Dự án DNA.Me tập trung vào sinh học, Cortisol và Chronotype." 
            })
        });
        const data = await response.json();
        content.innerHTML += `<div style="margin-bottom: 10px;"><span style="background: white; padding: 8px; border-radius: 10px; display: inline-block; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">${data.answer}</span></div>`;
        content.scrollTop = content.scrollHeight;
    } catch (e) {
        content.innerHTML += `<p style="color: red; font-size: 12px;">Server AI chưa bật Minh ơi!</p>`;
    }
}

// Nhấn Enter để gửi cho nhanh
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') askAI();
});