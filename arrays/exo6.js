/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.sort
*/

//  écrire votre code sous ce commentaire

const sortNumbers = (tableau) => {
  for (let index = 0; index < tableau.length; index++) {
    if (tableau[index] > tableau[index + 1]) {
      let pivot = tableau[index];
      tableau[index] = tableau[index + 1];
      tableau[index + 1] = pivot;
      sortNumbers(tableau);
    }
  }
  return tableau;
}

/*
  Test 1
  Résultat attendu : [2, 3, 4, 5]
*/
sortNumbers([4, 3, 5, 2]);


/*
  Test 2
  Résultat attendu : [-10, 2, 10, 28]
*/
sortNumbers([10, 2, 28, -10]);

/* DO NOT TOUCH */
module.exports = {
  sortNumbers: sortNumbers
}
