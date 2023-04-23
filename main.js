let button = document.getElementById("nav-checkbox");
let OpenC = document.querySelector(".nav-list");

button.addEventListener("click", Hmenu);
OpenC.addEventListener("click", Hmenu);

function Hmenu() {
  OpenC.classList.toggle("active");
}
