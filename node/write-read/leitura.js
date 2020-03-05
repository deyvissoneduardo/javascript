const fileSystem = require('fs')

const caminho = __dirname + 'arquivo.json'

//sincrono...
const conteudo = fileSystem.readFileSync(caminho, 'uft-8')
//console.log(conteudo)


//assicrono...
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    //console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('../node/write-read/arquivo.json')
//console.log(config.db)

fileSystem.readdir(__dirname, (err, arquivo) => {
    console.log('conteudo da pasta')
    console.log(arquivo)
})
