// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Chatbot logic
const chatbot = document.getElementById("chatbot");
const chatIcon = document.getElementById("chat-icon");
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");
const chatClose = document.getElementById("chat-close");

function respond(input) {
  const text = input.toLowerCase();
  if (text.includes("name")) return "His name is Tahsin Hasan Shan.";
  if (text.includes("school")) return "He’s from Savar Cantonment Public School & College.";
  if (text.includes("projects")) return "He built a Mars rover, smart street system, and 20+ Python mini projects.";
  if (text.includes("skills")) return "He knows Python, Arduino, HTML, CSS, JS.";
  return "I'm Shan’s Bot! Ask me anything about him.";
}

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim()) {
    const msg = chatInput.value.trim();
    chatBody.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
    setTimeout(() => {
      chatBody.innerHTML += `<div><strong>Bot:</strong> ${respond(msg)}</div>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 300);
    chatInput.value = "";
  }
});

// Show chatbot briefly on load
window.addEventListener("load", () => {
  chatbot.style.display = "flex";
  chatIcon.style.display = "none";
  chatBody.innerHTML = `<div><strong>Bot:</strong> Hey there! I'm here to help you learn more about Shan 😊</div>`;
  setTimeout(() => {
    chatbot.style.display = "none";
    chatIcon.style.display = "block";
  }, 6000);
});

// Click chat icon to open
chatIcon.addEventListener("click", () => {
  chatbot.style.display = "flex";
  chatIcon.style.display = "none";
  chatInput.focus(); 
});

// Minimize button click
chatClose.addEventListener("click", () => {
  chatbot.style.display = "none";
  chatIcon.style.display = "block";
});

// Minimize if user clicks outside chatbot
document.addEventListener("click", (e) => {
  const isInside = chatbot.contains(e.target) || chatIcon.contains(e.target);
  if (!isInside) {
    chatbot.style.display = "none";
    chatIcon.style.display = "block";
  }
});

// Minimize on scroll
window.addEventListener("scroll", () => {
  chatbot.style.display = "none";
  chatIcon.style.display = "block";
});
