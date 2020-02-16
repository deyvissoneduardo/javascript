/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contaVetor(vetor){
    let qtdNegativo = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            qtdNegativo++
        }
    }
    return qtdNegativo
}
vetor = [1,-2, 3, -4, 5, -6, 7, -8, 9];
console.log(contaVetor(vetor));






