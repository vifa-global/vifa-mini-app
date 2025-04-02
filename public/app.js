// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;

// Expand the app to full screen
tg.expand();

// Hide preloader after video ends
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const video = document.querySelector('video');
  
  // When video ends, hide preloader
  video.addEventListener('ended', () => {
    preloader.style.display = 'none';
    document.getElementById('app').style.display = 'block';
  });
  
  // Fallback in case video doesn't play
  setTimeout(() => {
    preloader.style.display = 'none';
    document.getElementById('app').style.display = 'block';
  }, 7000); // 7 seconds = your video length
});
