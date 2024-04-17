export class SortAlgo {
  constructor(data) {
    this.input_array = this.getData(data);
    this.bubble_count = 0;
    this.insertion_count = 0;
    this.selection_count = 0;
    this.quick_count = 0;
    this.merge_count = 0;
    this.menu = [
      {
        id: 1,
        label: "Tri à bulle",
        sort: this.bubbleSort(),
        count: this.bubble_count,
      },
      {
        id: 2,
        label: "Tri par insertion",
        sort: this.insertionSort(),
        count: this.insertion_count,
      },
      {
        id: 3,
        label: "Tri par sélection",
        sort: this.selectionSort(),
        count: this.selection_count,
      },
      {
        id: 4,
        label: "Tri rapide",
        sort: this.quickSort(),
        count: this.quick_count,
      },
      {
        id: 5,
        label: "Tri par fusion",
        sort: this.mergeSort(),
        count: this.merge_count,
      },
    ];
  }

  // tri par bulle : O(n2)
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

  // tri par insertion : O(n2)
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

  // Tri par sélection : O(n2)
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

  // Tri par fusion
  mergeSort() {}

  /// HELPERS
  printMenu() {
    this.menu.forEach((e) => {
      console.log(`${e.id}. ${e.label}`);
    });
  }
  // afficher les comparaisons
  printStats(id = false) {
    if (id) {
      this.printStatsItem(id);
    } else {
      this.menu.forEach((m) => {
        this.printStatsItem(m.id);
      });
    }
  }

  // Lancer le tri et afficher les stats
  printStatsItem(id) {
    let menu = this.menu[id - 1];
    if (menu) {
      let sort = menu.sort;
      console.log(`${menu.label}: ${menu.count} comparaisons [${sort}]`);
    } else {
      console.log(`Aucun tri ne correspond au menu ${id}.`);
    }
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
