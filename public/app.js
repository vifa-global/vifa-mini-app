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
  tg.BackButton.hide();
  
  document.getElementById('app').innerHTML = `
    <header>
      <img src="/assets/icons/logo.png" width="60">
      <div class="balance">100 VP</div>
    </header>
    
    <main>
      <button id="clickBtn" class="cta-button">
        <img src="/assets/icons/coin.png" width="20">
        CLICK FOR 1 VP
      </button>
      
      <button id="checkinBtn" class="cta-button">
        DAILY CHECK-IN (+20 VP)
      </button>
      
      <p class="streak-counter">Streak: 7 days</p>
    </main>
    
    <nav class="bottom-nav">
      <button class="nav-btn active" data-page="home">
        <img src="/assets/icons/home.png" width="24">
      </button>
      <button class="nav-btn" data-page="tasks">
        <img src="/assets/icons/tasks.png" width="24">
      </button>
      <button class="nav-btn" data-page="profile">
        <img src="/assets/icons/profile.png" width="24">
      </button>
    </nav>
  `;

  // Set up navigation handlers
  setupNavigation();
}

function setupNavigation() {
  // Handle bottom nav clicks
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-btn')) {
      const page = e.target.closest('.nav-btn').dataset.page;
      // Update active state
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
      });
      // Load corresponding page
      if (page === 'home') loadHomeScreen();
      // We'll add task and profile screens later
    }
  });

  // Initialize Telegram BackButton
  tg.BackButton.show();
  tg.BackButton.onClick(() => {
    tg.close();
  });
}
