export class AlgoSort {
  constructor(data) {
    this.input_array = this.getData(data);
    this.bubble_count = 0;
    this.insertion_count = 0;
    this.selection_count = 0;
    this.quick_count = 0;
  }

  // tri par bulle
  // https://www.youtube.com/watch?v=uJLwnsLn0_Q
  bubbleSort() {
    let array = this.copy(this.input_array);

    this.bubble_count = 0;
    for (let i = 1; i < array.length; i++) {
      // comparaison 2nd (j) avec le précédent (j-1)
      for (let j = 1; j < array.length; j++) {
        if (array[j] < array[j - 1]) {
          this.swap(array, j, j - 1);
          this.bubble_count += 1;
        }
      }
      this.bubble_count += 1;
    }
    return array;
  }

  // tri par insertion
  // https://www.youtube.com/watch?v=nKzEJWbkPbQ&t=398s
  insertionSort() {
    let array = this.copy(this.input_array);
    let temp;
    this.insertion_count = 0;
    for (let i = 1; i < array.length; i++) {
      const value = array[i];
      let j = i - 1;
      // comparaisons des previous items
      while (j >= 0 && array[j] > value) {
        // move ->
        array[j + 1] = array[j];
        j--; // on se déplace vers <-
        this.insertion_count += 1;
      }
      array[j + 1] = value;
      this.insertion_count += 1;
    }
    return array;
  }

  // Tri par sélection
  // https://www.youtube.com/watch?v=g-PGLbMth_g
  selectionSort() {
    let array = this.copy(this.input_array);
    this.selection_count = 0;
    for (let i = 0; i < array.length; i++) {
      let j = i + 1;
      while (j < array.length) {
        if (array[i] > array[j]) {
          this.swap(array, i, j);
          this.selection_count += 1;
        }
        j++;
      }
      this.selection_count += 1;
    }
    return array;
  }

  // Tri rapide
  // https://www.youtube.com/watch?v=Hoixgm4-P4M

  quickSort() {
    let array = this.copy(this.input_array);
    this.selection_count = 0;
    this.quickRecursive(array, 0, array.length);
    return array;
  }

  /// HELPERS
  // afficher les comparaisons
  showStats() {
    let bubble = this.bubbleSort();
    console.log(`Tri à bulle: ${this.bubble_count} comparaisons [${bubble}]`);

    let insertion = this.insertionSort();
    console.log(
      `Tri par insertion: ${this.insertion_count} comparaisons [${insertion}]`
    );

    let selection = this.selectionSort();
    console.log(
      `Tri par sélection: ${this.selection_count} comparaisons [${selection}]`
    );

    let quick = this.quickSort();
    console.log(`Tri rapide: ${this.quick_count} comparaisons [${quick}]`);
  }

  // utilise push pour nouvel array car sinon le input_array est modifié avec sort sur array
  copy(origin) {
    let copy = [];
    origin.forEach((e) => {
      copy.push(e);
    });
    return copy;
  }

  // transformer les données string ou array
  getData(data) {
    let array = [];
    if (data.length && typeof data == "string") {
      array = data.split(" ");
    }
    if (!data.length) {
      console.error("Tableau vide");
      return [];
    }
    array = array
      .filter((value, i) => {
        if (Number.isNaN(value)) {
          console.error(`Donnée du tableau non valide. index: ${i} effacé`);
        } else {
          return !Number.isNaN(parseInt(value));
        }
      })
      .map((e) => parseInt(e));
    return array;
  }

  // tri croissant 1  / décroissant -1
  sort(order = 1) {
    return this.copy(this.input_array).sort((a, b) => a * order - b * order);
  }

  private;
  swap(array, index_1, index_2) {
    let temp = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = temp;
  }

  quickRecursive(array, low, high) {
    if (array[low] < array[high]) {
      let pivot_index = partition(array, low, high);
      this.quickRecursive(array, low, pivot_index);
      this.quickRecursive(array, pivot_index + 1, high);
    }
  }

  partition(array, low, high) {
    let pivot = array[low];
    let leftwall = low;
    for (let i = low + 1; i < high; i++) {
      if (array[i] < pivot) {
        this.swap(array, i, leftwall);
        leftwall += 1;
      }
    }
    // swap le pivot à droite
    this.swap(array, low, leftwall);
    return leftwall;
  }
}
