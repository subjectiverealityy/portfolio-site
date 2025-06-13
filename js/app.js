// MENU

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show')
});

// CAROUSEL

const carousel = document.querySelectorAll('.carousel');

carousel.forEach((carousel) => {
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('dragging');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // This is for adjusting scroll speed
  carousel.scrollLeft = scrollLeft - walk;
});

// This adds touch support
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
}, { passive: true });

carousel.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
}, { passive: true });
});
