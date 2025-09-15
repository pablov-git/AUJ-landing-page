const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});