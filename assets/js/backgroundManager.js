function getRandomBackground() {
  // Add your background images to this array
  const backgrounds = [
    '/assets/image/image (1).jpeg',
    '/assets/image/image (2).jpeg',
    '/assets/image/image (3).jpeg',
    '/assets/image/image (4).jpeg',
    '/assets/image/image (5).jpeg',
    '/assets/image/image (6).jpeg',
    '/assets/image/image (7).jpeg',
    '/assets/image/image (8).jpeg',
    '/assets/image/image (9).jpeg',
    '/assets/image/image (10).jpeg',
    '/assets/image/image (11).jpeg',
    '/assets/image/image (12).jpeg',
    '/assets/image/image (13).jpeg',
    '/assets/image/image (14).jpeg',
    '/assets/image/image (15).jpeg',
    '/assets/image/image (16).jpeg',
    '/assets/image/image (17).jpeg',
    '/assets/image/image (18).jpeg',
    '/assets/image/image (19).jpeg',
    '/assets/image/image (20).jpeg',
    '/assets/image/image (21).jpeg',
    '/assets/image/image (22).jpeg',
    '/assets/image/image (23).jpeg',
    '/assets/image/image (24).jpeg',
    '/assets/image/image (25).jpeg',
    '/assets/image/image (26).jpeg',
    '/assets/image/image (27).jpeg',
    '/assets/image/image (28).jpeg',
    '/assets/image/image (29).jpeg',
    '/assets/image/image (30).jpeg',
  ];
  
  // Get a random background from the array
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  return backgrounds[randomIndex];
}

// Set the background when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const backgroundWrapper = document.querySelector('.background-wrapper');
  if (backgroundWrapper) {
    backgroundWrapper.style.backgroundImage = `url('${getRandomBackground()}')`;
  }
}); 