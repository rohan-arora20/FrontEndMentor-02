"use strict";
let nav = document.querySelector(".nav");
let btnNavigation = document.querySelector(".btn__navigation");
let backgroundBlur = document.querySelector(".background__blur");
let btnNavigationContent = document.querySelector(".btn__navigation--img");

btnNavigation.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  backgroundBlur.classList.toggle("hidden");
  if (nav.classList.contains("nav-open")) {
    btnNavigationContent.src = "./images/icon-close-menu.svg";
  } else {
    btnNavigationContent.src = "./images/icon-menu.svg";
  }
});

nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    e.target?.dataset.dropdown ||
    e.target.closest(".nav__link")?.dataset.dropdown
  ) {
    e.target
      .closest(".nav__item")
      .querySelector(".nav__subitems")
      .classList.toggle("enable-dropdown");
    let dropdown = e.target.closest(".nav__link").querySelector("span");
    if (dropdown.dataset.arrow === "down") {
      dropdown.dataset.arrow = "up";
      dropdown.classList.toggle("nav__link--dropdown-down");
      dropdown.classList.toggle("nav__link--dropdown-up");
    } else {
      dropdown.dataset.arrow = "up";
      dropdown.classList.toggle("nav__link--dropdown-down");
      dropdown.classList.toggle("nav__link--dropdown-up");
    }
  }
});
