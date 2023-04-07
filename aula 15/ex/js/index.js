const numero = Number(prompt ("Digite um número:"));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero**0,5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>${numero} Arredondaodo para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>${numero} Arredondaodo para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>${numero} Com duas casa decimais: ${numero.toFixed(2)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)} </p>`;


