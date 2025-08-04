let currentSlide = 0;
let financeSlide = 0;
let outcomeSlide = 0;

function changeSlide(n) {
  const slides = document.querySelectorAll("#workshop .slide");
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  const carousel = document.querySelector("#workshop .carousel-inner");
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlideFinance(n) {
  const slides = document.querySelectorAll("#finance-carousel img");
  financeSlide = (financeSlide + n + slides.length) % slides.length;
  const carousel = document.querySelector("#finance-carousel");
  carousel.style.transform = `translateX(-${financeSlide * 100}%)`;
}

function changeSlideOutcome(n) {
  const slides = document.querySelectorAll("#outcome-carousel .slide");
  outcomeSlide = (outcomeSlide + n + slides.length) % slides.length;
  const carousel = document.querySelector("#outcome-carousel");
  carousel.style.transform = `translateX(-${outcomeSlide * 100}%)`;
}
