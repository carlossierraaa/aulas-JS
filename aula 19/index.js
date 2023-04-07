/*
Primitivos (imutáveis) - string, nunber boolean, undefine, null (bigint, symbol)
Referência (mutável) - array, object,function
*/ 
/*let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]); não consegue trocar o indice, teria que trocar a palavra inteira
*/
/*
let a = 'A';
let b = a; // faz uma cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);
*/
/*
let a = [1, 2, 3];
let b = a;
console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
*/
/*
let a = [1, 2, 3];
let b = [...a]; // usando ... copia e não cria um vinculo 
console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);*/
/*
const a = {
   nome: 'Luiz',
   sobrenome: 'Otávio' 
};

const b =a;
a.nome = 'João';
console.log(b);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio' 
 };
 
 const b ={...a};
 a.nome = 'João';
 console.log(a, b);