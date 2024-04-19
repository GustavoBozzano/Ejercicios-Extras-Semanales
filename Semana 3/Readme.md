# Ejercicios de la 3ra semana en HTML y CSS

## 1 - Grid
Aplicar Grid al elemento `<main>` para que sea responsive y cambie el número de columnas mostradas por fila según el tamaño (sin utilizar media queries). Asignar un mínimo de `300px` de ancho a cada columna y un espaciado entre las cards de `20px`.

## 2 - Grid areas
Utilizar mobile first y comienzar con un layout como el mostrado en la siguiente imagen:
![image](https://github.com/GustavoBozzano/Ejercicios-Extras-Semanales/assets/144045426/56be62e4-2b02-432c-b32a-c2d506683e8d)

Para pantallas menores a 600px:

- Solo hay una columna que ocupa todo el ancho.
- El header tendrá un alto de 6.5rem
- La barra de navegación tendrá un alto de 4.5rem
- Las dos secciones se repartirán el espacio sobrante a partes iguales
- El footer tendrá un alto de 4rem

Utilizar `media query` a partir de un ancho mínimo de 600px para cambiar el layout al mostrado en la imagen:
![image](https://github.com/GustavoBozzano/Ejercicios-Extras-Semanales/assets/144045426/f4ac3aac-ad50-41f8-ae6b-d41487611824)

Para pantallas mayores o iguales a 600px:

- El header seguirá teniendo un alto de 6.5rem y ocupará todo el ancho de la cuadrícula
- La barra de navegación seguirá teniendo un alto de 4.5rem y ocupará todo el ancho de la cuadrícula
- La barra lateral tendrá un ancho de 12.5rem
- Las secciones seguirán repartiéndose a partes iguales el espacio sobrante en vertical, y cada una ocupará todo el espacio sobrante en horizontal.
- El footer seguirá teniendo un alto de 4rem y ocupará todo el ancho de la cuadrícula.

## 3 - Animación
Crear una animación que muestre un estado de `"cargando..."`para el documento HTML. Usar la regla @keyframes de CSS para crear una animación que cause que el elemento se expanda y se contraiga.

## 4 - Posicionamiento absoluto
crear una página web (index.html) compuesta de 3 `article` sin contenido dentro de un section.

También crear el archivo CSS (styles.css) para estilizar el documento.

Los 3 article tienen atributos comunes:

- Ancho y alto de 200px
- Un borde de 5px solid black
- Una sombra de 10px 10px 5px gray

Cada article debe tener un color diferente. El segundo article debe posicionarse 200px más abajo que el primero, y el tercer article debe estar alineado horizontalmente con el primero, tal como se muestra en la imagen de ejemplo:
![image](https://github.com/GustavoBozzano/Ejercicios-Extras-Semanales/assets/144045426/4995e0eb-df4f-44bd-8b31-0820480562c0)
