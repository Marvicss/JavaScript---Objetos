const cliente = {
    nome: "joão",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1111111111", "222222222"]
};

cliente.enderecos = [
    {
        rua:"R. joseph climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"

    },
];


function ligaParaCliente(telefoneComercial,telefoneResidencial){
    console.log(`Lignado para ${telefoneComercial}`)
    console.log(`Lignado para ${telefoneResidencial}`)
}


ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)
console.log(cliente);