const items = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));

// Таймер до 31 декабря
const endDate = new Date('December 31, 2025 23:59:59').getTime();
const timer = document.getElementById('timer');

setInterval(() => {
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff <= 0) {
    timer.innerHTML = "Акция завершена";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${d}д ${h}ч ${m}м ${s}с`;
}, 1000);
