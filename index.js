/** Ejemplo muy sencillo de uso de MICRO */

const {
    send
} = require('micro');

module.exports = (request, response) => send(response, 200, 'Hola Andinos, bienvenidos al mundillo de los microservicios');