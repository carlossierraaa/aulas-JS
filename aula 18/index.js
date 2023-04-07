 /*function criaPEssoa (nome, sobrenome, idade) {
    return{
        nome:nome,
        sobrenome: sobrenome,
        idade: idade

    };
 }

 const pessoa1 = criaPEssoa('Luiz', 'Sierra', 25);
 const pessoa2 = criaPEssoa('Jose', 'Alberto', 25);
 const pessoa3 = criaPEssoa('Luiza', 'Solozobal', 25);
 const pessoa4 = criaPEssoa('Luiz', 'Sierra', 25);
 const pessoa5 = criaPEssoa('Luiz', 'Sierra', 25);

 console.log (pessoa3);*/
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    fala() {
        console.log(`A minda idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

