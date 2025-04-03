const relogio = document.querySelector(".relogio");

function mostrarHoraAtual(){
    const data = new Date();
    const hora = data.getHours();
    const minuto = String(data.getMinutes()).padStart(2, '0');
    const segundo = String(data.getSeconds()).padStart(2, '0');

    relogio.innerHTML = hora + ":" + minuto + ":" + segundo;
}

mostrarHoraAtual();

setInterval(()=>{
    mostrarHoraAtual();
}, 1000);