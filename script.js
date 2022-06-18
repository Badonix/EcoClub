const hamBurger = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeBtn = document.getElementById("close");
const invisible = document.querySelector(".invisible");

if (hamBurger) {
  hamBurger.addEventListener("click", function () {
    nav.classList.add("active");
    invisible.classList.add("big");
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    nav.classList.remove("active");
    invisible.classList.remove("big");
  });
}

invisible.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    invisible.classList.remove("big");
  }
});
