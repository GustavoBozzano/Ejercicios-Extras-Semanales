# Ejercicios de la 6ta semana en JS

## 1 - Mejores y peores equipos
Editar el archivo `index.js` para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.

El resultado que tiene que aparecer en la consola al ejecutarlo debe ser exactamente igual a este:
```
El mejor equipo es Toros Negros con un total de 28 puntos
El peor equipo es Ciervos Celestes con un total de 10 puntos
```

## 2 - DNI
En el archivo index.js hay una función que recibe un DNI y lo valida.

El Documento Nacional de Identidad de España (DNI) es el documento de identidad que se expide en España, cada DNI tiene un identificador único compuesto por un número de 8 cifras y una letra, por ejemplo: 99999999-R

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número mediante un sencillo algoritmo?

Para obtener la letra correspondiente a un número de DNI hay que obtener el resto de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el Array la letra será la correspondiente a ese índice:
```
const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
```
Hay que centralizar el sistema de errores (un único console.error). Si alguna de las comprobaciones falla, lanzar un error de JavaScript  que diga `"ERROR:"` y el mensaje correspondiente.

Usar throw, el objeto Error de JavaScript y try/catch

## 3 - Temporizadores
Crear un programa que incremente cada segundo un contador (incremento de 1) y que imprima en la consola cada 5 segundos el valor del contador.

Ejemplo de lo que debería imprimir en la consola:
```
Valor del contador: 5
Valor del contador: 10
...
```
Luego, crear una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario. Esta función recibirá un parámetro que corresponderá al tiempo en segundos. Cuando pare el temporizador, debe mostrar un mensaje en la consola indicando que se paró.

## 4 - Promesas
En el archivo `index.js` hay una función que crea y devuelve una promesa.

Gestiona la promesa con then/catch/finallypara hacer:
- un console.log en el caso de que la promesa se resuelva correctamente
- un console.error en caso de que la promesa no se resuelva correctamente
- siempre un console.log con el mensaje "¡Prueba completada!"

Ejemplo de lo que debería imprimir en la consola (promesa resuelta correctamente):
```
Todo bien: 6
¡Prueba completada!
```
Ejemplo de lo que debería imprimir en la consola (promesa no resuelta correctamente):
```
Tenemos un problema: 1
¡Prueba completada!
```
