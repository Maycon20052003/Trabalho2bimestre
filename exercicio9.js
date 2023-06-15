let valorx = document.querySelector("#valorx");
let valorx2 = document.querySelector("#valorx2");
let valory = document.querySelector("#valory");
let valory2 = document.querySelector("#valory2");
let distanciaentrepontos = document.querySelector("#distanciaentrepontos");
let btmostrardistancia = document.querySelector("#btmostrardistancia");

function descobrirdistanciax() {
    let vlx = Number(valorx.value);
    let vlx2 = Number(valorx2.value);
    let resx = Math.pow(vlx - vlx2, 2);
    return resx;

}
function descobrirdistanciay() {
    let vly = Number(valory.value);
    let vly2 = Number(valory2.value);
    let resy = Math.pow(vly - vly2, 2);
    return resy;
}
function distanciafinal() {
    let resx = descobrirdistanciax();
    let resy = descobrirdistanciay();
    let res = Math.sqrt(resx + resy);
    return res;
}
btmostrardistancia.onclick = function () {
    let distancia = distanciafinal();
  distanciaentrepontos.textContent = "Distância: " + distancia;
}
