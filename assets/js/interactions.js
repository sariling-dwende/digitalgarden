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
  'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5d88d1c-ec94-4d60-bdfc-6736294c56ec_6144x8160.jpeg',
  '../images/image (1).jpg',
  '../images/image (2).jpeg',
  '../images/image (3).jpeg',
  '../images/image (4).jpeg',
  '../images/image (5).jpeg',
  '../images/image (6).jpeg',
  '../images/image (7).jpeg',
  '../images/image (8).jpeg',
  '../images/image (9).jpeg',
  '../images/image (10).jpeg',
  '../images/image (11).jpeg',
  '../images/image (12).jpeg',
  '../images/image (13).jpeg',
  '../images/image (14).jpeg',
  '../images/image (15).jpeg',
  '../images/image (16).jpeg',
  '../images/image (17).jpeg',
  '../images/image (18).jpeg',
  '../images/image (19).jpeg',
  '../images/image (20).jpeg',
  '../images/image (21).jpeg',
  '../images/image (22).jpeg',
  '../images/image (23).jpeg',
  '../images/image (24).jpeg',
  '../images/image (25).jpeg',
  '../images/image (26).jpeg',
  '../images/image (27).jpeg',
  '../images/image (28).jpeg',
  '../images/image (29).jpeg',
  '../images/image (30).jpeg',
  '../images/image (31).jpeg',
  '../images/image (32).jpeg',
  '../images/image (33).jpeg',
  '../images/image (34).jpeg',
  '../images/image (35).jpeg',
  '../images/image (36).jpeg',
  '../images/image (37).jpeg',
  '../images/image (38).jpeg',
  '../images/image (39).jpeg',
  '../images/image (40).jpeg',
  '../images/image (41).jpeg',
  '../images/image (42).jpeg',
  '../images/image (43).jpeg',
  '../images/image (44).jpeg',
  '../images/image (45).jpeg',
  '../images/image (46).jpeg',
  '../images/image (47).jpeg',
  '../images/image (48).jpeg',
  '../images/image (49).jpeg',
  '../images/image (50).jpeg',
  '../images/image (51).jpeg',
  '../images/image (52).jpeg',
  '../images/image (53).jpeg',
  '../images/image (54).jpeg',
  '../images/image (55).jpeg',
  '../images/image (56).jpeg',
  '../images/image (57).jpeg',
  '../images/image (58).jpeg',
  '../images/image (59).jpeg',
  '../images/image (60).jpeg',
  '../images/image (61).jpeg',
  '../images/image (62).jpeg',
  '../images/image (63).jpeg',
  '../images/image (64).jpeg',
  '../images/image (65).jpeg',
  '../images/image (66).jpeg',
  '../images/image (67).jpeg',
  '../images/image (68).jpeg',
  '../images/image (69).jpeg',
  '../images/image (70).jpeg',
  '../images/image (71).jpeg',
  '../images/image (72).jpeg',
  '../images/image (73).jpeg',
  '../images/image (74).jpeg',
  '../images/image (75).jpeg',
  '../images/image (76).jpeg',
  '../images/image (77).jpeg',
  '../images/image (78).jpeg',
  '../images/image (79).jpeg',
  '../images/image (80).jpeg',
  '../images/image (81).jpeg',
  '../images/image (82).jpeg',
  '../images/image (83).jpeg',
  '../images/image (84).jpeg',
  '../images/image (85).jpeg',
  '../images/image (86).jpeg',
  '../images/image (87).jpeg',
  '../images/image (88).jpeg',
  '../images/image (89).jpeg',
  '../images/image (90).jpeg',
  '../images/image (91).jpeg',
  '../images/image (92).jpeg',
  '../images/image (93).jpeg',
  '../images/image (94).jpeg',
  '../images/image (95).jpeg',
  '../images/image (96).jpeg',
  '../images/image (97).jpeg',
  '../images/image (98).jpeg',
  '../images/image (99).jpeg',
  '../images/image (100).jpeg',
  '../images/image (101).jpeg',
  '../images/image (102).jpeg',
  '../images/image (103).jpeg',
  '../images/image (104).jpeg',
  '../images/image (105).jpeg',
  '../images/image (106).jpeg',
  '../images/image (107).jpeg',
  '../images/image (108).jpeg',
  '../images/image (109).jpeg',
  '../images/image (110).jpeg',
  '../images/image (111).jpeg',
  '../images/image (112).jpeg',
  '../images/image (113).jpeg',
  '../images/image (114).jpeg',
  '../images/image (115).jpeg',
  '../images/image (116).jpeg',
  '../images/image (117).jpeg',
  '../images/image (118).jpeg',
  '../images/image (119).jpeg',
  '../images/image (120).jpeg',
  '../images/image (121).jpeg',
  '../images/image (122).jpeg',
  '../images/image (123).jpeg',
  '../images/image (124).jpeg',
  '../images/image (125).jpeg',
  '../images/image (126).jpeg',
  '../images/image (127).jpeg',
  '../images/image (128).jpeg',  
  '../images/image (129).jpeg',
  '../images/image (130).jpeg',
  '../images/image (131).jpeg',
  '../images/image (132).jpeg',
  '../images/image (133).jpeg',
  '../images/image (134).jpeg',
  '../images/image (135).jpeg',
  '../images/image (136).jpeg',
  '../images/image (137).jpeg',      
  '../images/image (138).jpeg',
  '../images/image (139).jpeg',
  '../images/image (140).jpeg',
  '../images/image (141).jpeg',
  '../images/image (142).jpeg',
  '../images/image (143).jpeg',
  '../images/image (144).jpeg',
  '../images/image (145).jpeg',
  '../images/image (146).jpeg',
  '../images/image (147).jpeg',
  '../images/image (148).jpeg',
  '../images/image (149).jpeg',
  '../images/image (150).jpeg',
  '../images/image (151).jpeg',
  '../images/image (152).jpeg',
  '../images/image (153).jpeg',
  '../images/image (154).jpeg',
  '../images/image (155).jpeg',  
  '../images/image (156).jpeg',
  '../images/image (157).jpeg',
  '../images/image (158).jpeg',
  '../images/image (159).jpeg',
  '../images/image (160).jpeg',
  '../images/image (161).jpeg',
  '../images/image (162).jpeg',
  '../images/image (163).jpeg',
  '../images/image (164).jpeg',
  '../images/image (165).jpeg',
  '../images/image (166).jpeg',
  '../images/image (167).jpeg',
  '../images/image (168).jpeg',
  '../images/image (169).jpeg',
  '../images/image (170).jpeg',
  '../images/image (171).jpeg',
  '../images/image (172).jpeg',
  '../images/image (173).jpeg',  
  '../images/image (174).jpeg',
  '../images/image (175).jpeg',
  '../images/image (176).jpeg',
  '../images/image (177).jpeg',
  '../images/image (178).jpeg',
  '../images/image (179).jpeg',
  '../images/image (180).jpeg',
  '../images/image (181).jpeg',
  '../images/image (182).jpeg',  
  '../images/image (183).jpeg',
  '../images/image (184).jpeg',
  '../images/image (185).jpeg',
  '../images/image (186).jpeg',
  '../images/image (187).jpeg',
  '../images/image (188).jpeg',
  '../images/image (189).jpeg',
  '../images/image (190).jpeg',
  '../images/image (191).jpeg',
  '../images/image (192).jpeg',
  '../images/image (193).jpeg',
  '../images/image (194).jpeg',
  '../images/image (195).jpeg',
  '../images/image (196).jpeg',
  '../images/image (197).jpeg',
  '../images/image (198).jpeg',
  '../images/image (199).jpeg',
  '../images/image (200).jpeg',
  '../images/image (201).jpeg',
  '../images/image (202).jpeg',
  '../images/image (203).jpeg',
  '../images/image (204).jpeg',
  '../images/image (205).jpeg',
  '../images/image (206).jpeg',
  '../images/image (1).jpg',
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