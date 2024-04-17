// SUJET 1 - EXO 5
// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
//Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

const data = [
  { array: [10, 15, 3, 7], k: 17, result: true },
  { array: [1, 8, 10, 21], k: 19, result: false },
  { array: [1, 8, 10, 21], k: 9, result: true },
  { array: [21], k: 9, result: true },
];

data.forEach((data) => {
  console.log(data.array);
  // console.log(data.k);
  console.log(algo(data.array, data.k));
  console.log("-------");
});

// 1 seul passage
function algo(array, k, current = 0, comp = 1, result = false) {
  if (current == array.length || comp == array.length -1) {
    return result;
  }
  if (array.length<= 1){
    return result;
  }
    let prec = current - comp;
    let suiv = current + comp;
    // faire un tableau cyclique
    if (current == 0) {
      prec += array.length;
    }
    if (current == array.length - 1) {
      suiv -= array.length;
    }
    // somme avec suivant et précédant
    // console.log(array[prec]+ ' - ' + array[i] + ' - ' + array[suiv]);
    if (array[current] + array[prec] == k || array[current] + array[suiv] == k) {
      return true;
    }else{
      if (prec -1 <= array.length-1){
        // récursif : somme avec suivants et précédants
        return algo(array, k, current, comp + 1, result);
      }
    }

  if (result){
    return result;
  }else{
    // recursif : avancer dans le tableau
   return algo(array, k, current + 1, comp, result);
  }
}
