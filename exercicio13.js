let raio = document.querySelector("#raio");
let resultado = document.querySelector("#resultado");
let btcalculararea = document.querySelector("#btcalculararea");

function descobrirarea(){
    let rai = Number(raio.value);
    let pi = 3.14;
    let area = pi * Math.pow(rai, 2);
    resultado.textContent = "A area da pizza é: " + area.toFixed(2);
}

btcalculararea.onclick = function(){
    descobrirarea();
}