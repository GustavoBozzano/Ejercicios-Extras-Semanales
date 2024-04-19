# Ejercicios semana N°9 en SQL

## 1 - Creación de una BBDD
Confeccionar una base de datos a partir del siguiente análisis de requisitos:
- Se quiere diseñar una BBDD para almacenar todos los datos de un campeonato de fútbol sala que se organiza este año en la ciudad. Aquellos que quieran participar deberán formar un equipo: `nombre*`, `patrocinador`, `color de la 1ª camiseta*`, `color de la 2ª camiseta*` y `categoría*` (sub-18 o senior).
- De cada partido almacenaremos: el `resultado*`, qué `equipos jugaron*`, el `campo*`, el `arbitro*` y las `incidencias` (en caso de que no ocurran incidencias no se anotará nada). Además, los participantes deberán rellenar una ficha de suscripción con algunos datos personales: `nombre*`, `apellidos*`, `edad*`, `dirección` y `teléfono`.

Los elementos marcados con asterisco en el análisis de requisitos son obligatorios. Agregar las claves primarias, claves foráneas y campos de auditoría necesarios. Borrar las tablas antes de crearlas (siempre en el orden inverso al cual han sido creadas).

Una vez creada la base de datos con todas sus tablas:
- Insertar dos equipos en la misma categoría.
- Insertar cuatro usuarios: relaciona a dos usuarios con el primer equipo y los otros dos con el segundo.
- Insertar un partido.
- Hacer que el primer y el segundo equipo se enfrenten en el partido que se ha creado.
- Modificar el partido para añadir como resultado final 1-2. 
- Eliminar el atributo apellido de la tabla de participantes.
- Modificar el nombre de la columna teléfono en la tabla de participantes.
- Modificar el nombre y el teléfono del jugador con id 2.
- Eliminar a un jugador de cada equipo.
