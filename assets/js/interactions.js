// Wait for everything to load
window.addEventListener('load', () => {
  initProgressBar();
});

function initProgressBar() {
  // Get the progress bar element
  const progressBar = document.querySelector('.progress-bar');
  
  if (!progressBar) {
    console.error('Progress bar not found');
    return;
  }

  // Force initial visibility
  progressBar.style.display = 'block';
  progressBar.style.opacity = '1';

  // Update progress on scroll
  function updateProgress() {
    // Get scroll position and page height
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Calculate percentage
    const scrolled = (winScroll / height) * 100;
    
    // Update width
    requestAnimationFrame(() => {
      progressBar.style.width = scrolled + '%';
    });
  }

  // Add scroll listener
  window.addEventListener('scroll', updateProgress, { passive: true });
  
  // Initial update
  updateProgress();
  
  // Log for debugging
  console.log('Progress bar initialized');
}