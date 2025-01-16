function getRandomBackground() {
  // Add your background images to this array
  const backgrounds = [
    '/assets/images/image (1).jpeg',
    '/assets/images/image (2).jpeg',
    '/assets/images/image (3).jpeg',
    '/assets/images/image (4).jpeg',
    '/assets/images/image (5).jpeg',
    '/assets/images/image (6).jpeg',
    '/assets/images/image (7).jpeg',
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