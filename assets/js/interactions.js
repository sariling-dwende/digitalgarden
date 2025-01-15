document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS with more conservative settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: window.innerWidth < 768 // Disable on mobile
    });
    
    // Initialize progress bar only
    initProgressBar();
  });
  
  // Remove the dark mode functionality since you have existing theme
  // Keep only the progress bar functionality
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