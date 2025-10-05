const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

// Abrir modal
if (openModalBtn && modal) {
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("is-visible");
  });
}

// Cerrar modal
if (closeModalBtn && modal) {
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("is-visible");
  });
}

// Cerrar modal al hacer clic fuera del contenido
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("is-visible");
    }
  });
}

// Menú hamburguesa
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
