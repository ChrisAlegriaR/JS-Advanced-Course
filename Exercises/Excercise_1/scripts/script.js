let screenValue = document.getElementById("pantalla");

function agregar(valor){
    screenValue.value += valor;
}

function calcular(){
    screenValue.value = eval(screenValue.value);
}

function borrar(){
    screenValue.value = screenValue.value.slice(0, -1)
}