// Wait for everything to load
window.addEventListener('load', () => {
  console.log('Window loaded');
  initProgressBar();
});

function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const progressContainer = document.querySelector('.progress-container');
  
  if (!progressBar || !progressContainer) {
    console.error('Progress bar elements not found');
    return;
  }

  // Add scroll event listener to document
  document.addEventListener('scroll', () => {
    // Calculate scroll progress
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.max(0, Math.min(100, (window.scrollY / windowHeight) * 100));
    
    // Update progress bar width
    progressBar.style.width = `${scrolled}%`;
  });
}