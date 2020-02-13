/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function valorConta(codigo, quantidade){
 switch(codigo){
        case 100:
            return codigo * quantidade;
        case 200:
            return codigo * quantidade;
        case 300:
            return codigo * quantidade;
        case 400:
            return codigo * quantidade;
        case 500:
            return codigo * quantidade;
        case 600:
            return codigo * quantidade;
        default:
            return 'Codigo invalido' ;       
    }
}

console.log(valorConta(100, 3));
console.log(valorConta(200, 3));
console.log(valorConta(300, 3));
console.log(valorConta(400, 3));
console.log(valorConta(500, 3));
console.log(valorConta(600, 3));
console.log(valorConta(700, 3));

