// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
  this.classList.toggle('active');
});

// Image Slider Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentSlide = 0;
let slideInterval;

// Initialize slider
function initSlider() {
  showSlide(currentSlide);
  startSlideShow();
}

// Show specific slide
function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Show current slide
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Start automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

// Pause slideshow when hovering
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', startSlideShow);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(index);
    startSlideShow();
  });
});

// Arrow navigation
nextArrow.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  startSlideShow();
});

prevArrow.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  startSlideShow();
});

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlider);

// FAQ accordion (from previous version)
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  });
});