// uma factory retorna um novo objeto 
module.exports = () => {
    return {
        value:1,
        increment(){
            this.value++
        }
    }
}