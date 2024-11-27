// 2 - Escreva um programa que resolva o seguinte problema:
// uma cópia “xerox” custa R$ 0,25 por folha,
// mas acima de 100 folhas esse valor cai para R$ 0,20 por unidade.
// Dado o total de cópias, informe o valor a ser pago.

// ENTRADA
const numeroCopias = 99;

// PROCESSAMENTO
let valorTotal = 0;

// if (numeroCopias <= 100) {
//   valorTotal = numeroCopias * 0.25;
// } else {
//   valorTotal = numeroCopias * 0.2;
// }

if (numeroCopias > 100) {
  valorTotal = numeroCopias * 0.2;
} else {
  valorTotal = numeroCopias * 0.25;
}

// SAÍDA
console.log("O valor total para " + numeroCopias + " é R$ " + valorTotal);
