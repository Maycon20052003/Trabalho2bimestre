let camisetapequena = document.querySelector("#camisetapequena");
let camisetamedia = document.querySelector("#camisetamedia");
let camisetagrande = document.querySelector("#camisetagrande");
let valorarrecadado = document.querySelector("#valorarrecadado");
let btvalor = document.querySelector("#btvalor");

function valorarrecadadocompleto(){
    let pequena = Number(camisetapequena.value);
    let media = Number(camisetamedia.value);
    let grande = Number(camisetagrande.value);
    valorarrecadado.textContent = (pequena * 10) + (media * 12) + (grande * 15);
}
btvalor.onclick = function(){
    valorarrecadadocompleto();
}