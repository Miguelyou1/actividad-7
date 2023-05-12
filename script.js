// Generar un número aleatorio entre 1 y 15
const numeroAleatorio = Math.floor(Math.random() * 15) + 1;

// Establecer el número máximo de intentos y el número actual de intentos
const numIntentosMaximo = 3;
let numIntentosActual = 0;

// Función para verificar si el usuario ha adivinado el número
function verificarAdivinanza(numeroAdivinanza) {
  numIntentosActual++;
  var men
  
  if (numeroAdivinanza === numeroAleatorio) {
    men = console.log("¡Felicidades! Has adivinado el número.");
    return true;
  } else if (numIntentosActual === numIntentosMaximo) {
    men = console.log("Lo siento, has perdido. El número era " + numeroAleatorio + ".");
    return false;
  } else {
    const pista = numeroAdivinanza > numeroAleatorio ? "menor" : "mayor";
    men = console.log("Incorrecto. El número que buscas es " + pista + " al que has introducido. Te quedan " + (numIntentosMaximo - numIntentosActual) + " intentos.");
    return false;
  }
}

// Pedir al usuario que adivine el número
console.log("Bienvenido al juego. Adivina un número entre 1 y 15. Tienes " + numIntentosMaximo + " intentos.");

while (numIntentosActual < numIntentosMaximo) {
  const adivinanza = parseInt(prompt("Intento #" + (numIntentosActual + 1) + ":"));
  
  if (verificarAdivinanza(adivinanza)) {
    break;
  }
}

