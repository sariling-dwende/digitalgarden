function getRandomBackground() {
  // Add your background images to this array
  const backgrounds = [
    './images/image (1).jpeg',
    './images/image (2).jpeg',
    './images/image (3).jpeg',
    './images/image (4).jpeg',
    './images/image (5).jpeg',
    './images/image (6).jpeg',
    './images/image (7).jpeg',
    './images/image (8).jpeg',
    './images/image (9).jpeg',
    './images/image (10).jpeg',
    './images/image (11).jpeg',
    './images/image (12).jpeg',
    './images/image (13).jpeg',
    './images/image (14).jpeg',
    './images/image (15).jpeg',
    './images/image (16).jpeg',
    './images/image (17).jpeg',
    './images/image (18).jpeg',
    './images/image (19).jpeg',
    './images/image (20).jpeg',
    './images/image (21).jpeg',
    './images/image (22).jpeg',
    './images/image (23).jpeg',
    './images/image (24).jpeg',
    './images/image (25).jpeg',
    './images/image (26).jpeg',
    './images/image (27).jpeg',
    './images/image (28).jpeg',
    './images/image (29).jpeg',
    './images/image (30).jpeg',
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