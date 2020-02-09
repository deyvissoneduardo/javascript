/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capInicial, taxJuros, temAplic){
    return capInicial + (capInicial * taxJuros * taxJuros)
}

function jurosComposto(capInicial, taxJuros, temAplic){
    return capInicial + (1 + taxJuros) ** taxJuros
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2));
