const clientes = require("./clientes.json")

function ornedar(lista, propriedade){
    const resultado = lista.sort((a,b) => {
        if(a[propriedade] > b[propriedade]){
            return -1
        }
        if(a[propriedade] < b[propriedade]){
            return 1
        }
        return 0
    })

    return resultado
}


const ordenado = ornedar(clientes, "nome");

console.log(ordenado)



