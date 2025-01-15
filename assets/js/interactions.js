// Wait for everything to load
window.addEventListener('load', () => {
  initProgressBar();
});

function initProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  
  if (!progressBar) {
    console.error('Progress bar not found');
    return;
  }

  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = `${scrollPercent}%`;
  }

  // Add scroll event listener
  window.addEventListener('scroll', updateProgress, { passive: true });
  
  // Initial update
  updateProgress();
}

// Add this line to test if the script is running
console.log('Progress bar script loaded');

// Highlight current section in table of contents
const observeHeaders = () => {
  const headers = document.querySelectorAll('h2, h3');
  const tocLinks = document.querySelectorAll('.toc a');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.5 });
  
  headers.forEach(header => observer.observe(header));
};

document.addEventListener('DOMContentLoaded', () => {
  initImageZoom();
});

function initImageZoom() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'zoom-overlay';
  document.body.appendChild(overlay);

  // Handle image clicks
  document.querySelectorAll('.content img').forEach(img => {
    img.addEventListener('click', () => {
      const isZoomed = img.classList.contains('zoomed');
      
      // Reset all images
      document.querySelectorAll('.content img').forEach(otherImg => {
        otherImg.classList.remove('zoomed');
      });
      
      // Toggle zoom on clicked image
      if (!isZoomed) {
        img.classList.add('zoomed');
        overlay.classList.add('active');
      }
    });
  });

  // Close zoom when clicking overlay
  overlay.addEventListener('click', () => {
    document.querySelectorAll('.content img.zoomed').forEach(img => {
      img.classList.remove('zoomed');
    });
    overlay.classList.remove('active');
  });

  // Close zoom with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.content img.zoomed').forEach(img => {
        img.classList.remove('zoomed');
      });
      overlay.classList.remove('active');
    }
  });
}