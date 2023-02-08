var petPreferito = 'criceto';
var PetPreferito = 'coniglio';
console.log(petPreferito);

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';

/* qui visualizzerò nel browser 'pantera' (che è _pet2) e 'scritto da Javascript' mentre prima di pantera non visualizzerò nulla 
perchè si apre un <div id="container"> e si chiude dopo _pet2  */
document.write('<div id="container">' + _pet2 + ' scritto da Javascript</div>'); 
