let SalarioFuncionario = document.querySelector("#SalarioFuncionario");
let Salarioinicial = document.querySelector("#Salarioinicial");
let Salariocomaumento = document.querySelector("#Salariocomaumento");
let Salariofinal = document.querySelector("#Salariofinal");
let btsalarios = document.querySelector("#btsalarios");

function versalarios(){
    let slrfuncionario = Number(SalarioFuncionario.value);
    let resultado = slrfuncionario * (15 / 100) + slrfuncionario;
    Salarioinicial.textContent = slrfuncionario;
    Salariocomaumento.textContent = resultado;
    Salariofinal.textContent = resultado - resultado * (8 / 100);
}
btsalarios.onclick = function(){
    versalarios();
}