// Wait for everything to load
window.addEventListener('load', () => {
  // Simple scroll handler
  const progressBar = document.querySelector('.progress-bar');
  
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }
});