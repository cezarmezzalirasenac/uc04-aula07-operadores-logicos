// 4 - Escreva um programa que leia três números do teclado
// e os imprima na tela na ordem inversa da entrada.

// while - enquanto
let repeticoes = 1;
while (repeticoes < 10) {
  console.log("Sou eu de novo");
  // repeticoes = repeticoes + 1;
  repeticoes++; //autoincremento
}

// do/while - faca/enquanto
repeticoes = 10;

console.log("DO/WHILE");

do {
  console.log("Sou eu de novo +" + repeticoes);
  repeticoes--; //autodecremento
} while (repeticoes > 0);

// validação de senhas
const senha = "senhasegura";
let tentativas = 0;
let senhaValida = false;
const senhas = ["senhasegura", "nadaaver", "senhasegura"];

do {
  if (senhas[tentativas] === senha) {
    senhaValida = true;
    console.log("Acertou bicho!");
  } else {
    console.log("a senha pertence ao fulano");
  }
  tentativas++;
} while (tentativas < 3 && !senhaValida);

const numeros: number[] = [10, 4, 22];
// for - para
for (let indice = 0; indice < numeros.length; indice++) {
  console.log(numeros[indice]);
}

let indice = numeros.length - 1;
while (indice >= 0) {
  console.log(numeros[indice]);
  indice = indice - 1;
}

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

numeros.reverse();
console.log(numeros);
