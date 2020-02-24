const produto = [
    {nome: 'Note', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4499, fragil: true},
    {nome: 'Copo', preco: 24.99, fragil: true},
    {nome: 'Garrafa', preco: 2.49, fragil: false}
]

console.log(produto.filter(function(p){
    return true
    //return p.preco > 1500
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))