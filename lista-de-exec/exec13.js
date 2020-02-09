/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaSemana(dia){
    switch(dia){
        case 1: 
            return 'Fim de semana';
        case 2: 
        case 3: 
        case 4:
        case 5:
        case 6:
            return 'Dia Util';
        case 7:
            return 'Fim de Semana';
        default:
            return 'Dia Invalido';        
    }
}

console.log(diaSemana(1));
console.log(diaSemana(2));
console.log(diaSemana(3));
console.log(diaSemana(4));
console.log(diaSemana(5));
console.log(diaSemana(6));
console.log(diaSemana(7));
console.log(diaSemana('a'));




