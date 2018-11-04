const {
    send
} = require('micro');
const {
    url
} = require('url');
let visitas = {};

/**
 * ¡Hola Andinistas!
 * En este ejercicio deberán darle un poco de vida a su microservicio, para ello deberán completar donde dice //TODO para que cada vez que vayamos a la ruta
 * http://localhost:3000/andes nos muestra lo siguiente: Visitaste esta página: x veces , donde x es la cantidad de veces que le "pegaron" a la ruta.
 * 
 * Una vez finalizado deberán ejecutar npm start ejercicio1.js , abrir el navegador en http://localhost:3000/andes y por cada post a esa url
 * deberá incrementar en 1 el valor de la visita
 */

module.exports = (request, response) => {
    let ruta = request.url;
    //TODO

    send(response, 200, `Visitaste esta pagina: ${visitas[ruta]} veces`);

}