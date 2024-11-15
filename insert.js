function triParInsertion(arr) {
  let compteur1 = 0; // Compteur pour suivre les itérations de la boucle externe
  let compteur2 = 0; // Compteur pour suivre les itérations de la boucle interne

  for (let i = 1; i < arr.length; i++) {
    compteur1++;
    let clé = arr[i];
    let j = i - 1;

    // Déplacer les éléments de arr[0...i-1] qui sont plus grands que clé
    // d'une position vers la droite
    while (j >= 0 && arr[j] > clé) {
      compteur2++;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = clé;
  }

  console.log("Tableau trié :", arr);
  console.log("Nombre d'itérations de la boucle externe :", compteur1);
  console.log("Nombre d'itérations de la boucle interne :", compteur2);
}

// Exemple d'utilisation
let tableau = [12, 11, 13, 5, 6];
triParInsertion(tableau);
//console.log(tableau);
