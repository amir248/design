// Анимация появления при скролле
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".card, .hero, h2");
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
});
