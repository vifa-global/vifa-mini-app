// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Make app fullscreen

// Wait for preloader video to finish
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const app = document.getElementById('app');
  const video = document.querySelector('video');

  // When video ends, show app
  video.addEventListener('ended', () => {
    preloader.style.display = 'none';
    app.style.display = 'block';
    loadHomeScreen();
  });

  // Fallback if video fails
  setTimeout(() => {
    preloader.style.display = 'none';
    app.style.display = 'block';
    loadHomeScreen();
  }, 7000); // 7 seconds = video length
});

function loadHomeScreen() {
  // TEMPORARY CONTENT - We'll design properly later
  document.getElementById('app').innerHTML = `
    <header>
      <h1>VIFA Rewards</h1>
      <div class="balance">0 VP</div>
    </header>
    <main>
      <button class="checkin-btn">Daily Check-In</button>
    </main>
  `;
  
  // Initialize Telegram BackButton
  tg.BackButton.show();
  tg.BackButton.onClick(() => {
    tg.close();
  });
}
