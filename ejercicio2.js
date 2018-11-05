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

/*
* @post localhost:3000
* @body  {
*       "operacion":"division",
*       "operador1": 5,
*       "operador2": 1
*   }
*
*/
module.exports = async (request, response) => {
    let resultado = 0;
    let body = await microBody(request)
    let operacion = body.operacion;

    switch (body.operacion) {
        case 'suma':
            resultado = body.operador1 + body.operador2;
            break;
        case 'resta':
            resultado = body.operador1 - body.operador2;
            break;
        case 'multiplicacion':
            resultado = body.operador1 * body.operador2;
            break;
        case 'division':
            resultado = body.operador2 === 0 ? 'error, no se puede dividir por cero!' : body.operador1 / body.operador2;
            break;
        default:
            resultado = `--> La operación no está correctamente definida. Elegir: suma, resta, operacion o division`;
            break;
    }
    send(response, 200, `El resultado de la operación ${body.operacion} es igual a ${resultado}`);
    //return `El resultado de la operación ${body.operacion} es igual a ${resultado}`;

}