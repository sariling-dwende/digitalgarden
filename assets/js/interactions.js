// Initialize all animations when document loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Initialize page transitions
  initPageTransitions();
  
  // Initialize dark mode
  initDarkMode();
  
  // Initialize progress bar
  initProgressBar();
});

// Page transitions
function initPageTransitions() {
  barba.init({
    transitions: [{
      name: 'fade-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.5
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.5
        });
      }
    }]
  });
}

// Dark mode toggle
function initDarkMode() {
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', 
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
  });
}

// Reading progress bar
function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
} 