document.addEventListener("DOMContentLoaded", function () {
  // Scroll reveal
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Stat counters
  const statElements = document.querySelectorAll(".stat-value");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target || "0");
          const isCurrency = el.textContent.includes("€");
          const isPercent = el.textContent.includes("%");
          const duration = 1200;
          const start = performance.now();

          function animate(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(target * progress);
            if (isCurrency) {
              el.textContent = value.toLocaleString("fr-FR") + "€";
            } else if (isPercent) {
              el.textContent = value + "%";
            } else {
              el.textContent = value;
            }
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statElements.forEach((el) => counterObserver.observe(el));
});