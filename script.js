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
    } else {
        intentosRestantes--;
        console.log(`Lo siento, el número es ${numero < numeroAleatorio ? "mayor" : "menor"} al que has introducido. Te quedan ${intentosRestantes} intentos.`);
        return false;
    }
}
// Pedir al usuario que adivine el número hasta que acierte o se acaben los intentos
while (intentosRestantes > 0) {
    const numeroUsuario = parseInt(prompt(`Introduce un número entre 1 y 15. Te quedan ${intentosRestantes} intentos.`));
    if (comprobarNumero(numeroUsuario)) {
        break;
    }
}
// Si se han agotado los intentos, informar al usuario de que ha perdido
if (intentosRestantes === 0) {
    console.log(`Lo siento, has perdido. El número era ${numeroAleatorio}.`);
}
