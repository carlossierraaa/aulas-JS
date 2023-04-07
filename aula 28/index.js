//Date > 01/01/1970
/*const tresHoras = 60*60*3*1000; //GMT de brasília é - 3 h
const umDia = 60*60*24*1000;
const data = new Date(0 + tresHoras + umDia);  //colocando o zero vai para época unix Date > 01/01/1970

console.log(data.toString());*/

/*const data = new Date (2019,3,20,15,14,27,500);
console.log(data.toString());*/

/*
const data = new Date ('2019-1-20 20:15:50');
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())



console.log(data.toString());*/

function zeroAEsquerda (num){
    return num >= 10 ?num: `0${num}`;
}

function formataData (data){
 const dia = data.getDate();
 const mes = data.getMonth();
 const ano = data.getFullYear();
 const hora = data.getHours();
 const min = data.getMinutes();
 const seg = zeroAEsquerda(data.getSeconds());
 return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} `


}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)