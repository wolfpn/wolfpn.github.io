const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snow = [];

for (let i = 0; i < 120; i++) {
  snow.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snow.length; i++) {
    let s = snow[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
  }
  ctx.fill();
  update();
}

function update() {
  for (let i = 0; i < snow.length; i++) {
    let s = snow[i];
    s.y += s.d;
    if (s.y > canvas.height) {
      snow[i] = { x: Math.random()*canvas.width, y: 0, r: s.r, d: s.d };
    }
  }
}

setInterval(draw, 30);
