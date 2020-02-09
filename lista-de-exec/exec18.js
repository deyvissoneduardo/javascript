/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroExtenso(numero){
    switch(numero){
        case 0:
            return `${numero} = zero`;
        case 1:
            return `${numero} = um`;
        case 2:
            return `${numero} = dois`;
        case 3:
            return `${numero} = trẽs`;
        case 4:
            return `${numero} = quatro`;
        case 5:
            return `${numero} = cinco`;
        case 6: 
            return `${numero} = seis`;
        case 7:
            return `${numero} = sete`;
        case 8:
            return `${numero} = oito`;
        case 9:
            return `${numero} = nove`;
        case 10:
            return `${numero} = dez`
        default:
            return `${numero}  fora do intervalo`;
    }
}

console.log(numeroExtenso(0));
console.log(numeroExtenso(1));
console.log(numeroExtenso(2));
console.log(numeroExtenso(3));
console.log(numeroExtenso(4));
console.log(numeroExtenso(5));
console.log(numeroExtenso(6));
console.log(numeroExtenso(7));
console.log(numeroExtenso(8));
console.log(numeroExtenso(9));
console.log(numeroExtenso(10));
console.log(numeroExtenso(11));
