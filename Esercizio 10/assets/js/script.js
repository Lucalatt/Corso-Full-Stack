var nome = 'Aldo';
let tipo = 'cliente';
const numero = 3.14;

document.getElementById('concatena').innerHTML = `${nome},  ${tipo},  ${numero}`;

var nome2 = `${'Aldo'}, ${'cliente'}, ${3.14}`;
document.getElementById('concatena2').innerHTML = nome2;



var boh = 'Mario';
document.getElementById('var').innerHTML = boh;

var boh = 'Carla';
document.getElementById('let').innerHTML = boh;

var boh = 'Mario';
document.getElementById('final').innerHTML = boh;


var boh = 'Carla';
//document.getElementById('let2').innerHTML = boh;


{
    let boh = 'Mario';
    document.getElementById('let2').innerHTML = boh;
}

// var boh = 'Carla';
document.getElementById('let3').innerHTML = boh;
document.getElementById('final2').innerHTML = boh;



var numeri = 15;
document.getElementById('iniziale').innerHTML += numeri;

let addizione= numeri + numeri;
let incremento= addizione + 1;

document.getElementById('valore1').innerHTML +=`${addizione}, ${incremento}`;

let sottrazione= numeri - 10;
let decremento= sottrazione - 1;

document.getElementById('valore2').innerHTML +=`${sottrazione}, ${decremento}`;

document.getElementById('valore3').innerHTML += (numeri * 3);

document.getElementById('valore4').innerHTML += (numeri / 3);

document.getElementById('valore5').innerHTML += `${numeri} ${'è un numero'}`;
