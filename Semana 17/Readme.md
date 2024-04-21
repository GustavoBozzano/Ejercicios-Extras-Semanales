# Ejercicios de la semana N°17 con React y VITE

## 1 - Side Effects
El objetivo de este ejercicio es conseguir que las tareas persistan aunque recarguemos la página. 
Para ello, hay que guardarlas en el `localStorage`.

Realizar lo siguiente:
- Cada vez que el estado de tasks es modificado, se deberá guardar las tareas actualizadas en el `localStorage`.
  Para esto hay que utilizar `useEffect`.
- Cuando se crea el estado, debe tomar como valor inicial las tareas guardadas en el `localStorage`, si es que hay. 
  Si no hay tareas en el `localStorage`, iniciar el estado con un array vacío.

## 2 - Custom Hooks
- Hay un contador que se puede incrementar y decrementar haciendo click en los respectivos botones. 
  Su valor nunca puede ser inferior a cero.
- Cada vez que el valor del contador cambia, hay un `useEffect` que actualiza el título de la ventana del navegador por el texto "El contador tiene un valor de X"
  (siendo X el valor actual del contador).

Introducir toda la lógica relacionada con el contador (el estado, las funciones de incrementar/disminuir y el `useEffect`) en un `customHook` 
llamado `useCounter`.

Al llamar al hook, se deberá poder enviarle un argumento con el valor inicial del estado del contador.
Si no se envía ningún argumento, el valor inicial será 0.

## 3 - Datos asíncronos
Es una aplicación que tiene un estado de `posts` y un componente `PostList` que pinta dichos posts.
El estado es un array vacío, por lo que no se muestra ningún post.
El primer objetivo de este ejercicio es conseguir cargar los posts de la siguiente API: [<https://jsonplaceholder.typicode.com/guide/ >].
Es una API "fake", se comporta como una real, pero los endpoints que permiten crear/modificar o borrar posts realmente no lo hacen, aunque responden como si lo hicieran.

Se Deberá crear un `useEffect` en el componente `App` que se encargue de hacer una petición `GET` a [https://jsonplaceholder.typicode.com/posts] y,
si la respuesta de la API es correcta, cargar los posts en el estado.

Una vez que se consiga lo anterior, el segundo objetivo va a ser crear nuevos posts.
Ya hay un componente `PostForm` con un formulario con los campos necesarios.
La tarea es hacer que, al entregarse el formulario, se envíen los datos del nuevo post a la API y, si la respuesta es correcta,
añadir el nuevo post al estado de posts (al principio del array para que aparezca de primero en la lista).

Bonus opcionales:  
- Mientras la petición inicial que carga los posts se esté realizando, la App debe mostrar un indicador de que está cargando,
si se usa una imagen similar a estas mejor: [https://samherbert.net/svg-loaders/]
- Lo mismo para el formulario, cuando el formulario envíe los datos debe mostrar un indicador de que está haciendo ese proceso.

## 4 - API de Contexto
El objetivo de este ejercicio es conseguir tener un `estado` "global" que almacene el tema de la aplicación (`light` o `dark`).
Al hacer click en el `button` del componente `ThemeSwitcher`, debe alternarse el tema.
El componente `Content` debe cambiar su estilo visual acorde a la selección de tema.

Para conseguir esto, almacenar dicho estado en un `Context` y dale acceso a todos los componentes de tu aplicación con un `Provider`. 
Para acceder al estado almacenado en el contexto, deberás utilizar `useContext`.

El resultado debe ser como este:
[https://context-example-berto.vercel.app/]
