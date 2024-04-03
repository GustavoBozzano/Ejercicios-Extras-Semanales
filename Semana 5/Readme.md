# Ejercicios de la 5ta semana de JS con Arrays

## 1 - Recorriendo arrays
Editar el archivo `index.js` para crear un código que recorra (usando un bucle) el array de personas e imprima en la consola esto:
```
Maria es mayor de edad
Ana es menor de edad
Luis es menor de edad
Pepe es mayor de edad
Manuel es mayor de edad
Teresa es menor de edad
Daniel es mayor de edad
Irene es mayor de edad
Alex es menor de edad
```
Para hacer esto, crear una función que en cada iteración reciba dos valores `name`, `age` y que se encargue de imprimir en la consola la cadena de texto solicitada para cada persona del array people.

## 2 - Duplicados en Arrays
Editar el archivo `index.js` para crear una función que reciba un Array como parámetro y retorne otro Array con los contenidos del Array inicial pero eliminando los duplicados.

## 3 - Combinaciones de pizzas
Una pizerría ofrece pizzas "mitad y mitad".

Cada mitad debe corresponderse a una pizza de su catálogo, pero éste cambia constantemente, por lo que el número de combinaciones posibles también.

Completar el fichero `index.js` donde hay una función que recibe el catálogo de pizzas y debería retornar un array con la lista de combinaciones posibles.

Tener en cuenta esto:

Seguramente en la primera aproximación devuelva pizzas con la misma combinación pero al revés (ej: carbonara y barbacoa, barbacoa y carbonara) pero ¡son la misma pizza!. Debemos evitar eso.

De la misma manera, si las dos mitades son iguales (ej: carbonara y carbonara) no sería una pizza "mitad y mitad", sino una pizza normal.

Valoraremos una solución simple a los dos problemas anteriores, ¡la solución es más sencilla de lo que pueda parecer!.

El resultado debe ser este:
```
[
  "margarita y cuatro quesos",
  "margarita y prosciutto",
  "margarita y carbonara",
  "margarita y barbacoa",
  "margarita y tropical",
  "cuatro quesos y prosciutto",
  "cuatro quesos y carbonara",
  "cuatro quesos y barbacoa",
  "cuatro quesos y tropical",
  "prosciutto y carbonara",
  "prosciutto y barbacoa",
  "prosciutto y tropical",
  "carbonara y barbacoa",
  "carbonara y tropical",
  "barbacoa y tropical",
];
```
## 3 - Método map de los arrays
Editar el archivo `index.js` para crear un código que, utilizando el método map, genere un nuevo array a partir del array `rickandmortyCharacters`

Cada personaje del nuevo array tendrá solo las propiedades `name`, `status`, `species` y `gender`.

Imprimir en la consola el nuevo array.

El resultado debe ser este:
```
[
  {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    gender: 'Female'
  },
  {
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    gender: 'Male'
  }
]
```
## 3 - Método filter de los arrays
Partiendo del código del ejercicio anterior, hacer que solo se impriman los personajes vivos (status: "Alive")

El resultado debe ser este:
```
[
  {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  },
  {
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male'
  },
  {
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    gender: 'Female'
  }
]
```
