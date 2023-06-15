let largura = document.querySelector("#largura");
let altura = document.querySelector("#altura");
let arearetangulo = document.querySelector("#arearetangulo");
let btaparecerarea = document.querySelector("#btaparecerarea");

function areadoretangulo(){
let larg = Number(largura.value);
let alt = Number(altura.value);
arearetangulo.textContent = larg * alt;
}

btaparecerarea.onclick = function(){
    areadoretangulo();
}
