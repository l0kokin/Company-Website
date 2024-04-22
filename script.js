// Burger menu in mobile
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

// Card slider
const cardsContainer = document.querySelector("#cards");
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const cardWidth = document.querySelector(".card--item").offsetWidth;
let currentPosition = 0;

arrow2.addEventListener("click", function () {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    slideCards();
  }
});

arrow1.addEventListener("click", function () {
  const maxPosition = -((cardsContainer.childElementCount - 1) * cardWidth);
  if (currentPosition > maxPosition) {
    currentPosition -= cardWidth;
    slideCards();
  }
});

function slideCards() {
  cardsContainer.style.transition = "transform 0.3s ease";
  cardsContainer.style.transform = `translateX(${currentPosition}px)`;

  setTimeout(() => {
    cardsContainer.style.transition = "none";
  }, 300);
}
