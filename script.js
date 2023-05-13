let intentos = 0;
const numeroAdivinar = Math.floor(Math.random() * 15) + 1;

for (let i = 0; i < 3; i++) {
  const numero = parseInt(prompt(`Tienes que adivinar el número que estoy pensando del 1 al 15, tienes ${3 - intentos} intentos`));
  intentos++;

  if (numero === numeroAdivinar) {
    alert(`¡Muy bien, solo has necesitado ${intentos} intentos.`);
    break;
  } else if (numero < numeroAdivinar) {
    alert('El número que has introducido es menor al que estoy pensando.');
  } else {
    alert('El número que has introducido es mayor al que estoy pensando.');
  }

  if (intentos === 3 && numero != numeroAdivinar) {
    alert(`Lo siento, no has adivinado el número, el numero era ${numeroAdivinar}.`);
  }
}


