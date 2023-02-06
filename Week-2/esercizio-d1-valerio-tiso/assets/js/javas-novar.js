window.alert('Questo è un alert di prova!');
alert('testo tra apici numeri no!');
alert(8 + 3);

document.write('<p>Output scritto da Js</p>'); //2)viene letto dopo da js
document.write('<p>Pantera-scritto-da-Js</p>') //3)viene letto dopo da js
document.getElementById('testo-titolo').innerHTML = '<h1>Iniziamo la nostra pratica</h1>'; //1)viene letto per primo da Js
//perchè sovrascrive la p dell html con un h1 ?
/*perchè non riesco ad allineare il titolo h1 (che ha sostituito una p) con i testi p
 Output scritto da Js e Pantera-scritto-da-Js se nel css sia h1 che p hano 10em di padding left?*/