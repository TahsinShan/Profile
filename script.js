// ==============================
// DARK/LIGHT MODE TOGGLE
// ==============================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply theme
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
}

// Check saved theme on load
let savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  let currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
