const alunos = ['Luiz','Marcia','João'];
alunos.unshift('Carlos'); 
alunos.unshift('Fábio');
console.log(alunos);
console.log(alunos.slice(0,-2));
//delete alunos [1]; deleta o índice do array, porém deixa o índice vazio
//alunos.shift(); remove o primeiro indice

//alunos.pop('João'); pop tira a array selecionado ou o útimo caso não seja selecionado.

//alunos.unshift('Carlos'); adicona no começo
//alunos.unshift('Fábio');

//alunos.push('Fábio'); push adiciona no final do array

//console.log(alunos.length); verifica o tamando do array
//alunos[0] = 'Eduardo'; trocará o indice 0 pelo o que for comandado
//alunos[3] = 'Luiza'; adicionará Luiza pois naão existe indice 3
//console.log(alunos[0]); verifica o indice entre []
console.log(alunos);