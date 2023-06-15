let Valorlitrogasolina = document.querySelector("#Valorlitrogasolina");
let Valordopagamento = document.querySelector("#Valordopagamento");
let quantoslitros = document.querySelector("#quantoslitros");
let btcolocartanque = document.querySelector("#btcolocartanque")
function quantidadedelitros(){
    let vlgasolina = Number(Valorlitrogasolina.value);
    let vlpagamento = Number(Valordopagamento.value);
    quantoslitros.textContent = (vlpagamento / vlgasolina);
}
btcolocartanque.onclick = function(){
    quantidadedelitros();
}