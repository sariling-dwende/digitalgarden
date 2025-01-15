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
  console.log('Initializing features...');
  initTableOfContents();
  initSmoothScroll();
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

function initTableOfContents() {
  // Get all headers in the content
  const headers = Array.from(document.querySelectorAll('.content h1, .content h2, .content h3'));
  const tocLinks = Array.from(document.querySelectorAll('.toc a'));
  
  console.log('Headers found:', headers.length);
  console.log('TOC links found:', tocLinks.length);

  if (headers.length === 0 || tocLinks.length === 0) return;

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      // Get all entries that are intersecting
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Get the first visible header
        const visibleHeader = visibleEntries[0].target;
        
        // Update TOC links
        tocLinks.forEach(link => {
          // Remove "#" when comparing
          const headerId = visibleHeader.id;
          const linkHref = link.getAttribute('href').replace('#', '');
          
          if (headerId === linkHref) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    },
    {
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0.1
    }
  );

  // Observe all headers
  headers.forEach(header => observer.observe(header));
}

function initSmoothScroll() {
  document.querySelectorAll('.toc a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Update URL without jumping
        history.pushState(null, null, link.getAttribute('href'));
      }
    });
  });
}

// Add debug logging
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  console.log('Scroll position:', scrollPosition);
});