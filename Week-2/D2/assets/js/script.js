
// creare le scorciatoie impostando una costante
const esercizio1 = document.getElementById('concatena'); // scorciatoia
const esercizio2 = document.getElementById('concatena2'); // scorciatoia

//creo variabili
var nome = 'Aldo';  
let ruolo = 'cliente';
const pgreco = 3.14;


/*1) esercizio 
poiche nella scorciatoia ho dichiarato che:
const esercizio1 = document.getElementById('concatena');
ora scrivere direttamente : */
 
esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco;  //concatenamento

/*anziche scrivere sta roba lunga
esercizio1 = document.getElementById('concatena').innerHTML= nome + ', ' + ruolo + ', ' + pgreco;;

NB ',' serve per visualizzare uno spazio nell pagina web
 senno le variabili sarebbero state tutte appiccicate
 */
 






/*2) esercizio 
creo la variabile completo che contiene le 3 precedenti 

 */
 
var completo = nome + ', ' + ruolo + ', ' + pgreco;  //oppure ='Aldo, cliente, 3.14'


esercizio2.innerHTML = completo;  //concateno



//3 parte 1) 
//creo una variabile var che è global e la chiamo Mario

var nome1 = 'Mario'

// poi siccome nell'esercizio il nome di Mario deve andare al 1posto(id="var" nel html ) e al 3posto(id="final" nel html) posto devo richiamare Mario con 2 funzioni getElementById

document.getElementById('var').innerHTML = nome1  // primo posto
document.getElementById('final').innerHTML = nome1  //terzo posto

 /*adesso dentro le parentesi graffe quindi SOLO QUI DENTRO ci sarà il seguente effetto
 uso il let che è una variabile local e stravolgo tutto dicendo che
 qui dentro la variabile di sopra var nome1 = Carla
 e siccome la variabile Carla deve andare al 2 posto (id="let" nel html) devo richiamare Carla con 2 funzioni getElementById
 */

{   
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML = nome1; //secondo posto

}

/* parte 2 
in pratica è uguale alla parte 1 MA CON VAR dentro alle graffe {} non più let
perche la var modifica PERMANENTEMENTE così otterrò primo posto Mario, secondo posto Carla, terzo posto Carla )
*/


var nome2 = 'Mario';  //valore di partenza

document.getElementById('let2').innerHTML = nome2; //primo posto

// qui invece dentro le parentesi graffe nome2 = Carla che deve occupare il secondo posto (id="let3")

{
    var nome2 = 'Carla'; // NB var modifica permanente da ora in poi nome2 = Carla
    document.getElementById('let3').innerHTML = nome2; //secondo posto
}


document.getElementById('final2').innerHTML = nome2; // terzo posto


//esercizio 4 

// creo costante scorciatoia

const iniziale = 15;
//riga 1
/*  NB += serve perche in tale caso il numero 15 deve essere visualizzato ACCANTO e non deve sovrascrivere 
il paragrafo <p id="iniziale">Valore iniziale: </p> (nel html) 
 */
document.getElementById('iniziale').innerHTML += iniziale

//riga2
var addizione = iniziale + 15;
document.getElementById('valore1').innerHTML += addizione + ', ' + (++addizione);  //++ significa aumento +1

//riga3
var sottrazione = iniziale -10;
document.getElementById('valore2').innerHTML += sottrazione + ', ' + (--sottrazione);  //-- significa decremento -1

//riga 4

document.getElementById('valore3').innerHTML += iniziale*3;

//riga 5 

document.getElementById('valore4').innerHTML += iniziale/3;

//riga 6

document.getElementById('valore5').innerHTML += iniziale + ' è un numero';

// riga 6 si può fare pure così


/* var casuale = ' è un numero'
document.getElementById('valore5').innerHTML += iniziale + casuale;

*/

/* */