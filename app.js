var arrayDeNumeros = new Array(); //array de numeros acumulables
const agregar = document.querySelector('#agregarNumero'); //Boton de agregar
var arrayResultante = document.querySelector('#arrayResultante'); //div que muestra el array
var calcularPuntaje= document.querySelector('#calcularPuntaje'); //boton para calcular puntaje
var puntaje = 0; //contenedor del puntaje
var contenedorPuntaje = document.querySelector('#puntaje');

function agregarArray(){//funcion para agregar numeros al array
    let entrada = document.querySelector("#entrada").value; 
    if(entrada!=""){
        arrayDeNumeros.push(entrada);
    }
    console.log(arrayDeNumeros);
    arrayResultante.innerHTML = arrayDeNumeros;
}
function finalPoints(){
    for (i of arrayDeNumeros){
            if((i%2!=0)&&(i!=5)){
                puntaje= puntaje + 3;
            }
            else if(i==5){
                puntaje= puntaje + 5;
            }
            else{
                puntaje++;
            }
            console.log(puntaje)
            contenedorPuntaje.innerHTML= puntaje;
                
    }   
};

agregar.addEventListener("click", agregarArray);//evento de escucha del boton
document.querySelector('#entrada').addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        agregarArray();
        document.querySelector("#entrada").value = "";
    }
});

calcularPuntaje.addEventListener("click", finalPoints);




