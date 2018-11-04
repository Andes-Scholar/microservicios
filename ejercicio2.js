const {
    send
} = require('micro');

/**
 * ¡Hola Andinistas!
 * En este ejercicio deberán crear una calculadora básica (suma, resta, multiplicación y división), para ellos deberán enviar en el request un objeto de la forma:
 * {operacion: value, operador1: value, operador2: value}
 * Ejemplo: {operacion: suma, operador1: 2, operador2: 3}
 * El microservicio deberá realizar la operación y devolver tipo de operación junto con el resultado obtenido.
 */

// AYUDA: Busque como funciona micro-query

module.exports = async (request, response) => {
    let resultado = 0;
    let operacion = '';
    //TODO

    send(response, 200, `El resultado de la operación ${operacion} es: ${resultado}`);

}