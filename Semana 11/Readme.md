# Ejercicios de la semana N°11 con NodeJS y MySQL

## 1 - Argumentos
Crear un archivo llamado `arguments.js`. El programa debe aceptar los argumentos --dirname y --date:
- `node arguments.js --dirname`: imprime por consola la ruta absoluta al directorio donde se encuentra el archivo.
- `node arguments.js --time`: imprime por consola la hora actual en el formato hh:mm:ss.

Si se inserta un argumento no contemplado debe lanzarse un error con el mensaje: `El argumento "${argv}" no es válido`.

Ha de ser posible insertar los dos argumentos a la vez.

Colorear el contenido de los `console.log` de color azul y el contenido de los `console.error` de color rojo.

## 2 - Variables de entorno
Crear un fichero `.env` y añadir la variable de entorno `MODE`.

En un fichero `index.js` con la ayuda del módulo `dotenv`:
- Si `MODE` es igual a `development`, muestra: `"El modo activado es el de desarrollo"`.
- Si `MODE` es igual a `production`, muestra: `"El modo activado es el de producción"` .
- Si `MODE` no está establecida o tiene un valor diferente, muestra: `"Por favor, establece la variable de entorno MODE a 'development' o 'production'"`.

Hacer que `Git` ignore el fichero `.env` y la carpeta `node_modules`.

Crear un script personalizado con el nombre de `start` que ejecute el archivo `index.js` con Node. 
