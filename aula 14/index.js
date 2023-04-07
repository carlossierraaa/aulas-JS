let num1 = 111.3235;
let num2 = 2.5;

//console.log (num1.toString() + num2);
//num1 = num1.toString(); 
//console.log(num1.toString(2)); - tranforma em número binário 
//console.log(num1.toFixed(2)); - transforma em 2 casa decimais de acordo com o número em ()
//console.log(Number.isInteger(num1)); - pergunta se é inteiro ou não 
//let temp = num1 * 'olá'; - dará NaN então pode perguntar com Nunber.isNaN(temp)
num1 = parseFloat(num1.toFixed(0)); // num1 = Number(num1.toFixed(0)); - qualquer um funcionaria 
console.log(num1);
console.log(Number.isInteger(num1));