document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("focus", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__link") || event.target.matches(".navbar__categories__list-item")) {
        var list = document.querySelectorAll(".navbar__category, .navbar__categories__header");
        for (var i = 0;i < list.length;i++) {
          if (list[i].dataset.slug === event.target.dataset.slug) {
            list[i].classList.add("active");
          } else {
            list[i].classList.remove("active");
          }
        }
      }
    }
  }, true);
  document.addEventListener("blur", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__link") || event.target.matches(".navbar__categories__list-item")) {
        var list = document.querySelectorAll(".navbar__category, .navbar__categories__header");
        for (var i = 0;i < list.length;i++) {
          list[i].classList.remove("active");
        }
      }
    }
  }, true);
  document.addEventListener("mousedown", function (event) {
    if (event.target.classList) {
      if (event.target.matches(".navbar__categories__header") || event.target.matches(".navbar__categories__list-item")) {
        var list = document.querySelectorAll(".navbar__category, .navbar__categories__header");
        for (var i = 0;i < list.length;i++) {
          if (list[i].dataset.slug === event.target.dataset.slug) {
            list[i].classList.toggle("active");
          } else {
            list[i].classList.remove("active");
          }
        }
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
            var list = document.querySelectorAll(".navbar__category, .navbar__categories__header");
            for (var i = 0;i < list.length;i++) {
              if (list[i].dataset.slug === event.target.dataset.slug) {
                list[i].classList.toggle("active");
              } else {
                list[i].classList.remove("active");
              }
            }
          }
        }
      }
    }
  }, false);
  document.getElementById("nav-toggle").addEventListener("click", function () {
    document.getElementById("nav-toggle").classList.toggle("active");
    document.getElementById("navbar").classList.toggle("active");
  });
  document.getElementById("nav-toggle").addEventListener("keydown", function (event) {
    var KEY_ENTER = 13;
    var KEY_SPACE = 32;
    switch (event.which) {
      case KEY_ENTER:
      case KEY_SPACE: {
        document.getElementById("nav-toggle").classList.toggle("active");
        document.getElementById("navbar").classList.toggle("active");
      }
    }
  });
});