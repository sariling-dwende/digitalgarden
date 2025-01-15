// Wait for everything to load
window.addEventListener('load', () => {
  console.log('Window loaded');
  
  // Create progress bar if it doesn't exist
  if (!document.querySelector('.progress-container')) {
    createProgressBar();
  }
  
  initProgressBar();
});

function createProgressBar() {
  // Create container
  const container = document.createElement('div');
  container.className = 'progress-container';
  
  // Create bar
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  
  // Add bar to container
  container.appendChild(bar);
  
  // Add container as first child of body
  document.body.insertBefore(container, document.body.firstChild);
  
  console.log('Progress bar created');
}

function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  
  if (!progressBar) {
    console.error('Progress bar element not found');
    return;
  }

  // Add scroll event listener to document
  document.addEventListener('scroll', () => {
    // Calculate scroll progress
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.max(0, Math.min(100, (window.scrollY / windowHeight) * 100));
    
    // Update progress bar width
    progressBar.style.width = `${scrolled}%`;
    console.log('Scroll progress:', scrolled + '%');
  });
}