
let currentIndex = 0;
const track = document.getElementById('track');
const slides = document.querySelectorAll('.slider-track img');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentIndex += direction;

  // Loop back to start or end
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Slide horizontally by multiples of 100%
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}