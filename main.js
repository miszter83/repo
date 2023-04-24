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
