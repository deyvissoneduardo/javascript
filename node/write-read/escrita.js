const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1.599,
    desconto: 1.1
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo')
})