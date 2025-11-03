// Your code here.
// Select the scrollable container
const slider = document.querySelector('.items');

let isDown = false;      // Track if mouse is pressed
let startX;              // Starting X position
let scrollLeft;          // Initial scroll position

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;  // Mouse X position relative to container
  scrollLeft = slider.scrollLeft;        // Remember the current scroll position
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Exit if mouse not pressed
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  slider.scrollLeft = scrollLeft - walk;
});
