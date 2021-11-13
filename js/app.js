

let cuentaHora = document.getElementById('ingresoHora')
console.log ( 'prueba' + cuentaHora)
let cuentaMinutos = 
let cuentaSegundos = 
let boton = document.getElementById('start');
boton.disabled = false;

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
        if (cuentaSegundos !== 0){
            boton.disabled = true;
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
        clearInterval(contador)
        boton.disabled = false

        
    }
    segundos.innerHTML = cuentaSegundos;
    minutos.innerHTML = cuentaMinutos;
    horas.innerHTML = cuentaHora;
    clearInterval(contador)
}

function stopReloj() {
    window.clearInterval(contador);
    boton.disabled = false;
}