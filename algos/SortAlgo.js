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
    let array = this.#copy(this.input_array);

    this.bubble_count = 0;
    for (let i = 1; i < array.length; i++) {
      // comparaison 2nd (j) avec le précédent (j-1)
      for (let j = 1; j < array.length; j++) {
        if (array[j] < array[j - 1]) {
          this.#swap(array, j, j - 1);
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
    let array = this.#copy(this.input_array);
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
    let array = this.#copy(this.input_array);
    this.selection_count = 0;
    for (let i = 0; i < array.length; i++) {
      let j = i + 1;
      while (j < array.length) {
        if (array[i] > array[j]) {
          this.#swap(array, i, j);
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
    let array = this.#copy(this.input_array);
    this.selection_count = 0;
    return this.#quickRecursive(array);
  }

  // Tri par fusion
  mergeSort() {
    let array = this.#copy(this.input_array);
    this.merge_count = 0;
    return this.#mergeRecursive(array);
  }

  /// HELPERS
  printMenu() {
    this.menu.forEach((e) => {
      console.log(`${e.id}. ${e.label}`);
    });
  }
  // afficher les comparaisons
  printStats(id = false) {
    if (id) {
      this.#printStatsItem(id);
    } else {
      this.menu.forEach((m) => {
        this.#printStatsItem(m.id);
      });
    }
  }

  // transformer les données string ou array
  getData(data) {
    data =  data ? data : [];
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
    return this.#copy(this.input_array).sort((a, b) => a * order - b * order);
  }

  // ******** Méthodes privées ************ //

  // tri fusion methode récursive
  #mergeRecursive(array) {
    // renvoyer le tableau si 1 valeur
    if (array.length <= 1) {
      return array;
    }
    this.merge_count += 1;
    // diviser le tableau en 2 par le milieu
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // refusionner les tableaux
    const fusion = (left, right) => {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    };

    // renvoi les tableau fusionnés
    return fusion(this.#mergeRecursive(left), this.#mergeRecursive(right));
  }

  // tri rapide méthode récursive
  #quickRecursive(array) {
    // renvoyer le tableau si 1 valeur
    if (array.length <= 1) {
      return array;
    }

    // Pivot et tableaux left et right
    const pivot = array[0];
    const left = [];
    const right = [];

    // valeur envoyé à left ou right par rapport au pivot
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
      this.quick_count += 1;
    }
    return [
      ...this.#quickRecursive(left),
      pivot,
      ...this.#quickRecursive(right),
    ];
  }

  // utilise push pour nouvel array car sinon le input_array est modifié avec sort sur array
  #copy(origin) {
    let copy = [];
    origin.forEach((e) => {
      copy.push(e);
    });
    return copy;
  }

  #swap(array, index_1, index_2) {
    let temp = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = temp;
  }

  // Lancer le tri et afficher les stats
  #printStatsItem(id) {
    let menu = this.menu[id - 1];
    if (menu) {
      let sort = menu.sort;
      console.log(`${menu.label}: ${menu.count} comparaisons [${sort}]`);
    } else {
      console.log(`Aucun tri ne correspond au menu ${id}.`);
    }
  }
}
