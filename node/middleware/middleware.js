// milddleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.value1 = 'mid1',
    next()
}

const passo2 = (ctx, next) => {
    ctx.value2 = 'mid2',
    next()
}

const passo3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...milddlewares) => {
    const execPasso = indice => {
        milddlewares && indice < milddlewares.length &&
            milddlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)