

// let btn = document.getElementById("start").innerHTML;
var fondi = 1000;
var oggetti = 0;
var totale = 0;



function spendi() {
    while (fondi >= 200) {

        let acquisti = Math.floor((Math.random() * 100) + 20);
        fondi = fondi - acquisti;
        document.getElementById("lista").innerHTML += `<li>Spesa: ${acquisti} <br> Budget aggiornato: ${fondi} </li>`;
        oggetti++;
        document.getElementById("totale").innerHTML = ` Numero acquisti: ${oggetti}`;
        totale = totale + acquisti;
        document.getElementById("valore").innerHTML = ` Valore acquisti: ${totale}`;
        document.getElementById("fermati").innerHTML = "Hai meno di 200€. Hai speso troppo!";
    }
}

// btn.addEventListener('click', function() {
//     clear();
//     spendi();
// });

// function clear() {
//     document.getElementById("lista").value = '';
//     document.getElementById("totale").value = '';
//     document.getElementById("valore").value = '';
//     document.getElementById("fermati").value = '';
// }








