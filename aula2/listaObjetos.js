const cliente = {
    nome:"joão",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550","1115555444"] 
};



cliente.enderecos = [{
    rua:"Rua da Aurora",
    numero: 1888,
    apartamento : true,
    complemento: "ap 934"
},
]


cliente.enderecos.push({
    rua:"Rua Joseph Ladder",
    numero:404,
    apartamento:false,
})

console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos)