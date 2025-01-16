function getRandomBackground() {
  // Add your background images to this array
  const backgrounds = [
    '/assets/js/backgrounds/image (1).jpeg',
    '/assets/js/backgrounds/image (2).jpeg',
    '/assets/js/backgrounds/image (3).jpeg',
    '/assets/js/backgrounds/image (4).jpeg',
    '/assets/js/backgrounds/image (5).jpeg',
    '/assets/js/backgrounds/image (6).jpeg',
    '/assets/js/backgrounds/image (7).jpeg',
    '/assets/js/backgrounds/image (8).jpeg',
    '/assets/js/backgrounds/image (9).jpeg',
    '/assets/js/backgrounds/image (10).jpeg',
    '/assets/js/backgrounds/image (11).jpeg',
    '/assets/js/backgrounds/image (12).jpeg',
    '/assets/js/backgrounds/image (13).jpeg',
    '/assets/js/backgrounds/image (14).jpeg',
    '/assets/js/backgrounds/image (15).jpeg',
    '/assets/js/backgrounds/image (16).jpeg',
    '/assets/js/backgrounds/image (17).jpeg',
    '/assets/js/backgrounds/image (18).jpeg',
    '/assets/js/backgrounds/image (19).jpeg',
    '/assets/js/backgrounds/image (20).jpeg',
    '/assets/js/backgrounds/image (21).jpeg',
    '/assets/js/backgrounds/image (22).jpeg',
    '/assets/js/backgrounds/image (23).jpeg',
    '/assets/js/backgrounds/image (24).jpeg',
    '/assets/js/backgrounds/image (25).jpeg',
    '/assets/js/backgrounds/image (26).jpeg',
    '/assets/js/backgrounds/image (27).jpeg',
    '/assets/js/backgrounds/image (28).jpeg',
    '/assets/js/backgrounds/image (29).jpeg',
    '/assets/js/backgrounds/image (30).jpeg',
  ];
  
  // Get a random background from the array
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedBackground = backgrounds[randomIndex];
  console.log('Loading background:', selectedBackground); // Debug log
  return selectedBackground;
}

// Set the background when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const backgroundWrapper = document.querySelector('.background-wrapper');
    if (backgroundWrapper) {
      const background = getRandomBackground();
      backgroundWrapper.style.backgroundImage = `url('${background}')`;
      
      // Add error handling
      const img = new Image();
      img.onerror = () => console.error('Failed to load background:', background);
      img.src = background;
    } else {
      console.error('Background wrapper not found');
    }
  });