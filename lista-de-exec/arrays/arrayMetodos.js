const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo do array
console.log(pilotos)

pilotos.push('Verstappen') // adc ao final
console.log(pilotos)

pilotos.shift() // remove o primeiro[0] do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adv na primeira posicao[0] do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)