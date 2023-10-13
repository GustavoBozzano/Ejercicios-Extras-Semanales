"use strict";

const people = [
  {
    name: "Maria",
    age: 20,
  },
  {
    name: "Ana",
    age: 14,
  },
  {
    name: "Luis",
    age: 16,
  },
  {
    name: "Pepe",
    age: 35,
  },
  {
    name: "Manuel",
    age: 50,
  },
  {
    name: "Teresa",
    age: 12,
  },
  {
    name: "Daniel",
    age: 27,
  },
  {
    name: "Irene",
    age: 23,
  },
  {
    name: "Alex",
    age: 10,
  },
];

// Escribe aquí tu código

function arrayPeople(name, age) {
  for (const key in people) {
    if (people[key].age > 18) {
      console.log(`${people[key].name} es mayor de edad`);
    } else {
      console.log(`${people[key].name} es menor de edad`);
    }
  }
}
arrayPeople(people);
