/*
let numero = 5;


let lanzamiento = setInterval(()=>{
    console.log ('lanzamiento en'+ numero + 'segundos');
    numero-- ;
    if (numero == 0){
        clearInterval(lanzamiento);
    }

},1000);
*/



let cuentaHora = parseInt(prompt('Ingrese las horas'));
let cuentaMinutos = parseInt(prompt('Ingrese los minutos'));
let cuentaSegundos = parseInt(prompt('Ingrese los segundos'));

function verHora() {
    segundos.innerHTML = cuentaSegundos
    minutos.innerHTML = cuentaMinutos
    horas.innerHTML = cuentaHora
}


let segundos = document.querySelector('#segundos');
let minutos = document.querySelector('#minutos');
let horas = document.querySelector('#horas');


function playReloj() {
    contador = setInterval(function () {
        if (cuentaSegundos == 00) {
            cuentaSegundos = 59;
            cuentaMinutos--;
        }
        if (cuentaMinutos == 00) {
            cuentaMinutos = 00;
            cuentaHora--;
        }
        if (cuentaSegundos < 10) {
            cuentaSegundos = "0" + cuentaSegundos;
        }

        if (cuentaSegundos && cuentaMinutos && cuentaHora == 0) {
           
        }
        segundos.innerHTML = cuentaSegundos;
        cuentaSegundos--;
        minutos.innerHTML = cuentaMinutos;
        horas.innerHTML = cuentaHora;
    }, 1000);
}

function resetReloj() {
    if (cuentaSegundos > 0 || cuentaMinutos > 0 || cuentaHora || 0) {
        cuentaSegundos = 00;
        cuentaMinutos = 00;
        cuentaHora = 00;
    }
    segundos.innerHTML = cuentaSegundos;
    minutos.innerHTML = cuentaMinutos;
    horas.innerHTML = cuentaHora;
    clearInterval(contador)
}

function stopReloj() {
    window.clearInterval(contador);
}