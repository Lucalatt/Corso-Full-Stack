let data = new Date();
const mese = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
let oraAttuale = data.getHours();



document.getElementById("dataAttuale").innerHTML += data;
document.getElementById("mese").innerHTML += mese[data.getMonth()];
document.getElementById("giorno").innerHTML += data.getDate();
// document.getElementById("ora").innerHTML += `${data.getHours()}.${data.getMinutes()}`;

document.getElementById("dataCorretta").innerHTML += `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;


if (oraAttuale < 14) {
    document.getElementById("saluto").innerHTML += "Buongiorno ";
} else if (oraAttuale < 21) {
    document.getElementById("saluto").innerHTML += "Buonasera ";
} else {
    document.getElementById("saluto").innerHTML += "Buonanotte ";
} 

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("ora").innerHTML =`Ora attuale: ${h}.${m}.${s}`;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }

