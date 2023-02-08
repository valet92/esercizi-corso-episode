/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*  */
//creo le variabili
const number1 = 17;
const number2 = 71;
var bigger = (number1 >= number2) ? number1 : number2;

//mando in stampa

document.getElementById('esercizio1').innerHTML = 'il numero maggiore è ' + bigger;

console.log('il numero maggiore è ' + bigger ) ;  //extra lo scrivo pure in console log
 
//in alternativa potevi suare IF ELSE IF ELSE





/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const number = 5; //prova a cambiare valore x vedere che succede

/* sto dicendo: se la var same è uguale == a 5 allora uscirà 'equal' altrimenti 'not equal'   */

var same = (number==5) ? 'equal' : 'not equal'; //NB: == significano stesso carattere cioe '5' è uguale a 5 viceversa === '5' non è uguale a 5

//mando in stampa

document.getElementById('esercizio2').innerHTML = 'il numero è ' + same;

console.log('il numero è ' + same);




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" ( es 25/5 = 5 con resto zero) in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* % mi riporta il resto di una divisione non perfetta esempio:
14/3 = 4 volte diviso per intero e due di resto  
*/
const es3n1 = 25; //prova a cambiare valore x vedere che succede

var divisibile = (es3n1%5 === 0) ? 'divisibile per 5 ' : 'non divisibile'; //sto dicendo che il resto della divisone appunto deve essere zero ===0


//stampo

document.getElementById('esercizio3').innerHTML = 'il numero è ' + divisibile;
console.log('il numero è ' + divisibile);


/* var totalShoppingCart = 51;
var spedizione = 10;
var totalCost;
if(totalShoppingCart > 50){
  totalCost = totalShoppingCart;
  document.getElementById('esercizio5').innerHTML = 'hai diritto alla spedizione gratuita' + ' ' + totalCost;
} else {
  totalCost = totalShoppingCart + 10;
 document.getElementById('esercizio5').innerHTML = 'Totale da pagare' + ' '+ totalCost;
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


const es4n1 = 16;
const es4n2 = 15;


//NB || significa or/oppure
var risultato = (es4n1==8 || es4n2==8 || es4n1 + es4n2==8 || es4n1 - es4n2==8 || es4n2 - es4n1==8) ? 'uguale a 8' : 'diverso da 8';

//stampo

document.getElementById('esercizio4').innerHTML = risultato;
console.log('il numero è ' + risultato);






/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


var totalShoppingCart =60;  //prova a cambiare valori per vedere che
var spedizione = 10;
var totale;

if (totalShoppingCart > 50) {
  totale = totalShoppingCart;
  document.getElementById('esercizio5').innerHTML = ' la spedizione è gratuita e il totale che pagherai è' + totale;
} 
else if (totalShoppingCart <= 50) {
  totale = totalShoppingCart + 10;
  document.getElementById('esercizio5').innerHTML = 'la spedizione è a pagamento e il totale che pagfherai è' + totale;
  
} 

/* OPPURE
var totalShoppingCart = 51;
var spedizione = 10;
var totalCost; variabile che esiste ma nn definita
if(totalShoppingCart > 50){
  totalCost = totalShoppingCart;
  document.getElementById('esercizio5').innerHTML = 'hai diritto alla spedizione gratuita' + ' ' + totalCost;
} else {
  totalCost = totalShoppingCart + 10;
 document.getElementById('esercizio5').innerHTML = 'Totale da pagare' + ' '+ totalCost;
}
*/



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

  

var sconto = totalShoppingCart * 0.2;
var carrelloScontato = totalShoppingCart - sconto;

if (totalShoppingCart - sconto > 50) {
  carrelloScontato = totalShoppingCart;
  
  document.getElementById('esercizio6').innerHTML = 'la spedizione è gratis';

}
else if (totalShoppingCart - sconto <= 50) {
  carrelloScontato = totalShoppingCart + spedizione;
  document.getElementById('esercizio6').innerHTML = 'la spedizione è a pagamento';
} 





/*  */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
