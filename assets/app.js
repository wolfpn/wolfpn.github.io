// Scroll reveal
(() => {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('show'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('show');
    }
  }, { threshold: 0.15 });
  els.forEach(el => obs.observe(el));
})();

// Progress bar
(() => {
  const bar = document.querySelector('.progress > i');
  if (!bar) return;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? (doc.scrollTop / max) : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  update();
  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
})();

// Mobile menu
(() => {
  const mnav = document.getElementById('mnav');
  const menuBtn = document.getElementById('menuBtn');
  const closeNav = document.getElementById('closeNav');
  if (!mnav || !menuBtn || !closeNav) return;

  const openMenu = () => {
    mnav.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mnav.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  closeNav.addEventListener('click', closeMenu);
  mnav.addEventListener('click', (e) => { if (e.target === mnav) closeMenu(); });
  document.querySelectorAll('.mclose').forEach(a => a.addEventListener('click', closeMenu));
})();

// Responsive defaults for accordions
(() => {
  const mq = window.matchMedia('(max-width: 520px)');

  const su = document.getElementById('suDetails');
  const acc = document.getElementById('articlesAcc');

  const apply = () => {
    if (su) {
      if (mq.matches) su.removeAttribute('open');
      else su.setAttribute('open', '');
    }
    if (acc) {
      if (mq.matches) acc.removeAttribute('open');
      else acc.setAttribute('open', '');
    }
  };

  apply();
  mq.addEventListener?.('change', apply);
})();

// iOS/Safari: make FAQ feel snappy on small screens
(() => {
  const faqMq = window.matchMedia('(max-width: 900px)');
  document.querySelectorAll('#faq details > summary').forEach((s) => {
    s.addEventListener('click', (e) => {
      if (!faqMq.matches) return;
      e.preventDefault();
      const d = s.parentElement;
      d.open = !d.open;
    });
  });
})();
