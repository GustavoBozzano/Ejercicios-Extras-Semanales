"use strict";

let i = 0;

// Armo los intervalos de tiempo con el incrementador
const timer1 = setInterval(() => i++, 1000);
const timer5 = setInterval(() => {
  console.log(`Valor del contador: ${i}`);
}, 5000);

// función para detener temporizador
function stopTemp(segundos) {
  clearInterval(timer1);
  clearInterval(timer5);
  console.log("STOP del ejercicio");
}

// Establezco tiempo arbitario en SEGUNDOS
const timeStop = 20;

// después de 20 segundos parar
setTimeout(() => {
  stopTemp(timeStop);
}, timeStop * 1000);
