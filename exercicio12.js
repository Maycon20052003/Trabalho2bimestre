let insiranumero = document.querySelector("#insiranumero");
let centena = document.querySelector("#centena");
let dezena = document.querySelector("#dezena");
let unidade = document.querySelector("#unidade");
let btdescobrir = document.querySelector("#btdescobrir");

function mostrarlugares(){
    let innum = Number(insiranumero.value);
    let cente = Math.floor(innum / 100);
    let deze = Math.floor((innum % 100) / 10);
    let unid = innum % 10;

    centena.textContent = "CENTENA = " + cente;
    dezena.textContent = "DEZENA = " + deze;
    unidade.textContent = "UNIDADE = " + unid;
}
btdescobrir.onclick = function(){
    mostrarlugares();
}
