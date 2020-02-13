//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function imparPar(vetorNumeros){
    let qtdPar = 0;
    let qtdImpar = 0;

    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            qtdPar++
        }else{
            qtdImpar++
        }
    }
    console.log(`${qtdPar} numeros pares`);
    console.log(`${qtdImpar} numeros impar`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imparPar(vetor);