var entrada1 = [1,2,3,4,5];
var entrada2 = [17,19,21];
var puntaje = 0;

function finalPoints(arrayDeNumeros){
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
    } 
};

finalPoints(entrada1);

console.log(puntaje);