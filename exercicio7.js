let dias = document.querySelector("#dias");
let mes = document.querySelector("#mes");
let diasquepassaram = document.querySelector("#diasquepassaram");
let btdiasquepassaram = document.querySelector("#btdiasquepassaram");

function diasquepassaramano(){
    let mesquepassou = Number(mes.value);
    let diasquepassou = Number(dias.value);
    diasquepassaram.textContent = ((mesquepassou * 30)-30) + diasquepassou ;
    if(mesquepassou !== 1){
        diasquepassaram.textContent = (mesquepassou * 30) + diasquepassou;
    }
    }

btdiasquepassaram.onclick = function(){
    diasquepassaramano();
}
