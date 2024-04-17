// SUJET 2 - EXO 6

// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

const data = [
  { array: [3, 7, 8, 3, 6, 1], result: [8, 6, 1] },
  { array: [3, 4, 5, 1, 7, 4, 5, 2], result: [7, 5, 2] },
  { array: [1, 4, 5, 8], result: [8] },
];

data.forEach((data) => {
  console.log(data.array);
  console.log(data.result);
  console.log(algo(data.array));
  console.log("-------");
});

// 1 seul passage sur la liste
function algo(array, result = []) {
  if (array.length == 1) {
    result.push(array[0]);
    return result;
  }
  // recherche du pivot (le plus grand){
  biggest = array.reduce((acc, val) => {
    return acc > val ? acc : val;
  });
  result.push(biggest);

  // garder la partie droite du tableau + recursion
  if (array.indexOf(biggest) == array.length - 1) {
    return result;
  }
  return algo(array.slice(array.indexOf(biggest) + 1), result);
}
