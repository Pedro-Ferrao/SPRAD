function initSlider(container, options = {}) {
  const slideSelector = options.slideSelector ?? ".hero-slide";
  const dotSelector = options.dotSelector ?? ".hero-dot";
  const activeSlideClass = options.activeSlideClass ?? "is-active";
  const activeDotClass = options.activeDotClass ?? "is-active";
  const intervalMs = options.intervalMs ?? 5200;

  const slides = Array.from(container.querySelectorAll(slideSelector));
  const dots = Array.from(container.querySelectorAll(dotSelector));
  if (slides.length === 0) return;

  let current = Math.max(
    0,
    slides.findIndex((s) => s.classList.contains(activeSlideClass))
  );
  if (current === -1) current = 0;

  function goTo(n) {
    const next = (n + slides.length) % slides.length;
    slides[current].classList.remove(activeSlideClass);
    if (dots.length) dots[current]?.classList.remove(activeDotClass);

    current = next;
    slides[current].classList.add(activeSlideClass);
    if (dots.length) dots[current]?.classList.add(activeDotClass);
  }

  if (dots.length) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-slide"));
        if (!Number.isNaN(idx)) goTo(idx);
      });
    });
  }

  let timer = null;
  function start() {
    if (timer) return;
    timer = window.setInterval(() => goTo(current + 1), intervalMs);
  }
  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  start();
}

function initAllSliders() {
  document.querySelectorAll("[data-slider]").forEach((el) => initSlider(el));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllSliders);
} else {
  initAllSliders();
}