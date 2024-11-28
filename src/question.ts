import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function question(questionText: string) {
  return new Promise<string>((resolve) => rl.question(questionText, resolve));
}

async function questionFloat(questionText: string) {
  return new Promise<string>((resolve) =>
    rl.question(questionText, resolve)
  ).then((value) => parseFloat(value ?? ""));
}

function closeReadLine() {
  rl.close();
}

export { question, questionFloat, closeReadLine };
