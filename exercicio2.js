let quantidadecavalos = document.querySelector("#quantidadecavalos");
let totalferraduras = document.querySelector("#totalferraduras");
let bttotalferraduras = document.querySelector("#bttotalferraduras");

function totaldeferraduras(){
    let totalcavalos = Number(quantidadecavalos.value);
    totalferraduras.textContent = totalcavalos * 4;
}
bttotalferraduras.onclick = function(){
    totaldeferraduras();
}