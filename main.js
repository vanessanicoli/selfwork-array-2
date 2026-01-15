// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

let a = [3, 5, 10, 2, 8];

let somma = a.reduce((acc, number)=> number + acc);
console.log(somma);

let media = somma / a.length;
console.log(`Media: ${media}`);

let lessThan = a.filter( (number)=> number < media );
console.log(`Valori minori: ${lessThan}`);

//VARIANTE
let moreThan = a.filter( (number)=> number > media );
console.log(`Ci sono ${lessThan.length} valori minori della media`);
console.log(`Ci sono ${moreThan.length} valori maggiori della media`);