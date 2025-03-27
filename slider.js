let index = 0;

function moveSlide(direction) {
const carrousel = document.querySelector('.carrousel');
const slides = document.querySelectorAll('.carrousel img');
const totalSlides = slides.length;

// Largeur d'une slide (inclut le gap)
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(carrousel).gap);

// Met à jour l'index
index += direction;

if (index < 0) {
index = totalSlides - 1; // Retourne à la dernière slide
} else if (index >= totalSlides) {
index = 0; // Retourne à la première slide
}

// Applique la transformation
const offset = index * slideWidth;
carrousel.style.transform = `translateX(-${offset}px)`;
}