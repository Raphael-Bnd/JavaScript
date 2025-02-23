const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;
const data = new Date(0 + threeHours + oneDay); // 01.01.1970 Timestamp unix ou época unix
console.log(data.toString());

//////////

//                         2025, Fevereiro, 20 15h 14m 17s 500Ms
const novaData = new Date(2025, 1, 20, 15, 14, 27, 500);
console.log(novaData.toString());

//////////

const dataString = new Date("2022-12-12 22:25:17.500");
console.log("Dia", dataString.getDate());
console.log("Mês", dataString.getMonth() + 1);
console.log("Ano", dataString.getFullYear());
console.log("Hora", dataString.getHours());
console.log("Minuto", dataString.getMinutes());
console.log("Segundo", dataString.getSeconds());
console.log("ms", dataString.getMilliseconds());
console.log("Dia semana", dataString.getDay()); // ZERO É DOMINGO, SEIS É SÁBADO
console.log(dataString.toString());
console.log(Date.now()); // DATA EM ms A PARTIR DO UNIX

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
  const dia = zeroLeft(data.getDate());
  const mes = zeroLeft(data.getMonth() + 1);
  const ano = zeroLeft(data.getFullYear());
  const hora = zeroLeft(data.getHours());
  const min = zeroLeft(data.getMinutes());
  const seg = zeroLeft(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const newData = new Date();
const dataBrazil = formatData(newData);
console.log(dataBrazil);