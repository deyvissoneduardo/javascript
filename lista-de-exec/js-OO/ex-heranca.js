const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 340 // shadoing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo} ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


volvo.acelerarMais(100)
ferrari.acelerarMais(300)

console.log(volvo.status())
console.log(ferrari.status())