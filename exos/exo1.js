// SUJET 1
// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
//Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

const data1 = [
  { array: [10, 15, 3, 7], k: 17, result: true },
  { array: [1, 8, 10, 21], k: 19, result: false },
];

function algo(array, k) {
  let result = false;
  array.forEach((n1, i) => {
    array.forEach((n2, j) => {
      if (n1 + n2 == k) {
        result = true;
      }
    });
  });
  return result;
}

data1.forEach((data) => {
  console.log(data.array);
  console.log(data.k);
  console.log(algo(data.array, data.k));
  console.log("-------");
});
