/*
    Ecrire une fonction "isEven",
    qui prend un paramètre un nombre,
    et qui retourne un nombre:
        - 1 si le nombre est pair
        - 0 si le nombre est impair

*/

//  écrire votre code sous ce commentaire

function isEven(nb) {
  if (nb % 2 === 0 ) {
    return 1;
  }
  return 0;
}

console.log(isEven(5))
/*
  Test 1
  Résultat attendu : 1
*/

isEven(6);

/*
  Test 2
  Résultat attendu : 0
*/

isEven(5);

/* DO NOT TOUCH */
module.exports = {
  isEven: isEven
}
