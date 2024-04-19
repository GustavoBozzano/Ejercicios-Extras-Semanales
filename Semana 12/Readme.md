# Ejercicios de la semana N°12 con APIs

## 1 - API sencilla
Crear un API que haga uso de los siguientes endpoints:
- POST a `/messages`: permite crear un mensaje.
- GET a `/messages/:messageId`: retorna información de un mensaje contreto.

Ha de tener un middleware de ruta no encontrada. Los mensajes se almacenarán en el fichero `messages.json` dentro de la carpeta data que se encontrará en la raíz del servidor. Utilizar el módulo `fs/promises` para leer y actualizar la información del fichero cuando se considere oportuno. Para crear un mensaje el cliente deberá enviar a través del body el texto del mensaje.

Por ejemplo, si en `messages.json` hubiera 3 mensajes debería verse tal que así:
```
[ 
    { 
        "id": "29b4bb68-9c87-4386-a73e-8d4e54d0edcc",        
        "text": "Primer mensaje"    
    },    
    {        
        "id": "489c925a-bd28-4b1c-b6db-75b112b221d3",        
        "text": "Segundo mensaje"    
    },    
    {        
        "id": "34923def-cb0f-4d0d-9620-fbc0cc042928",        
        "text": "Tercer mensaje"    
    }
]
```
Para asignar el ID a cada mensaje, utilizar la función `randomUUID` del módulo `crypto` que se incluye de forma nativa en Node.

## 2 - Manejo de errores
Tomando como base el API creada en el apartado anterior:
- Crear un middleware de manejo de errores.
- Lanzar un error en el middleware que permite crear un nuevo mensaje si falta algún campo antes de crear el mensaje.
- Lanzar un error en el middleware que retorna información de un mensaje concreto si no se encuentra el mensaje con el ID establecido.
- Utilizar el bloque `try catch` y la función `next` para enviar el error al middleware de errores.


