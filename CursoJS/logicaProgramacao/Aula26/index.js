// if (dayWeek === 0) {
//   dayWeekTxt = "Domingo";
// } else if (dayWeek === 1) {
//   dayWeekTxt = "Segunda-feira";
// } else if (dayWeek === 2) {
//   dayWeekTxt = "Terça-feira";
// } else if (dayWeek === 3) {
//   dayWeekTxt = "Quarta-feira";
// } else if (dayWeek === 4) {
//   dayWeekTxt = "Quinta-feira";
// } else if (dayWeek === 5) {
//   dayWeekTxt = "Sexta-feira";
// } else if (dayWeek === 6) {
//   dayWeekTxt = "Sabado";
// } else {
//   dayWeekTxt = "ERRO: DIA DA SEMANA NÃO ESPECIFICADO.";
// }

// -------------------------------------------------

function getDayWeekTxt(dayWeek) {
  let dayWeekTxt;

  switch (dayWeek) {
    case 0:
      dayWeekTxt = "Domingo";
      return dayWeekTxt;
    case 1:
      dayWeekTxt = "Segunda-feira";
      return dayWeekTxt;
    case 2:
      dayWeekTxt = "Terça-feira";
      return dayWeekTxt;
    case 3:
      dayWeekTxt = "Quarta-feira";
      return dayWeekTxt;
    case 4:
      dayWeekTxt = "Quinta-feira";
      return dayWeekTxt;
    case 5:
      dayWeekTxt = "Sexta-feira";
      return dayWeekTxt;
    case 6:
      dayWeekTxt = "Sábado";
      return dayWeekTxt;
    default:
      dayWeekTxt = "ERRO: DIA DA SEMANA NÃO ESPECIFICADO.";
      return dayWeekTxt;
  }
}

const data = new Date("1945-11-22 00:05:23");
const day = data.getDate();
const dayWeek = data.getDay();
const dayWeekTxt = getDayWeekTxt(dayWeek);

console.log(day, dayWeekTxt);
