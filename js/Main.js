const nav = document.getElementById("site-nav");
const nav_scrim = document.querySelector("#nav-scrim");
const navCheck = document.getElementById("site-nav-check-btn");
const navLinkContainer = document.getElementById("site-nav-links");
const screenWidth = window.innerWidth;
const headers = document.getElementsByTagName("h1", "h2", "h3", "h4", "h5");
window.addEventListener("resize", function () {
  if (window.innerWidth !== screenWidth) {
    // Do something
    if (screenWidth < 1993) {
      document.getElementById("banner-content").style.transform = "translateX(0)";
    }
  }
});


document.querySelector("#site-nav-check-btn").onclick = function () {
  new Animation("site-animations-show", "site-animations-hide");
  nav_scrim.style.display = "block";
};
document.querySelector("#site-nav-close-btn").onclick = function () {
  new Animation("site-animations-hide", "site-animations-show");
  nav_scrim.style.display = "none";
  setTimeout(() => {
    nav.classList.remove("site-animations-hide");
  }, 60);
};
class Animation {
  constructor(add, remove) {
    nav.classList.remove(remove);
    nav.classList.add(add);
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 10 && nav.classList.contains("site-animations-show")) {
    new Animation("site-animations-hide", "site-animations-show");
    nav.style.position = "static";
    nav_scrim.style.display = "none";
    document.documentElement.style.overflow = "auto";
    setTimeout(() => {
      nav.classList.remove("site-animations-hide");
    }, 60);
  }
});

// window.onscroll = function() {NavBar()};

// var navbar = document.getElementById("nav");
// var navbaroffset = navbar.offsetTop;

// function NavBar() {
//   if (window.pageYOffset >= 30) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   var difference = to - element.scrollTop;
//   var perTick = difference / duration * 10;

//   setTimeout(function() {
//       element.scrollTop = element.scrollTop + perTick;
//       if (element.scrollTop === to) return;
//       scrollTo(element, to, duration - 10);
//   }, 10);
// }
// scrollTo(document.body, headers.offsetTop, 600);
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (document.querySelector("#toc")) {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting === true) {
          document.querySelector(`main li a[href="#${id}"]`).parentElement.classList.add("active");
          document
            .querySelector(`main li a[href="#${id}"]`)
            .parentElement.classList.remove("decative");
        } else {
          document
            .querySelector(`main li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
          document
            .querySelector(`main li a[href="#${id}"]`)
            .parentElement.classList.add("decative");
        }
      });
    }
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("h1[id], h2[id], h3[id]").forEach((h1, h2, h3) => {
    observer.observe(h1, h2, h3);
  });
});
