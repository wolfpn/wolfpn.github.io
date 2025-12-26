const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = Array.from({length: 80}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,
  s: Math.random() + 0.5
}));

function drawSnow() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';

  snowflakes.forEach(f => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
    f.y += f.s;
    if (f.y > canvas.height) f.y = -5;
  });

  requestAnimationFrame(drawSnow);
}

drawSnow();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
