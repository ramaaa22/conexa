Hola a todos! Es un gusto para mí compartirles la resolución del ejercicio propuesto.

Sitio de la API: https://back-conexa.herokuapp.com/
Sitio del repositorio: https://github.com/ramaaa22/conexa

En el archivo Conexa.postman_collection.json se encuentran los endpoints solicitados.
Tanto para obtener los posts como las photos, es necesario validarse y es necesario el token.

Por razones de tiempo, hay un único usuario que está almacenado como variable de entorno
email:"ramiro.boza@hotmail.com"
password:"123456"

Desde postman, esto puede enviarse en el body como json a la dirección https://back-conexa.herokuapp.com/users/login

Se utilizo jsonwebtoken para la utilización de tokens, express-validator para validaciones, mocha y chai para la realización de test unitarios.

Abriendo el proyecto, y parados en la carpeta backend, si se ejecuta "npm test", se corren los tests realizados.

Me focalicé en lo que es el backend tal cual hablé con Joaquín. EL frontend está comenzado pero prefiero enviar esta parte antes por una cuestión de enviar lo antes posible la parte que me había comprometido.

De todos modos, en el siguiente repositorio, se encuentra la parte del front:
https://github.com/ramaaa22/conexa-front

Cualquier duda, a disposición!

