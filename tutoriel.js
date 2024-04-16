// lire le tableau process de node
// contient tous les arguments du point d'entrée du programme.
console.log(process.argv);

// Package File system de Node (synchrone)
const fs = require('fs');

const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    // console.log(data);
} catch (error) {
    console.error(error.message);
}

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
      console.error(error.message);
      return ;
  }
  console.log(data);
});
