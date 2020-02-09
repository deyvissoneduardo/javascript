//Faça um algoritmo que calcule o fatorial de um número.


function fatorial(numero){
    if(numero == 0){
        return false; 
    }else {
        return numero * fatorial(numero - 1);
    }
}

console.log(fatorial(25));