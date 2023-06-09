// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly`
  );
};

// Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
// const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  // menuToggleIcon.classList.toggle("activated");
  navbarToggle.classList.toggle("active");
};

// menuToggleIcon.addEventListener("click", toggleMenu);

const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", toggleMenu);

/**
 * Scroll top button
 */
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  const togglescrollTop = function () {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };
  window.addEventListener("load", togglescrollTop);
  document.addEventListener("scroll", togglescrollTop);
  scrollTop.addEventListener(
    "click",
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}

// Open/Close search form popup

const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () =>
  searchFormContainer.classList.add("activated")
);

formCloseBtn.addEventListener("click", () =>
  searchFormContainer.classList.remove("activated")
);

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchFormContainer.classList.remove("activated");
});

// Switch theme/add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
