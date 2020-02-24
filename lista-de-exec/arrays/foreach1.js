const aprovados = ['ap1', 'ap2', 'ap3', 'ap4']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
//com arrowfunction
aprovados.forEach(nome => console.log(nome))

//com varivel
let exibirAprovados = aprovados => console.log(`(${aprovados})`)
aprovados.forEach(exibirAprovados)