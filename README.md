# AppScriptHandleErrors
Clase que permite manejar errores en proyectos AppScript

> puede incluir esta librería en cualquier proyecto de tipo AppScript

## Ejemplos:

```javascript
// Instanciar la clase HandleErrors:
let handleError = new HandleErrors(
	true, // => logError  = valor booleano. Si es true indica que debe notificar via email de los errores
	'example@gmail.com', // => logEmail = string que corresponde al correo a donde se deben enviar los errores
	'My App', // => nameApp = El nombre del proyecto AppScript
	'https://script.google.com/home/projects/abcd123/edit', // => urlApp = La url del proyecto AppScript
	'My Name', // => authorName = El nombre del autor del proyecto AppScript
	'https://ocancelada.dev', // => authorLink = la url de la web del autor del proyecto
	);

// Manejar los posibles errores de la funcion DriveApp.getFolderById
handler.handling(DriveApp.getFolderById, 'asd454')
// => { status: null, content: { [Exception: Unexpected error while getting the method or property getFolderById on object DriveApp.] name: 'Exception' } }
```

## Métodos

| # | Nombre | Parámetros | Descripción
-- | -- | -- | -- |
| 1 | <strong style="color: #CBC700;">handling</strong> | func: function, ...args:any | Maneja los errores de la funcion que pasamos como 1 parámetro. Si la función requiere argumentos, los pasamos como parametros del propio método <i>handling</i>.

