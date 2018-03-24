/*
  Entraînement Array.prototype.every

  Ecrire une fonction "verifyHumans"
  qui permet de vérifier si toutes les personnes présentes font au moins 1m60

  Prototype:
      bool verifyHumans(_arr);
*/

//  écrire votre code sous ce commentaire

const verifyHumans = _arr => _arr.every( _arr => _arr.size >= '1m60');

/*
  Test 1
  Résultat attendu : true
*/

verifyHumans([{name: 'John', size: '1m80'}, {name: 'Patrick', size: '1m75'}, {name: 'Marie', size: '1m68'}]);

/*
  Test 2
  Résultat attendu : false
*/

verifyHumans([{ name: 'John', size: '1m80' }, { name: 'Nicolas', size: '1m55' }, { name: 'Marie', size: '1m68' }]);

/* DO NOT TOUCH */
module.exports = {
  verifyHumans: verifyHumans
}
