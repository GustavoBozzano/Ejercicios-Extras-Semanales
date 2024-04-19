# Ejercicios de la semana N°15 con React y VITE

## 1 - Vite
Hacer que la aplicación muestre la imagen `charmander.png` que figura en la carpeta `public`.   

Crear un archivo `.env.local` con la variable `COMPANY_NAME` y el valor `HACKABOSS`. Haz que el valor de esa variable se muestre en un título principal dentro de la aplicación.

## 2 - Componentización
En la imagen de abajo se puede ver un post de Instagram. Diseñar la estructura de componentes que debería tener.
No hay que preocuparse por el CSS, simplemente dividir todo en los componentes que se crea necesario.
Tampoco preocuparse por replicar todo lo que figura en el post al pié de la letra, 
la única finalidad de este ejercicio es definir cuántos componentes se usarían para crear el post.
Por otro lado, el post tiene asociada una imagen. Parecen 4 imágenes pero no es así, digamos que es una imagen con cuatro viñetas,
pero todo forma parte de una misma imagen. No es necesario que se use una imagen real, simplemente usar una etiqueta `<img>` e 
inventar la ruta.
![image](https://github.com/GustavoBozzano/Ejercicios-Extras-Semanales/assets/144045426/5a1ddecb-7dc0-4f45-88e2-0b68ba34981e)
Crear los ficheros necesarios para estos componentes e importarlos unos dentro de otros para reflejar la estructura en la aplicación de React.

## 3 - Estilos básicos
En el componente principal `(App.jsx)` crear un único `<h1>` que cada vez que cargue la página tenga un color de fondo aleatorio diferente.

Crear un `<p>` con la clase `.importante`. Definir esa clase en un archivo CSS externo.
