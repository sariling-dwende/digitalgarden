// Just initialize progress bar functionality
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  
  // Check if AOS is available
  if (typeof AOS !== 'undefined') {
    console.log('AOS is loaded');
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: window.innerWidth < 768
    });
  } else {
    console.error('AOS is not loaded');
  }
  
  initProgressBar();
});

function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  console.log('Progress bar element:', progressBar);
  
  if (!progressBar) {
    console.error('Progress bar not found');
    return;
  }

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
    console.log('Scroll progress:', scrolled + '%');
  });
}