import * as readline from "readline";

const makeQuestion = (question: string): string => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let textEntered = "";
  rl.question(question, (text: string) => {
    textEntered = text ?? "";
    rl.close();
  });

  return textEntered;
};

let senha = "12345";
let senhaValida = false;
let tentativas = 0;
do {
  const senhaDigitada = makeQuestion("Informe a senha");
  if (senha === senhaDigitada) {
    senhaValida = true;
  }
  tentativas++;
} while (tentativas < 3 && !senhaValida);

console.log("teste");
