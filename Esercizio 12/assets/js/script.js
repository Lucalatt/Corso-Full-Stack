//primo esercizio

var saluta = 'Sto imparando JavaScript';

// PRIMA VARIANTE 

var maiuscola = saluta.toUpperCase();
document.getElementById('maiuscola').innerHTML += (maiuscola);

//SECONDA VARIANTE

var minuscola = saluta.toLocaleLowerCase();
document.getElementById('minuscola').innerHTML += (minuscola);

//TERZA VARIANTE

var split = saluta.split('');
document.getElementById('strArray').innerHTML += (split);

//QUARTA VARIANTE

var estrazione = saluta.slice(2,3);
var estrazione1 = saluta.slice(1,2);
var estrazione2 = saluta.slice(14,15);
var estrazione3 = saluta.slice(18,19);
document.getElementById('estraiCaratteri').innerHTML += (estrazione + estrazione1 + estrazione2 + estrazione3);

//QUINTA VARIANTE

var aggiungiJs = saluta.concat(" JS");
document.getElementById('concatena').innerHTML += (aggiungiJs);

//SESTA VARIANTE

var estraiStr = saluta.substring(5,9);
document.getElementById('estraiStringa').innerHTML += (estraiStr);

//secondo esercizio

//PRIMA PARTE

const lista = ['Giovanni','Carla','Piero','Mirtilla'];
document.getElementById('array').innerHTML += lista;

//seconda parte

document.getElementById('lunghezza').innerHTML = lista.length;

//terza parte
document.getElementById('elemento').innerHTML = lista[2];

//quarta parte
document.getElementById('ultimo').innerHTML = lista.pop();

//quinta parte
lista.splice(2, 1, "Massimo", "Mirtilla")
document.getElementById('modificato').innerHTML = lista;

//terzo esercizio

const calcolaAnni = function(compleanno){
    return 2022-compleanno;
}

const anni = [1990, 2001, 2010, 1987, 2018];
const eta1 = calcolaAnni(anni[1]);
const eta2 = calcolaAnni(anni[0]);
const eta3 = calcolaAnni(anni[3]);
const eta4 = calcolaAnni(anni[4]);
const eta5 = calcolaAnni(anni[2]);
document.getElementById('eta1').innerHTML += eta1 + ' anni';
document.getElementById('eta2').innerHTML += eta2 + ' anni';
document.getElementById('eta3').innerHTML += eta3 + ' anni';
document.getElementById('eta4').innerHTML += eta4 + ' anni';
document.getElementById('eta5').innerHTML += eta5 + ' anni';

const eta = [eta1, eta2, eta3, eta4, eta5];
document.getElementById('arrayEta').innerHTML += eta;


//quarto esercizio

//prima parte

const animali= ['coniglio','cane','gatto','criceto']
document.getElementById('intero').innerHTML = animali;

//seconda parte
animali.push('leone')
document.getElementById('aggiunto').innerHTML = animali;

//terza parte

animali.pop()
document.getElementById('estratto').innerHTML = animali;

//quarta parte

document.getElementById('verifica1').innerHTML = animali.includes('cane');

//quinta parte

document.getElementById('verifica2').innerHTML = animali.includes('foca');

