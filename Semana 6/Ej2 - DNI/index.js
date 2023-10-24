"use strict";

function validateDNI(dni) {
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  console.log(`Analizo ${dni} ...`);

  // compruebo que sea un string de 10 caracteres
  if (typeof dni !== "string" || dni.length !== 10) {
    // console.error(
    //   "ERROR: el DNI tiene que ser una cadena de texto de 10 caracteres (guión incluido)"
    // );
    throw new Error(
      "ERROR: el DNI tiene que ser una cadena de texto de 10 caracteres (guión incluido)"
    );
    return;
  }

  // separo el DNI por el guión
  const dniArray = dni.split("-"); // ["00000000", "T"]

  // compruebo que tenga uno y un sólo "-"
  if (dniArray.length !== 2) {
    // console.error("ERROR: el DNI tiene que llevar uno y un sólo '-'");
    throw new Error("ERROR: el DNI tiene que llevar uno y un sólo '-'");
    return;
  }

  const [numeros, letra] = dniArray;

  // compruebo que la primera parte sea un número de 8 cifras
  if (numeros.length !== 8 || isNaN(numeros)) {
    // console.error(
    //   "ERROR: la primera parte del DNI tiene que ser compuesta por 8 números"
    // );
    throw new Error(
      "ERROR: la primera parte del DNI tiene que ser compuesta por 8 números"
    );
    return;
  }

  // compruebo que el último carácter sea una letra
  if (!isNaN(parseInt(letra))) {
    // console.error("ERROR: el último carácter del DNI tiene que ser una letra");
    throw new Error(
      "ERROR: el último carácter del DNI tiene que ser una letra"
    );
    return;
  }

  // compruebo que la letra sea valida
  if (letra.toUpperCase() !== letras[numeros % 23]) {
    // console.error("ERROR: la letra del DNI no es valida");
    throw new Error("ERROR: la letra del DNI no es valida");
    return;
  }

  // DNI es valido
  console.log(`DNI valido`);
}

try {
  // dni valido
  validateDNI("00000000-T");

  // descomentar y comprobar los errores
  validateDNI("00000000-TT");
  validateDNI("00000000TT");
  validateDNI("00000A00-T");
  validateDNI("00000000-9");
  validateDNI("00000000-A");
} catch (error) {
  console.error(error.message);
}
