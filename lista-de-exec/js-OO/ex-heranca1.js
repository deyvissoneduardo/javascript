const pai = {
    nome: 'Eduardo',
    cabelo: 'preto'
}

const filha1 = Object.create(pai)
filha1.nome = "ana"
console.log(filha1.cabelo)

const filha2 = Object.create(pai, {
    nome:{
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2.nome)

console.log(Object.keys(filha2.nome))
console.log(Object.keys(filha2.nome))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por Herança ${key}`)
}
