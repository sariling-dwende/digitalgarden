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
    // Calculate scroll percentage
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    // Update progress bar width
    progressBar.style.width = `${scrollPercent}%`;
    
    // Log for debugging
    console.log('Scroll percentage:', scrollPercent);
  }

  // Add scroll event listener
  window.addEventListener('scroll', updateProgress, { passive: true });
  
  // Initial update
  updateProgress();
}