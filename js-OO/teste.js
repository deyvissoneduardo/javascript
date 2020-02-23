let prod = new Object
prod.nome = 'Teste'
prod['teste com array'] = 'array'
prod.preco = 20

console.log(prod)

delete prod.nome
delete prod.preco
console.log(prod)
