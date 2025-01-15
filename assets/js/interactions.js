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
  console.log('Initializing TOC...');
  initTableOfContents();
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
  // Get all headers and TOC links
  const headers = Array.from(document.querySelectorAll('.content h1, .content h2, .content h3'));
  const tocLinks = Array.from(document.querySelectorAll('.toc-container a'));
  
  console.log('Headers found:', headers.length);
  headers.forEach(h => console.log('Header:', h.id, h.textContent));
  
  console.log('TOC links found:', tocLinks.length);
  tocLinks.forEach(link => console.log('Link:', link.getAttribute('href'), link.textContent));

  if (headers.length === 0 || tocLinks.length === 0) return;

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        console.log('Intersection:', entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          const headerId = entry.target.id;
          tocLinks.forEach(link => {
            const linkHref = decodeURIComponent(link.getAttribute('href').replace('#', ''));
            console.log('Comparing:', headerId, 'with', linkHref);
            if (headerId === linkHref) {
              console.log('Match found! Activating:', linkHref);
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20px 0px -60% 0px',
      threshold: [0, 0.5, 1.0]
    }
  );

  // Observe all headers
  headers.forEach(header => {
    if (header.id) {
      observer.observe(header);
      console.log('Observing header:', header.id);
    } else {
      console.warn('Header without ID:', header.textContent);
    }
  });

  // Add smooth scrolling
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = decodeURIComponent(link.getAttribute('href').replace('#', ''));
      const targetElement = document.getElementById(targetId);
      
      console.log('Clicking link to:', targetId);
      console.log('Target element found:', !!targetElement);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Manually add active class
        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update URL without jumping
        history.pushState(null, null, link.getAttribute('href'));
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