let casNumber: number = Math.round(Math.random() * (100 - 1) + 1);

let numberOne: number = Math.round(Math.random() * (100 - 1) + 1);

let numberTwo: number = Math.round(Math.random() * (100 - 1) + 1);

console.log('Il numero estratto è: ' + casNumber);
console.log('Il giocatore uno ha estratto: ' + numberOne);
console.log('Il giocatore due ha estratto: ' + numberTwo);

if(numberOne == casNumber) {
    console.log('Ha vinto il giocatore 1!')
} else if(numberTwo == casNumber) {
    console.log('Ha vinto il giocatore 2!')
} else if ((casNumber - numberOne) > (casNumber - numberTwo)) {
    console.log('Nessuno dei due giocatori ha indovinato il numero, ma il giocatore 1 si è avvicinato di più!')
} else if ((casNumber - numberOne) < (casNumber - numberTwo)) {
    console.log('Nessuno dei due giocatori ha indovinato il numero, ma il giocatore 2 si è avvicinato di più!')
}