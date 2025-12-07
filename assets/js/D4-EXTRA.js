// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* let randomArray = [];

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  randomArray.push(giveMeRandom());
}
console.log("Array = ", randomArray);

function checkArray(array) {
  let sum = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (array[i] > 5) {
      console.log(array[i] + " è maggiore di 5.");
      sum = sum + array[i];
    } else {
      console.log(array[i] + " è minore di 5.");
    }
  }
  return sum;
}

console.log("Somma numeri > 5 = ", checkArray(randomArray)); */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* let shoppingCart = [];

let cartItem = {
  price: null,
  name: null,
  id: null,
  quantity: null,
};

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10 + 1);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  cartItem = {
    price: giveMeRandom(),
    name: null,
    id: null,
    quantity: giveMeRandom(),
  };
  shoppingCart.push(cartItem);
}

console.log("Carrello: ", shoppingCart);

function shoppingCartTotal() {
  let total = 0;
  let itemTotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const cartItem = shoppingCart[i];
    itemTotal = cartItem.price * cartItem.quantity;
    total = total + itemTotal;
  }
  return total;
}

console.log("Il totale del carrelo è " + shoppingCartTotal() + " euro"); */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* let shoppingCart = [];

let cartItem = {
  price: null,
  name: null,
  id: null,
  quantity: null,
};

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10 + 1);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  cartItem = {
    price: giveMeRandom(),
    name: null,
    id: null,
    quantity: giveMeRandom(),
  };
  shoppingCart.push(cartItem);
}

console.log("Carrello: ", shoppingCart);


const newCartItem = {
  price: giveMeRandom(),
  name: null,
  id: null,
  quantity: giveMeRandom(),
};

function addToShoppingCart(item) {
  shoppingCart.push(item);
  return shoppingCart.length;
}

console.log("Totale elementi: ", addToShoppingCart(newCartItem)); */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* let shoppingCart = [];

let cartItem = {
  price: null,
  name: null,
  id: null,
  quantity: null,
};

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10 + 1);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  cartItem = {
    price: giveMeRandom(),
    name: null,
    id: null,
    quantity: giveMeRandom(),
  };
  shoppingCart.push(cartItem);
}

console.log("Carrello: ", shoppingCart);

function maxShoppingCart(array) {
  let cartPrices = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const itemPrice = item.price;
    cartPrices.push(itemPrice);
  }

  const maxPrice = Math.max(...cartPrices);
  return maxPrice;
}

console.log("L'elemento più costoso costa " + maxShoppingCart(shoppingCart) + " euro"); */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* let shoppingCart = [];

let cartItem = {
  price: null,
  name: null,
  id: null,
  quantity: null,
};

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10 + 1);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  cartItem = {
    price: giveMeRandom(),
    name: null,
    id: null,
    quantity: giveMeRandom(),
  };
  shoppingCart.push(cartItem);
}

console.log("Carrello: ", shoppingCart);

function latestShoppingCart(array) {
  const lastItem = array[array.length - 1];
  return lastItem;
}

console.log("L'ultimo elemento aggiunto al carrello è: ", latestShoppingCart(shoppingCart));
 */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

let randomArray = ["a"];

function giveMeRandom() {
  randomNumb = Math.floor(Math.random() * 10);
  return randomNumb;
}

for (let i = 0; i < giveMeRandom(); i++) {
  randomArray.push(giveMeRandom());
}

randomArray.push("c");
randomArray.splice(randomArray.length / 2, 0, "b");
console.log("Array = ", randomArray);

function average(array) {
  let onlyNumbArray = [];

  for (let i = 0; i < array.length; i++) {
    const arrayValue = array[i];
    if (typeof arrayValue === typeof 0) {
      onlyNumbArray.push(arrayValue);
    }
  }

  console.log("Array di soli numeri = ", onlyNumbArray);

  let sum = 0;
  for (let i = 0; i < onlyNumbArray.length; i++) {
    const number = onlyNumbArray[i];
    sum = sum + number;
  }

  const average = sum / onlyNumbArray.length;
  return average;
}

console.log("Media aritmetica =", average(randomArray));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
