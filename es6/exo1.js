/*
  Entraînement Array.prototype.map

  Ecrire une fonction "getAllLastnames"
  qui retourne un tableau contenant la liste des prénoms des utilisateurs
  passés en paramètre.

  Prototype:
      arr getAllLastnames(arr);
*/

//  écrire votre code sous ce commentaire

// solution 1 sans map
/* 
const getAllLastnames = (arr) => {
  let result = [];
  for (const iterator of arr) {
    (iterator.name === undefined) ? result.push("") 
                                  : result.push(iterator.name)
  }
  return result
};
 */
// solution avec map
const getAllLastnames = arr => arr.map( arr => arr.name === undefined ? ""
                                                                      : arr.name
);


/*
  Test 1
  Résultat attendu : ["John", "Judith", "Julia"]
*/

getAllLastnames([{ name: 'John' }, { name: 'Judith' }, { name: 'Julia' }]);


/*
  Test 2
  Résultat attendu : ["Marc", "", "Robert"]
*/

getAllLastnames([{ name: 'Marc' }, { age: 18 }, { name: 'Robert' }]);


/* DO NOT TOUCH */
module.exports = {
  getAllLastnames: getAllLastnames
}
