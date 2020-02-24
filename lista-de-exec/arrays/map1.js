const num = [1,2,3,4,5]

let result = num.map(function(e){
    return e * 2
})

console.log(num)
console.log(result)

const soma = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

result = num.map(soma).map(triplo).map(dinheiro)
console.log(result)