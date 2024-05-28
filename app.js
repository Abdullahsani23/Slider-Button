// let currentIndex = 0;

// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// document.getElementById('prev').addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
//     updateSlidePosition();
// });

// document.getElementById('next').addEventListener('click', () => {
//     currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
//     updateSlidePosition();
// });

// function updateSlidePosition() {
//     const slider = document.querySelector('.slider');
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }
 
// simple js otherway code
let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide'); // Get all slide elements




function showPreviousSlide() {
    currentIndex--; // Decrease the index
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Go to the last slide if we are at the first slide
    }
    updateSlidePosition();
}
document.getElementById('prev').addEventListener('click', showPreviousSlide);

function showNextSlide() {
    currentIndex++; // Increase the index
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Go to the first slide if we are at the last slide
    }
    updateSlidePosition();
}
document.getElementById('next').addEventListener('click', showNextSlide);

function updateSlidePosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the slider
}
