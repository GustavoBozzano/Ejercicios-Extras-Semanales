"use strict";

// Escribe aquí tu código
let i = 0;
const minute = 0;
const buho = " CUCÚ!";
let sumaBuho24 = "";
let sumaBuho12 = "";

for (i = 0; i <= 23; i++) {
  if (i >= 8 && i <= 12) {
    console.log(`Son las ${i}:${minute}${minute},${sumaBuho24}`);
  } else if (i >= 13 && i <= 22) {
    sumaBuho12 += buho;
    console.log(`Son las ${i}:${minute}${minute},${sumaBuho12}`);
  } else {
    console.log(`Son las ${i}:${minute}${minute}`);
  }
  sumaBuho24 += buho;
}
