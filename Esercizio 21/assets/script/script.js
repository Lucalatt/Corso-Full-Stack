var btn = document.getElementById("calcola");
var listaClienti = [];
var currentDate = new Date();

function Cliente(_nome, _cognome, _data) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.date = new Date(_data);


    this.calcolaEta = () => {
        let age = (currentDate.getFullYear() - this.date.getFullYear());

        if (currentDate.getMonth() < this.date.getMonth() ||
            (currentDate.getMonth() == this.date.getMonth() &&
                currentDate.getDate() < this.date.getDate())) {
            age--;
        }
        return age;
    }
}

window.addEventListener("DOMContentLoaded", init);

var init = () => {
    if (listaClienti.lenght > 0) {
        stampaLista();
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let newNome = document.getElementById("nome").value;
    let newCognome = document.getElementById("cognome").value;
    let newData = document.getElementById("data").value;

    let newCliente = new Cliente(newNome, newCognome, newData);

    listaClienti.push(newCliente);
    console.log(anagrafica);

    stampaLista();
    cancellaLista();
});

function stampaLista() {
    let anagrafica = document.getElementById("anagrafica");
    let stringa = "";
    anagrafica.innerHTML = "";
    listaClienti.forEach((elemento) => {
        stringa += `<tr><td class="w-25 text-white">${elemento.nome}</td> <td class="w-25 text-white">${elemento.cognome}</td> <td class="w-25 text-white">${elemento.calcolaEta()}</td></tr>`;
    });
    anagrafica.innerHTML = stringa;
}

function cancellaLista() {
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("data").value = "";
}