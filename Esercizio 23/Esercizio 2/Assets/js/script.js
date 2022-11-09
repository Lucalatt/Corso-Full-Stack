
var timer = document.getElementById('timer');


function cronometro() {

    let sec;

    if (sessionStorage.getItem('time') == null) {
        sec = 0;
    } else {
        sec = sessionStorage.getItem('time');
        sec = parseInt(sec);
    }

    setInterval(function () {
        sec ++;
        sessionStorage.setItem('time', sec);
        timer.innerHTML = `Sono passati ${sec} sec.`;
    }, 1000);
}

cronometro();

