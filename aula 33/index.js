const  pessoa = { 
    nome: 'Luiz',
    sobrenome: 'Minranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil', 
        numero: 320
    }
};

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

