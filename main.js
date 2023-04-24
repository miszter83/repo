let button = document.getElementById("nav-checkbox");
let OpenC = document.querySelector(".nav-list");

button.addEventListener("change", Hmenu);
OpenC.addEventListener("click", Hmenu);

OpenC.addEventListener("click", CheckReset);

function CheckReset() {
  button.checked = !button.checked;
}

function Hmenu() {
  OpenC.classList.toggle("active");
}


let scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
