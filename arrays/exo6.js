/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.prototype.sort
*/

const sortNumbers = (arr) => {

  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
        if(arr[i] > arr[j]){
          let tamp = arr[i];
          arr[i] = arr[j];
          arr[j] = tamp;
        }
    }    
  }
  return arr;
}

//  écrire votre code sous ce commentaire

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
