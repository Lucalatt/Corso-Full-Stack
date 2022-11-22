var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Professioni = /** @class */ (function () {
    function Professioni(_coderedd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.coderedd = _coderedd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Professioni.prototype.getUtileTasse = function () {
        var calcolo = this.redditoannuolordo * this.coderedd / 100;
        return calcolo;
    };
    Professioni.prototype.getTasseInps = function () {
        var calcolo1 = this.getUtileTasse() * this.tasseinps / 100;
        return calcolo1;
    };
    Professioni.prototype.getTasseIrpef = function () {
        var calcolo2 = this.getUtileTasse() * this.tasseirpef / 100;
        return calcolo2;
    };
    Professioni.prototype.getRedditoNetto = function () {
        var calcolo3 = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return calcolo3;
    };
    return Professioni;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoannuolordo) {
        return _super.call(this, 78, _redditoannuolordo, 25.72, 5) || this;
    }
    return Professionista;
}(Professioni));
console.log('-----------');
console.log('Professionista');
var newProfessionista = new Professionista(25000);
console.log('Utile tasse Professionista: ' + newProfessionista.getUtileTasse() + ' €');
console.log('Tasse INPS Professionista: ' + newProfessionista.getTasseInps() + ' €');
console.log('Tasse IRPEF Professionista: ' + newProfessionista.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Professionista: ' + newProfessionista.getRedditoNetto() + ' €');
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoannuolordo) {
        return _super.call(this, 67, _redditoannuolordo, 15, 35) || this;
    }
    return Artigiano;
}(Professioni));
console.log('-----------');
console.log('Artigiano');
var newArtigiano = new Artigiano(35000);
console.log('Utile tasse Artigiano: ' + newArtigiano.getUtileTasse() + ' €');
console.log('Tasse INPS Artigiano: ' + newArtigiano.getTasseInps() + ' €');
console.log('Tasse IRPEF Artigiano: ' + newArtigiano.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Artigiano: ' + newArtigiano.getRedditoNetto() + ' €');
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoannuolordo) {
        return _super.call(this, 40, _redditoannuolordo, 15, 35) || this;
    }
    return Commerciante;
}(Professioni));
console.log('-----------');
console.log('Commerciante');
var newCommerciante = new Commerciante(28000);
console.log('Utile tasse Commerciante: ' + newCommerciante.getUtileTasse() + ' €');
console.log('Tasse INPS Commerciante: ' + newCommerciante.getTasseInps() + ' €');
console.log('Tasse IRPEF Commerciante: ' + newCommerciante.getTasseIrpef() + ' €');
console.log('Reddito annuo netto Commerciante: ' + newCommerciante.getRedditoNetto() + ' €');
