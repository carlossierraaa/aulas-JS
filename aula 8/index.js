const nome = 'Carlos Sierra';
const idade = 31;
const peso = 92;
const alturaEmM = 1.86;
let imc = peso/ (alturaEmM*alturaEmM);
let anoNascimento = 2022 - idade;

console.log(imc);
console.log(anoNascimento);

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(`${nome} nasceu em ${anoNascimento}`);