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
  try {
    console.group('TOC Initialization');
    initTableOfContents();
    console.groupEnd();
  } catch (error) {
    console.error('Error in TOC initialization:', error);
  }
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
  // Target the outer .toc div that contains everything
  const tocOuter = document.querySelector('div.toc');
  if (!tocOuter) {
    console.error('TOC outer container not found');
    return;
  }

  // Get all headers in the content
  const headers = Array.from(document.querySelectorAll('.content h1, .content h2, .content h3'))
    .filter(header => header.id);
  console.log('Headers found:', headers.length);

  // Get all links from the nested nav.toc
  const tocLinks = Array.from(tocOuter.querySelectorAll('nav.toc a'));
  console.log('TOC links found:', tocLinks.length);

  if (headers.length === 0 || tocLinks.length === 0) {
    console.warn('No headers or TOC links found');
    return;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleHeaders = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target);

      if (visibleHeaders.length > 0) {
        const currentHeader = visibleHeaders[0];
        
        tocLinks.forEach(link => {
          const headerId = currentHeader.id;
          const linkTarget = link.getAttribute('href')?.replace('#', '');
          
          if (headerId === linkTarget) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    },
    {
      rootMargin: '-10% 0px -50% 0px',
      threshold: [0, 0.5, 1.0]
    }
  );

  // Observe headers
  headers.forEach(header => observer.observe(header));

  // Add smooth scrolling
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const href = link.getAttribute('href');
      if (!href) return;
      
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Remove active class from all links
        tocLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });
}

// Add scroll position logging
window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    console.log('Scroll position:', window.scrollY);
  });
});