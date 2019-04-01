document.addEventListener("DOMContentLoaded", function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }
  document.addEventListener("focus", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__link") || event.target.matches(".navbar__categories__list-item")) {
        showNavbar(event.target.dataset.slug);
      }
    }
  }, true);
  document.addEventListener("blur", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__link") || event.target.matches(".navbar__categories__list-item")) {
        hideNavbar();
      }
    }
  }, true);
  document.addEventListener("mousedown", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__categories__header") || event.target.matches(".navbar__categories__list-item")) {
        toggleNavbar(event.target.dataset.slug);
      }
    }
  }, false);
  document.addEventListener("keydown", function (event) {
    var KEY_ENTER = 13;
    var KEY_SPACE = 32;
    switch (event.which) {
      case KEY_ENTER:
      case KEY_SPACE: {
        if (event.target.classList) {
          if (event.target.matches(".navbar__categories__header") || event.target.matches(".navbar__categories__list-item")) {
            toggleNavbar(event.target.dataset.slug);
          }
        }
      }
    }
  }, false);
  document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("nav-toggle").classList.toggle("nav-toggle--active");
    document.getElementById("navbar").classList.toggle("navbar--active");
  }, false);
  document.getElementById("nav-toggle").addEventListener("keydown", function (event) {
    var KEY_ENTER = 13;
    var KEY_SPACE = 32;
    switch (event.which) {
      case KEY_ENTER:
      case KEY_SPACE: {
        document.getElementById("nav-toggle").classList.toggle("nav-toggle--active");
        document.getElementById("navbar").classList.toggle("navbar--active");
      }
    }
  }, false);
});
function showNavbar(slug) {
  var list = document.getElementsByClassName("navbar__category");
  for (var i = 0;i < list.length;i++) {
    if (list[i].dataset.slug === slug) {
      list[i].classList.add("navbar__category--active");
    } else {
      list[i].classList.remove("navbar__category--active");
    }
  }
}
function hideNavbar() {
  var list = document.getElementsByClassName("navbar__category");
  for (var i = 0;i < list.length;i++) {
    list[i].classList.remove("navbar__category--active");
  }
}
function toggleNavbar(slug) {
  var list = document.getElementsByClassName("navbar__category");
  for (var i = 0;i < list.length;i++) {
    if (list[i].dataset.slug === slug) {
      list[i].classList.toggle("navbar__category--active");
    } else {
      list[i].classList.remove("navbar__category--active");
    }
  }
}