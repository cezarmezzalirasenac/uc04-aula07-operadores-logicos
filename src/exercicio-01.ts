// 1 - Escreva um programa que receba um número
// e diga se ele está no intervalo entre 100 e 200.

// ENTRADA
const numero = 200;

let estaNoIntervalo = false;

// PROCESSAMENTO
if (numero >= 100) {
  if (numero <= 200) {
    estaNoIntervalo = true;
  } else {
    estaNoIntervalo = false;
  }
} else {
  estaNoIntervalo = false;
}

// SAÍDA
// SE ESTA OU NÃO NO INTERVALO ENTRE 100 E 200
if (estaNoIntervalo) {
  console.log(numero + " está no intervalo entre 100 e 200");
} else {
  console.log(numero + " não está no intervalo entre 100 e 200");
}
