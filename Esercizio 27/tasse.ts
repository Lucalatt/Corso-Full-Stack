abstract class Professioni {
    coderedd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(_coderedd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {

        this.coderedd = _coderedd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getUtileTasse(): number {
        let calcolo = this.redditoannuolordo * this.coderedd / 100;
        return calcolo;
    }

    getTasseInps(): number {
        let calcolo1 = this.getUtileTasse() * this.tasseinps / 100;
        return calcolo1;
    }

    getTasseIrpef(): number {
        let calcolo2 = this.getUtileTasse() * this.tasseirpef / 100;
        return calcolo2; 
    }
    getRedditoNetto(): number { 
        let calcolo3 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return calcolo3;
    }
    
    
}

class Professionista extends Professioni {
    constructor(_redditoannuolordo: number) {
    super(78, _redditoannuolordo, 25.72, 5)
    }
}

console.log('-----------');
console.log('Professionista');

let newProfessionista = new Professionista(25000);
console.log('Utile tasse Professionista: ' + newProfessionista.getUtileTasse()+ ' €');
console.log('Tasse INPS Professionista: ' +  newProfessionista.getTasseInps() + ' €');
console.log('Tasse IRPEF Professionista: ' + newProfessionista.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Professionista: ' + newProfessionista.getRedditoNetto() + ' €');

class Artigiano extends Professioni {
    constructor(_redditoannuolordo: number) {
    super(67, _redditoannuolordo, 15, 35)
    }
}

console.log('-----------');
console.log('Artigiano');

let newArtigiano = new Artigiano(35000);
console.log('Utile tasse Artigiano: ' + newArtigiano.getUtileTasse()+ ' €');
console.log('Tasse INPS Artigiano: ' +  newArtigiano.getTasseInps() + ' €');
console.log('Tasse IRPEF Artigiano: ' + newArtigiano.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Artigiano: ' + newArtigiano.getRedditoNetto() + ' €');

class Commerciante extends Professioni {
    constructor(_redditoannuolordo: number) {
    super(40, _redditoannuolordo, 15, 35)
    }
}

console.log('-----------');
console.log('Commerciante');

let newCommerciante = new Commerciante(28000);
console.log('Utile tasse Commerciante: ' + newCommerciante.getUtileTasse()+ ' €');
console.log('Tasse INPS Commerciante: ' +  newCommerciante.getTasseInps() + ' €');
console.log('Tasse IRPEF Commerciante: ' + newCommerciante.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Commerciante: ' + newCommerciante.getRedditoNetto() + ' €');


