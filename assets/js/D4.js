/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1, l2) {
  const area = l1 * l2;
  return area;
}

console.log("ES.1.1", area(3, 6));
console.log("ES.1.2", area(2, 10)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum(a, b) {
  const sum = a + b;

  if (a === b) {
    const crazySum = sum * 3;
    return crazySum;
  }

  return sum;
}

console.log("ES.2.1", crazySum(3, 6));
console.log("ES.2.2", crazySum(3, 3)); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(a) {
  const absDifference = Math.abs(a - 19);

  if (a > 19) {
    const crazyDiff = absDifference * 3;
    return crazyDiff;
  }

  return absDifference;
}

console.log("ES.3.1", crazyDiff(1));
console.log("ES.3.2", crazyDiff(20)); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }

  return false;
}

console.log("ES.4.1", boundary(10));
console.log("ES.4.2", boundary(20));
console.log("ES.4.3", boundary(50));
console.log("ES.4.4", boundary(100));
console.log("ES.4.5", boundary(120));
console.log("ES.4.6", boundary(400)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* function epify(string) {
  const modifiedString = "EPICODE " + string;
  if (string.toLowerCase().startsWith("epicode")) {
    return string;
  }
  return modifiedString;
}

console.log("ES.5.1", epify("è un'ottima esperienza formativa"));
console.log("ES.5.2", epify("EPICODE è un'ottima esperienza formativa")); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* function check3and7(a) {
  if (a % 3 === 0 || a % 7 === 0) {
    return true;
  }

  return false;
}

console.log("ES.6.1", check3and7(9));
console.log("ES.6.2", check3and7(14));
console.log("ES.6.3", check3and7(8)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* function reverseString(string) {
  const characterArray = string.split("");
  const reverseArray = [];

  for (let i = string.length - 1; i >= 0; i--) {
    const character = characterArray[i];
    reverseArray.push(character);
  }

  const reverseString = reverseArray.join("");
  return reverseString;
}
console.log("ES.7.1", reverseString("ciao"));
console.log("ES.7.2", reverseString("Mi chiamo Giorgia")); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  const stringWords = string.split(" ");
  const finalString = [];

  for (let i = 0; i < stringWords.length; i++) {
    const word = stringWords[i];
    const firstLetter = word[0];
    const upperFirst = firstLetter.toUpperCase();
    const upperWord = upperFirst + word.slice(1);
    finalString.push(upperWord);
  }

  return finalString.join(" ");
}

console.log("ES.8.1", upperFirst("mi chiamo giorgia."));
console.log("ES.8.2", upperFirst("Mi chiamo giorgia."));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* function cutString(string) {
  const newString = string.slice(1, -1);
  return newString;
}

console.log("ES.9.1", cutString("Ciao"));
console.log("ES.9.2", cutString("Epicode")); */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* function giveMeRandom(n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    const randomNumb = Math.floor(Math.random() * 11);
    array.push(randomNumb);
  }

  return array;
}

console.log("ES.10.1", giveMeRandom(1));
console.log("ES.10.2", giveMeRandom(10));
console.log("ES.10.3", giveMeRandom(100)); */
