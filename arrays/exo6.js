/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.prototype.sort
*/

//  écrire votre code sous ce commentaire

const sortNumbers = (tableau) => {
  for (let index = 0; index < tableau.length; index++) {
    if (tableau[index] > tableau[index + 1]) {
      let pivot = tableau[index];
      tableau[index] = tableau[index + 1];
      tableau[index + 1] = pivot;
    }
    for (let jndex = 0; jndex < tableau.length; jndex++) {
      if (tableau[jndex] > tableau[jndex + 1]) {
        pivot = tableau[jndex];
        tableau[jndex] = tableau[jndex + 1];
        tableau[jndex + 1] = pivot;
        sortNumbers(tableau);
      }
    }
  }
  return tableau;
}

/*
  Test 1
  Résultat attendu : [2, 3, 4, 5]
*/
console.log(sortNumbers([4, 3, 5, 2,3,56,3,6,5,2,8])
);


/*
  Test 2
  Résultat attendu : [-10, 2, 10, 28]
*/
sortNumbers([10, 2, 28, -10]);

/* DO NOT TOUCH */
module.exports = {
  sortNumbers: sortNumbers
}
