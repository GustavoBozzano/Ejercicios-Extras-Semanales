"use strict";

function myFuncion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10);
      if (random >= 5) {
        resolve(`Todo bien: ${random}`);
      } else {
        reject(`Tenemos un problema: ${random}`);
      }
    }, 2000);
  });
}

const myPromise = myFuncion();

// Escribe aquí tu código

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("¡Prueba completada!"));

