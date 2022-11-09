var titolo = document.getElementById('main');

function carica() {
    var nome = document.getElementById("nome").value;
    localStorage.setItem('utente', nome);
    titolo.innerHTML = `Bienvenue:  ${localStorage.getItem('utente')}`;
    document.getElementById('nome').value = '';
}

function cancella() {
    localStorage.removeItem('utente', nome);
    titolo.innerHTML = `Hai rimosso `;
}