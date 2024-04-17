// Package File system de Node (synchrone)
// const fs = require('fs');

// For default exports you should use:
import * as fs from "fs";

import { SortAlgo } from "./SortAlgo.js";

// lire le tableau process de node
// contient tous les arguments du point d'entrée du programme.
// console.log(process.argv);

const fileName = process.argv[2];
let fileData;

// Méthode synchrone
try {
  const data = fs.readFileSync(fileName, "utf8");
  if (data.length == 0) {
    console.error("Empty File");
  }
  fileData = data;
} catch (error) {
  console.error(error.message);
}

console.log("****************");
console.log(fileName);
const SortedArray = new SortAlgo(fileData);
console.log(SortedArray.input_array);
console.log(SortedArray.sort());
console.log("-----------------");
SortedArray.printMenu();
SortedArray.printStats();
console.log("****************");