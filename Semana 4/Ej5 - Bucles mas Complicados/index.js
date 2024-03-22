"use strict";

// Escribe aquí tu código

for (let hora = 0; hora < 24; hora++) {
  let strHora = `Son las ${hora}:00`;
  if (hora >= 8 && hora <= 22) {
    strHora = strHora + "." + " CUCÚ!".repeat(hora % 12 === 0 ? 12 : hora % 12);
  }
  console.log(strHora);
}
