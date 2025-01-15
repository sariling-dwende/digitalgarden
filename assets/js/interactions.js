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

// Array of background images
const backgroundImages = [
  '../images/image (1).jpg',
  '../images/image (2).jpeg',
  '../images/image (3).jpeg',
  '../images/image (4).jpeg',
  '../images/image (5).jpeg',
  '../images/image (6).jpeg',
  '../images/image (7).jpeg',
  '/assets/images/image (8).jpeg',
  '/assets/images/image (9).jpeg',
  '/assets/images/image (10).jpeg',
  '/assets/images/image (11).jpeg',
  '/assets/images/image (12).jpeg',
  '/assets/images/image (13).jpeg',
  '/assets/images/image (14).jpeg',
  '/assets/images/image (15).jpeg',
  '/assets/images/image (16).jpeg',
  '/assets/images/image (17).jpeg',
  '/assets/images/image (18).jpeg',
  '/assets/images/image (19).jpeg',
  '/assets/images/image (20).jpeg',
  '/assets/images/image (21).jpeg',
  '/assets/images/image (22).jpeg',
  '/assets/images/image (23).jpeg',
  '/assets/images/image (24).jpeg',
  '/assets/images/image (25).jpeg',
  '/assets/images/image (26).jpeg',
  '/assets/images/image (27).jpeg',
  '/assets/images/image (28).jpeg',
  '/assets/images/image (29).jpeg',
  '/assets/images/image (30).jpeg',
  '/assets/images/image (31).jpeg',
  '/assets/images/image (32).jpeg',
  '/assets/images/image (33).jpeg',
  '/assets/images/image (34).jpeg',
  '/assets/images/image (35).jpeg',
  '/assets/images/image (36).jpeg',
  '/assets/images/image (37).jpeg',
  '/assets/images/image (38).jpeg',
  '/assets/images/image (39).jpeg',
  '/assets/images/image (40).jpeg',
  '/assets/images/image (41).jpeg',
  '/assets/images/image (42).jpeg',
  '/assets/images/image (43).jpeg',
  '/assets/images/image (44).jpeg',
  '/assets/images/image (45).jpeg',
  '/assets/images/image (46).jpeg',
  '/assets/images/image (47).jpeg',
  '/assets/images/image (48).jpeg',
  '/assets/images/image (49).jpeg',
  '/assets/images/image (50).jpeg',
  '/assets/images/image (51).jpeg',
  '/assets/images/image (52).jpeg',
  '/assets/images/image (53).jpeg',
  '/assets/images/image (54).jpeg',
  '/assets/images/image (55).jpeg',
  '/assets/images/image (56).jpeg',
  '/assets/images/image (57).jpeg',
  '/assets/images/image (58).jpeg',
  '/assets/images/image (59).jpeg',
  '/assets/images/image (60).jpeg',
  '/assets/images/image (61).jpeg',
  '/assets/images/image (62).jpeg',
  '/assets/images/image (63).jpeg',
  '/assets/images/image (64).jpeg',
  '/assets/images/image (65).jpeg',
  '/assets/images/image (66).jpeg',
  '/assets/images/image (67).jpeg',
  '/assets/images/image (68).jpeg',
  '/assets/images/image (69).jpeg',
  '/assets/images/image (70).jpeg',
  '/assets/images/image (71).jpeg',
  '/assets/images/image (72).jpeg',
  '/assets/images/image (73).jpeg',
  '/assets/images/image (74).jpeg',
  '/assets/images/image (75).jpeg',
  '/assets/images/image (76).jpeg',
  '/assets/images/image (77).jpeg',
  '/assets/images/image (78).jpeg',
  '/assets/images/image (79).jpeg',
  '/assets/images/image (80).jpeg',
  '/assets/images/image (81).jpeg',
  '/assets/images/image (82).jpeg',
  '/assets/images/image (83).jpeg',
  '/assets/images/image (84).jpeg',
  '/assets/images/image (85).jpeg',
  '/assets/images/image (86).jpeg',
  '/assets/images/image (87).jpeg',
  '/assets/images/image (88).jpeg',
  '/assets/images/image (89).jpeg',
  '/assets/images/image (90).jpeg',
  '/assets/images/image (91).jpeg',
  '/assets/images/image (92).jpeg',
  '/assets/images/image (93).jpeg',
  '/assets/images/image (94).jpeg',
  '/assets/images/image (95).jpeg',
  '/assets/images/image (96).jpeg',
  '/assets/images/image (97).jpeg',
  '/assets/images/image (98).jpeg',
  '/assets/images/image (99).jpeg',
  '/assets/images/image (100).jpeg',
  '/assets/images/image (101).jpeg',
  '/assets/images/image (102).jpeg',
  '/assets/images/image (103).jpeg',
  '/assets/images/image (104).jpeg',
  '/assets/images/image (105).jpeg',
  '/assets/images/image (106).jpeg',
  '/assets/images/image (107).jpeg',
  '/assets/images/image (108).jpeg',
  '/assets/images/image (109).jpeg',
  '/assets/images/image (110).jpeg',
  '/assets/images/image (111).jpeg',
  '/assets/images/image (112).jpeg',
  '/assets/images/image (113).jpeg',
  '/assets/images/image (114).jpeg',
  '/assets/images/image (115).jpeg',
  '/assets/images/image (116).jpeg',
  '/assets/images/image (117).jpeg',
  '/assets/images/image (118).jpeg',
  '/assets/images/image (119).jpeg',
  '/assets/images/image (120).jpeg',
  '/assets/images/image (121).jpeg',
  '/assets/images/image (122).jpeg',
  '/assets/images/image (123).jpeg',
  '/assets/images/image (124).jpeg',
  '/assets/images/image (125).jpeg',
  '/assets/images/image (126).jpeg',
  '/assets/images/image (127).jpeg',
  '/assets/images/image (128).jpeg',  
  '/assets/images/image (129).jpeg',
  '/assets/images/image (130).jpeg',
  '/assets/images/image (131).jpeg',
  '/assets/images/image (132).jpeg',
  '/assets/images/image (133).jpeg',
  '/assets/images/image (134).jpeg',
  '/assets/images/image (135).jpeg',
  '/assets/images/image (136).jpeg',
  '/assets/images/image (137).jpeg',      
  '/assets/images/image (138).jpeg',
  '/assets/images/image (139).jpeg',
  '/assets/images/image (140).jpeg',
  '/assets/images/image (141).jpeg',
  '/assets/images/image (142).jpeg',
  '/assets/images/image (143).jpeg',
  '/assets/images/image (144).jpeg',
  '/assets/images/image (145).jpeg',
  '/assets/images/image (146).jpeg',
  '/assets/images/image (147).jpeg',
  '/assets/images/image (148).jpeg',
  '/assets/images/image (149).jpeg',
  '/assets/images/image (150).jpeg',
  '/assets/images/image (151).jpeg',
  '/assets/images/image (152).jpeg',
  '/assets/images/image (153).jpeg',
  '/assets/images/image (154).jpeg',
  '/assets/images/image (155).jpeg',  
  '/assets/images/image (156).jpeg',
  '/assets/images/image (157).jpeg',
  '/assets/images/image (158).jpeg',
  '/assets/images/image (159).jpeg',
  '/assets/images/image (160).jpeg',
  '/assets/images/image (161).jpeg',
  '/assets/images/image (162).jpeg',
  '/assets/images/image (163).jpeg',
  '/assets/images/image (164).jpeg',
  '/assets/images/image (165).jpeg',
  '/assets/images/image (166).jpeg',
  '/assets/images/image (167).jpeg',
  '/assets/images/image (168).jpeg',
  '/assets/images/image (169).jpeg',
  '/assets/images/image (170).jpeg',
  '/assets/images/image (171).jpeg',
  '/assets/images/image (172).jpeg',
  '/assets/images/image (173).jpeg',  
  '/assets/images/image (174).jpeg',
  '/assets/images/image (175).jpeg',
  '/assets/images/image (176).jpeg',
  '/assets/images/image (177).jpeg',
  '/assets/images/image (178).jpeg',
  '/assets/images/image (179).jpeg',
  '/assets/images/image (180).jpeg',
  '/assets/images/image (181).jpeg',
  '/assets/images/image (182).jpeg',  
  '/assets/images/image (183).jpeg',
  '/assets/images/image (184).jpeg',
  '/assets/images/image (185).jpeg',
  '/assets/images/image (186).jpeg',
  '/assets/images/image (187).jpeg',
  '/assets/images/image (188).jpeg',
  '/assets/images/image (189).jpeg',
  '/assets/images/image (190).jpeg',
  '/assets/images/image (191).jpeg',
  '/assets/images/image (192).jpeg',
  '/assets/images/image (193).jpeg',
  '/assets/images/image (194).jpeg',
  '/assets/images/image (195).jpeg',
  '/assets/images/image (196).jpeg',
  '/assets/images/image (197).jpeg',
  '/assets/images/image (198).jpeg',
  '/assets/images/image (199).jpeg',
  '/assets/images/image (200).jpeg',
  '/assets/images/image (201).jpeg',
  '/assets/images/image (202).jpeg',
  '/assets/images/image (203).jpeg',
  '/assets/images/image (204).jpeg',
  '/assets/images/image (205).jpeg',
  '/assets/images/image (206).jpeg',
  '/assets/images/image (1).jpeg',
  // Add more images as needed
];

// Function to set a random background image
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedImage = backgroundImages[randomIndex];

  // Set the background image for the body and the pseudo-element
  document.body.style.backgroundImage = `url('${selectedImage}')`;
  document.body.style.setProperty('--background-image', `url('${selectedImage}')`);
}

// Call the function on page load
window.addEventListener('load', setRandomBackground);