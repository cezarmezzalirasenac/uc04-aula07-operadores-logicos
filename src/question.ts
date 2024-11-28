import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (questionText: string) =>
  new Promise<string>((resolve) => rl.question(questionText, resolve)).finally(
    () => rl.close()
  );

const questionFloat = (questionText: string) =>
  new Promise<string>((resolve) => rl.question(questionText, resolve))
    .then((value) => parseFloat(value ?? ""))
    .finally(() => rl.close());

export { question, questionFloat };
