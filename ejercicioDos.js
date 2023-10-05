console.log ("Hola Santiago");

let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, callback) => {
  return callback (suma, resta, multiplicacion, division);
};