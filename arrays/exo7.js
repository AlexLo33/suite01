/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.prototype.split
*/

//  écrire votre code sous ce commentaire
const splitStr = (str, occurence) => {
  let tableau = [];
  let strChar = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] != occurence || index === str.lenght-1) {
      strChar = strChar + str[index];
    }
    else {
      tableau.push(strChar)
      strChar = "";
    }
  } 
  tableau.push(strChar) ;
  return tableau
}

/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
splitStr("06-20-42-18-54", "-");

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}
