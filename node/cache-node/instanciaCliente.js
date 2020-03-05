const contadorA = require('../cache-node/instanciaUnica')
const contadorB = require('../cache-node/instanciaUnica')

const contadorC = require('../cache-node/instanciaNova')() //invocando a funcao factory
const contadorD = require('../cache-node/instanciaNova')()

contadorA.increment()
contadorA.increment()
console.log(contadorA.value,  contadorB.value)

contadorC.increment()
contadorC.increment()
console.log(contadorC.value, contadorD.value)