function initSlider(container, options = {}) {
  const slideSelector  = options.slideSelector  ?? ".hero-slide";
  const activeClass    = options.activeClass    ?? "is-active";
  const intervalMs     = options.intervalMs     ?? 5200;

  const slides    = Array.from(container.querySelectorAll(slideSelector));
  const navEl     = container.querySelector(".hero-progress");
  const countEl   = container.querySelector(".hero-count");
  const btnPrev   = container.querySelector("[data-prev]");
  const btnNext   = container.querySelector("[data-next]");

  if (!slides.length) return;

  let current = slides.findIndex(s => s.classList.contains(activeClass));
  if (current === -1) current = 0;
  let timer = null;

  // cria barras de progresso dinamicamente
  const bars = slides.map((_, i) => {
    const bar = document.createElement("button");
    bar.className = "hero-bar" + (i === current ? " is-active" : "");
    bar.setAttribute("role", "tab");
    bar.setAttribute("aria-label", "Ver slide " + (i + 1));
    bar.addEventListener("click", () => goTo(i));
    navEl && navEl.appendChild(bar);
    return bar;
  });

  function updateCount() {
    if (countEl) countEl.textContent = (current + 1) + "/" + slides.length;
  }

  function goTo(n) {
    const next = (n + slides.length) % slides.length;
    slides[current].classList.remove(activeClass);
    bars[current].classList.remove("is-active");
    current = next;
    slides[current].classList.add(activeClass);
    bars[current].classList.add("is-active");
    updateCount();
    resetTimer();
  }

  if (btnPrev) btnPrev.addEventListener("click", () => goTo(current - 1));
  if (btnNext) btnNext.addEventListener("click", () => goTo(current + 1));

  // suporte a swipe no mobile
  let touchStartX = 0;
  container.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  container.addEventListener("touchend", e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());

  function start() { if (!timer) timer = setInterval(() => goTo(current + 1), intervalMs); }
  function stop()  { clearInterval(timer); timer = null; }
  function resetTimer() { stop(); start(); }

  updateCount();
  start();
}

function initAllSliders() {
  document.querySelectorAll("[data-slider]").forEach(el => initSlider(el));
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", initAllSliders)
  : initAllSliders();