"use stricts";

// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

// Escribe aquí tu código

// Declaro variables en Entorno Global
let winnerPoints = 0;
let looserPoints = 0;
let winnerTeam = "";
let looserTeam = "";

// Recorro el Array
const group = firstRound.map((points) => {
  let totalPoints = points.scores.reduce((a, b) => a + b, 0);

  // Verifico el mayor de la suma de los puntajes, asigno valor a las variables globales
  if (totalPoints > winnerPoints) {
    winnerPoints = totalPoints;
    winnerTeam = points.team;
    looserPoints = winnerPoints;

    // Verifico el menor de la suma de los puntajes, asigno valor a las variables globales
  } else if (totalPoints < looserPoints) {
    looserPoints = totalPoints;
    looserTeam = points.team;
  }
});

// Muestro en pantalla ambos carteles con variables alcance global, fuera de la Function.
console.log(
  `El mejor equipo es ${winnerTeam} con un total de  ${winnerPoints} puntos`
);
console.log(
  `El peor equipo es ${looserTeam} con un total de ${looserPoints} puntos`
);
