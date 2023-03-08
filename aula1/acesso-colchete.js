const cliente = {
    nome:"Andre",
    idade:32,
    cpf:"11122233345",
    email: "andre@dominio.com"
}




console.log(`O nome do cliente é : ${cliente["nome"]} e essa pessoa tem ${cliente.idade}`)


console.log(`Os 3 primeiro digitos do CPF são ${cliente.cpf.substring(0,3)}`)


const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})