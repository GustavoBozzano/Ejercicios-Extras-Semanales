# Ejercicios de la 4ta semana en JS

## 1 - Variables Basicas
Editar el archivo `index.js` para añadir tres variables:

- `nombre` de tipo String y con el valor "Marta"
- `edad` de tipo Number y con el valor 27
- `color` de tipo String y color "púrpura"

Después usar estas variables para que por la consola imprima exactamente este texto:

`"Hola, me llamo Marta, tengo 27 años y mi color favorito es el púrpura."`

## 2 - Random y condicionales
Editar el archivo `index.js` para:

- generar un número random entre 1 y 6  (simulamos el lanzamiento de un dado)
- guardar el número en la variable `numeroDado`
- Después, usar esta variable para que por la consola imprima, por ejemplo, el texto:

`"Avanza 1 casilla"`  ...¡Cuidado con el plural! Si sale 2 el texto sería:  `"Avanza 2 casillas"`

## 3 - Condicionales básicos
Editar el archivo `index.js` para añadir estas variables similares a las del ejercicio anterior:

- `nombre` de tipo String y con el valor "Marta"
- `edad` de tipo Number y con el valor 27

A continuación, crear los condicionales necesarios para imprimir por consola la frase correcta de la siguientes:

`A Marta le corresponde el descuento infantil (menores de 12 años)`

`A Marta le corresponde el descuento juvenil (menores de 30 años)`

`A Marta le corresponde el descuento de jubilados (mayores de 60 años)`

`A Marta no le corresponde ningún descuento`

## 4  - Bucles básicos
Editar el archivo `index.js` para crear un bucle que imprima en la consola una línea por cada hora del día en formato 24 horas, de 0:00 a 23:00:

- Si la hora es anterior a las 8 de la mañana o posterior a las 22 debe imprimir solo la información de la hora, por ejemplo: "Son las 3:00"
- Si la hora está entre las 8 y las 22 debe imprimir la información de la hora seguída de "CUCÚ!", por ejemplo "Son las 17:00, CUCÚ!"

## 5  - Bucles más complicados
Partiendo del código del ejercicio anterior, hacer que la cantidad de veces que aparezca "CUCÚ!" entre las 8 y las 22 sea correspondiente a la hora, por ejemplo a las 10 de la mañana debería poner:

`"Son las 10:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"`

Con una dificultad extra: el número de cucús debe ser siempre en correspondiente a las horas en formato 12h y no 24h, por lo que a las 5 de la tarde (17:00) debe poner solo 5 "CUCÚ!" y no 17:

`"Son las 17:00, CUCÚ! CUCÚ! CUCÚ! CUCÚ! CUCÚ!"`
