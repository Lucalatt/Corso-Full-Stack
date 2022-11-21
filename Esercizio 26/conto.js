"use strict";
class SonAccount {
    constructor() {
        this.saldo = 0;
        this.versamento = Math.floor(Math.random() * 100);
        this.prelievo = Math.floor(Math.random() * 100);
    }
    vers() {
        return this.saldo += this.versamento;
    }
    prel() {
        return this.saldo -= this.prelievo;
    }
}
let conto = new SonAccount;
console.log('Conto Uno');
console.log('Il tuo saldo attuale è: ' + conto.saldo);
conto.vers();
console.log('Hai versato £: ' + conto.versamento);
console.log('Il tuo saldo attuale è: ' + conto.saldo);
conto.prel();
console.log('Hai prelevato £: ' + conto.prelievo);
console.log('Il tuo saldo attuale è: ' + conto.saldo + ' £');
class MotherAccount extends SonAccount {
    constructor() {
        super(...arguments);
        this.saldo = 0;
        this.versamento = Math.floor(Math.random() * 100);
        this.prelievo = Math.floor(Math.random() * 100);
    }
    vers() {
        return this.saldo += this.versamento;
    }
    prel() {
        return this.saldo -= this.prelievo;
    }
    interesse() {
        return this.saldo + (this.saldo * 10 / 100);
    }
}
let contoDue = new MotherAccount;
console.log('Conto 2');
console.log('Il tuo saldo attuale è: ' + contoDue.saldo);
contoDue.vers();
console.log('Hai versato £: ' + contoDue.versamento);
console.log('Il tuo saldo attuale è: ' + contoDue.saldo);
contoDue.prel();
console.log('Hai prelevato £: ' + contoDue.prelievo);
console.log('Il tuo saldo attuale è: ' + contoDue.saldo + ' £');
console.log('Il tuo saldo attuale al netto degli interessi è: ' + contoDue.interesse() + ' £');
