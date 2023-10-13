const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function generarCombinacionesDePizzas(pizzas) {
  const combinaciones = [];

  for (let i = 0; i < pizzas.length; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      combinaciones.push([pizzas[i], pizzas[j]]);
    }
  }

  return combinaciones;
}

const combinaciones = generarCombinacionesDePizzas(pizzas);

combinaciones.forEach((combinacion) => {
  console.log(combinacion[0] + " con " + combinacion[1]);
});
