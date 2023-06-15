let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let diasdevida = document.querySelector("#diasdevida");
let suaidade = document.querySelector("#suaidade");
let btmostrardiasdevida = document.querySelector("#btmostrardiasdevida");



function diasdevidas() {
    let idades = Number(idade.value);
    let nm = String(nome.value);
    diasdevida.textContent = nm + ", você já viveu " + (idades * 365) + " dias";
}

btmostrardiasdevida.onclick = function(){
    diasdevidas();
}
