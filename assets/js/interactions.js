// Just initialize progress bar functionality
document.addEventListener('DOMContentLoaded', () => {
  // Remove AOS initialization for now
  // AOS.init();
  
  initProgressBar();
});

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