// Generar número aleatorio entre 1 y 15
const numeroAleatorio = Math.floor(Math.random() * 15) + 1;

// Definir número de intentos disponibles
const intentosMaximos = 3;
let intentosRestantes = intentosMaximos;

// Función para comprobar si el número es correcto
function comprobarNumero(numero) {
    if (numero === numeroAleatorio) {
      console.log("¡Felicidades! Has acertado el número.");
      return true;