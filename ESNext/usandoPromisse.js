// com promisse...

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', dados => {
                result += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(result))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
} 

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map((a => `Turma A: ${a.nome}`)))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map((a => `Turma B: ${a.nome}`)))
    })
    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map((a => `Turma C: ${a.nome}`)))
        console.log(nomes)
    })
})