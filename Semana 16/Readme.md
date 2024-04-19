# Ejercicios de la semana N°16 con React y VITE

## 1 - Componentes, props y children
hacer que la aplicación de React muestre un listado de fichas de cada persona con su información extraída de ese fichero `users.json`.
Usa las `props` para enviar la información que consideres oportuna a los componentes hijos.

La estructura de componentes que hay que crear debe ser esta:
- UserList
  - User
    - UserPicture
    - UserName
    - UserLocation

Como extra en la ficha de cada una de las personas hay que poner un indicador visual que indique si esa persona es menor de edad.
Está la fecha de nacimiendo en la propiedad "dob" en el objeto de cada persona del JSON .

## 2 - Estado
Este ejercicio es similar al anterior pero en lugar de cargar los datos de un fichero externo JSON en este caso esos datos están guardados en el estado del componente.

En el componente principal de la aplicación (`App`) crear una variable de estado usando el hook useState que contenga este valor inicial:
```
[{
  id: 1
  task: 'Ir a la compra',
  done: false
},
{
  id: 2,
  task: 'Hacer ejercicios de react',
  done: true
}]
```
Crear y añadir a `App.js` un componente llamado `TaskList` y hay que pasarle el estado anterior como `prop`.

El componente `TaskList` debe renderizar un `<ul>` y debe mostrar cada uno de los elementos del array del estado de App como un `<li>`. 
Los elementos que tengan la propiedad `done` con valor `true` deben mostrar el texto tachado.

## 3 - Modificando el estado
Partiendo del código que se ha generado en el ejercicio anterior:
1) Añadir al componente `App` un nuevo componente llamado `NewTask` que muestre un formulario con un `<input type="text">` y un `<button>` que al hacer click añada una nueva tarea al estado del componente principal de `App.js` con el texto del `input`. El `input` tiene que permitir un máximo de 100 caracteres.
2) Añadir a cada uno de los `<li>` del componente `TaskList` del ejercicio anterior un checkbox (`<input type="checkbox" />`) que al hacer click modifique la propiedad `done` del elemento correspondiente de la lista de tareas que está en el estado del componente principal `App`.
