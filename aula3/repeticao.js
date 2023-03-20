const cliente = {
    nome: "joão",
    idade: 24,
    email: "Joao@firma.com",
    telefone: ["1111111111", "1111111111"]
};

cliente.enderecos = [
    {
        rua:"R. joseph climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"

    },
];


for(let chave in cliente){
    console.log(cliente[chave]);
}
