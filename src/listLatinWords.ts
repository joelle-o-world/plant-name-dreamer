import * as realLatin from "./real-latin.json";
import fs from "fs";
import path from "path";

const wordRecords = realLatin["*"][0]["a"]["*"];
const words = wordRecords
  .map((record) => record.title)
  .map((word: string) => word.toLowerCase())
  .filter((word) => /^\w+$/.test(word));

fs.writeFileSync(
  path.resolve(__dirname, "./latin-words.json"),
  JSON.stringify(words, null, 2)
);
