const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//desafio: buscar na lista mulher chinesa com menor salario
const chineses = f => f.pais === 'China'
const mulherChinesa = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulherChinesa)
        .reduce(menorSalario)
        console.log(func)
})