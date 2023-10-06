"use strict";

// Escribe aquí tu código
const nombre = "Marta";
const edad = 27;

if (edad < 12) {
  console.log(
    "A " + nombre + " le corresponde el descuento infantil (menores de 12 años)"
  );
} else if (edad < 30) {
  console.log(
    "A " + nombre + " le corresponde el descuento juvenil (menores de 30 años)"
  );
} else if (edad > 60) {
  console.log(
    "A " +
      nombre +
      " le corresponde el descuento de juvilados (mayores de 60 años)"
  );
} else console.log("A " + nombre + " no le corresponde ningún descuento.");
