const {
    send
} = require('micro');
const microBody = require('micro-body')

/**
 * ¡Hola Andinistas!
 * En este ejercicio deberán crear una calculadora básica (suma, resta, multiplicación y división), para ellos deberán enviar en un POST la siguiente información:
 * {operacion: value, operador1: value, operador2: value}
 * Ejemplo: {operacion: suma, operador1: 2, operador2: 3}
 * El microservicio deberá realizar la operación y devolverá el tipo de operación junto con el resultado obtenido.
 */

// AYUDA: Debe usar micro-body para poder realizar el POST

module.exports = async (request, response) => {
    let resultado = 0;
    let operacion = '';
    //TODO

    return `El resultado de la operación ${info.op} es igual a ${resultado}`;

}