// operador ... rest(junta)/spread(junta)

//spread com obj
const funcionario = {
    nome: 'Eduardo',
    salario: 1234 
}
const clone = {
    ativo: true,
    ...funcionario
}
console.log(clone)

// spread com array
const grupoA = ['Du', 'Dudu', 'Edu']
const grupoB = ['Ana', 'Maria', 'Carla', ...grupoA]

console.log(grupoB)
