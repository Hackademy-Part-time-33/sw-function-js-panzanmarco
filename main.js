/* Traccia 1:
Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:

Esempio:
  
let numbers = [3, 5, 10, 2, 8];
Output: media = 5.6, valori minori = [3, 5, 2]

Variante:
Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. */
let myarray = [23, 10, 55, 21, 19]
let somma = myarray.reduce((acc, el) => acc + el, 0);
console.log(`la somma di tutti i numeri contenuti nell' array è ${somma}`)
let media = somma / myarray.length
console.log(`la media dei numeri contenuti nell' array è ${media}`)
let min = myarray.filter((el,) => el < media)
console.log(`${min}`)
let max = myarray.filter((el,) => el > media)
console.log(`${max}`)




/* Traccia 2:
Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
Esempio:
Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
Variante:
Prova ad ordinali in modo crescente.
 */
let array2 = [15, 22, 36, 2, 91, 23, 21, 69, 90, 79]
array2.sort((a, b) => b - a);
console.log(`in ordine decrescente ${array2}`)
array2.sort((a, b) => a - b)
console.log(`in ordine crescente ${array2}`);


/* 
 Traccia 3:
Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
Primo step: eliminare gli spazi e i segni di punteggiatura:
Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
Esempio:
Input: “i topi non avevano nipoti”
Output: true*/
let frasetopi = `i topi non avevano nipoti`
function Palindroma(frase) {
    frase = frase.replace(/\W/g, "");
    return frase === frase.split('').reverse().join('');
}
console.log(Palindroma(frasetopi))

/* Traccia 4: 
Scrivere una funzione che permetta di filtrare soltanto le parole all’interno di un array:
let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

Suggerimento: provate a filtrare in base al tipo di dato(operatore typeof)*/

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php']
let filtered = mixArray.filter(el => typeof el === 'string')

console.log(filtered)

/* Traccia 5:
 Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni:
addizione
sottrazione
moltiplicazione
divisione
Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
    Esempio: Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
        * / */
function nrcasuali() {
    return Math.floor(Math.random() * (10)) + 1;
}

let arr1 = [];
let arr2 = [];
let arr_risult = [];
for (var i = 0; i < 10; i++) {
    arr1.push(nrcasuali(1, 10));
    arr2.push(nrcasuali(1, 10));
}

console.log(arr1);
console.log(arr2);
arr_risult = arr1.map((num, index) => num + arr2[index])
console.log(arr_risult);
/* 
```let operatore = '';
    while (operatore !== "addizione" && operatore !== "sottrazione" && operatore !== "moltiplicazione" && operatore !== "divisione"){
    operatore = prompt(`Scrivi l'operatore che vuoi utilizzare: \n addizione \nsottrazione \nmoltiplicazione \ndivisione`).toLowerCase();
    }
    let array1 =[];
    let array2 = [];
    let array3 = [];
    
        for(i = 1; i <= 10; i++){
    let numbers = Math.floor(Math.random() * 10 + 1);
    let numbers2 = Math.floor(Math.random() * 10 + 1);
    array1.push(numbers);
    array2.push(numbers2);
        if (operatore === "addizione"){
            array3.push(numbers + numbers2);
        } else if (operatore === "sottrazione"){
            array3.push(numbers - numbers2);
        }
        else if (operatore === "moltiplicazione"){
            array3.push(numbers * numbers2);
        }
        else if (operatore === "divisione"){
            array3.push(numbers / numbers2);
        }``` */