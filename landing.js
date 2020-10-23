const menu = document.querySelector(".hamburger__container");
const closeMenu = document.querySelector(".close__container");
const openToggle = document.querySelector(".links__containers");
const hero = document.querySelectorAll(".hero_image");
const interval = 4000;

// when the page loads
window.addEventListener("DOMContentLoaded", () => {
  initSlider();
});
// hamburger menu toggle
menu.addEventListener("click", () => {
  openToggle.classList.add("links__close");
});

closeMenu.addEventListener("click", () => {
  openToggle.classList.remove("links__close");
});

//hero sider functionality
const slider = [...hero];
// current position of images
let current = 0;
// hide image
function hideImage(image) {
  image.forEach((img) => {
    img.style.display = "none";
  });
}

// display first image
function firstImage() {
  // hideImage(slider);
  slider[0].style.display = "block";
}

// get next images
function nextSlider() {
  hideImage(slider);
  slider[current + 1].style.display = "block";
  current++;
  if (current === slider.length - 1) {
    current = 0;
  }
}

// hero slider init
function initSlider() {
  hideImage(slider);
  firstImage();
}

// set interval
setInterval(nextSlider, interval);
