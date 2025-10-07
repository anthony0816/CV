// Funcionalidad para el botón de imprimir
document.getElementById("print-btn").addEventListener("click", function () {
  window.print();
});

// Efecto de carga suave
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(function () {
    document.body.style.opacity = "1";
  }, 100);
});

// Efecto hover para los items de experiencia
const experienceItems = document.querySelectorAll(
  ".experience-item, .project-item"
);
experienceItems.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(10px)";
    this.style.transition = "transform 0.3s ease";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0)";
  });
});

// Animación para las skill tags
const skillTags = document.querySelectorAll(".skill-tag");
skillTags.forEach((tag, index) => {
  tag.style.opacity = "0";
  tag.style.transform = "translateY(20px)";

  setTimeout(() => {
    tag.style.transition = "all 0.5s ease";
    tag.style.opacity = "1";
    tag.style.transform = "translateY(0)";
  }, index * 100);
});
