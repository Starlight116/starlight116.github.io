// Description: This file contains the javascript code for the carousel slider.
// Author: Starlight
// Updated 20/03/2025

const slidesContainer = document.getElementById("carrousel");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("fleche-gauche");
const nextButton = document.getElementById("fleche-droite");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});