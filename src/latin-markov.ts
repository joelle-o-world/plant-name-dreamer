// @ts-ignore
import Markov from "node-markov";
import latinWords from "./latin-words.json";

const Latin = new Markov(5);
for (let word of latinWords) Latin.feed(word);

function generateWord() {
  let word = Latin.walk("", 30);
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function plantName() {
  for (let i = 0; i < 200; ++i) {
    if (Math.random() < 0.75) return `${generateWord()} ${generateWord()}`;
    else return `${generateWord()} ${generateWord()} ${generateWord()}`;
  }
}

for (let i = 0; i < 1000; ++i) console.log(plantName());
