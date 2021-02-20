const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

const buttonPrev = document.getElementById("carousel-button-prev");

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);

buttonPrev.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

// function moveToPrevSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition--;
//   }
// }
