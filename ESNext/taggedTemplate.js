// targged template

function real(partes, ...valores){
    const result = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        result.push(partes[indice], valor)
    })
    return result.join('')
}

var preco = 150.65
var precoParcela = 10

console.log(real `1x de ${preco}, ou 16x ${precoParcela}`)