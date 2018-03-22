/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;
    Un panier est un tableau de mots;
    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré
    Important -> l'ordre n'a aucune importance
*/

// on crée un nouvel objet dont le prototype est
// un nouvel objet vide et on y ajoute une propriété
// 'p' qui vaut 42
/* o = Object.create({}, { p: { value: 42 } }); */


//  écrire votre code sous ce commentaire

const shoppingList = (tableauMot) => {
  let sacFruits = {};
  for (const iterator of tableauMot) {
    for (const jterator of iterator) {
      sacFruits[jterator] = sacFruits[jterator] ? ++sacFruits[jterator] : 1 ;
    }
  }
  return sacFruits;
}



/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

 
shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);


/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
