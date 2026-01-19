(() => {
  // Reveal on scroll
  const els = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  // Update year in footer
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = String(new Date().getFullYear());

  // Make entire cards clickable when data-href is provided
  document.addEventListener('click', (ev) => {
    const card = ev.target.closest('[data-href]');
    if (!card) return;
    const a = ev.target.closest('a,button');
    if (a) return;
    const href = card.getAttribute('data-href');
    if (href) window.location.href = href;
  });
})();
