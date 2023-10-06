"use strict";

// Escribe aquí tu código
let i = 0;
const minute = 0;

for (i = 0; i <= 23; i++) {
  if (i >= 8 && i <= 22) {
    console.log("Son las " + i + ":" + minute + minute + ", CUCÚ!");
  } else {
    console.log("Son las " + i + ":" + minute + minute);
  }
}
