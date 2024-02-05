import { Pelota } from "./pelota.js";

let pelotas = [];
let pelotasX = [];
let pelotasY = [];
let existentes = false;

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

function random(min, max) {
  let numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}

// Función que devuelve un color aleatorio
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function loop() {
  let posicion = 0;
  if (!existentes) {

    for (let i = 0; i < 25; i++) {
      let tamano = random(10, 20);
      let x = random(0 + tamano,canvas.width - tamano);
      let y = random(0 + tamano,canvas.height - tamano);
      let vX = random(-7, 7);
      let vY = random(-7, 7);
      
      pelotas.push(new Pelota(x, y, vX, vY, randomRGB(), tamano));
    }
    
    existentes = true;
    
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  pelotas.forEach(pelota => {

    pelota.pinta(ctx);
    pelota.movimiento()
    pelotasX[posicion] = pelota.x;
    pelotasY[posicion] = pelota.y;
    posicion++;
    
  });

  requestAnimationFrame(loop);

}
loop()
