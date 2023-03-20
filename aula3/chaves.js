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


const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);


if (!chavesDoObjeto.includes("enderecos")){
        console.error("Erro. É necessario ter um endereço cadastrado")
}