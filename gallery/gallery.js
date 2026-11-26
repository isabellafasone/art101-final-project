
const currentIndexes = {
eytan: 0,
dylan: 0
};

function moveSlide(artist, direction) {
const track = document.getElementById(artist + '-track');
const slides = track.querySelectorAll('img');
const totalSlides = slides.length;

currentIndexes[artist] += direction;

if (currentIndexes[artist] < 0) {
currentIndexes[artist] = totalSlides - 1;
} else if (currentIndexes[artist] >= totalSlides) {
currentIndexes[artist] = 0;
}

track.style.transform = `translateX(-${currentIndexes[artist] * 100}%)`;
}
