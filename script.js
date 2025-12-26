const c = document.getElementById("snow");
const ctx = c.getContext("2d");

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let snow = Array.from({length: 120}, () => ({
  x: Math.random()*c.width,
  y: Math.random()*c.height,
  r: Math.random()*3+1,
  d: Math.random()+1
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle="white";
  snow.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fill();
    s.y+=s.d;
    if(s.y>c.height) s.y=0;
  });
}
setInterval(draw,30);
