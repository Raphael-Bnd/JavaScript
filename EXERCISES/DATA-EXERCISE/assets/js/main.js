const data = new Date();
const year = data.getFullYear();
const hora = zero(data.getHours(), 2);
let min = zero(data.getMinutes(), 2);
const day = data.getDate();
const dayWeek = data.getDay();
const dayWeekTxt = getDayWeekTxt(dayWeek);
const month = data.getMonth();
const monthTxt = getMonthTxt(month);
const msg = `${dayWeekTxt}, ${day} de ${monthTxt} de ${year} ${hora}:${min}`;
setHour(msg);

function createHour() {
  const h = document.createElement("hour");
  return h;
}

function zero(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function setHour(msg) {
  const hour = document.querySelector(".txtTitle");
  hour.innerHTML = "";

  const h = createHour();

  h.innerHTML = msg;
  hour.appendChild(h);
}

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
function getMonthTxt(month) {
  let MonthTxt;

  switch (month) {
    case 0:
      MonthTxt = "Janeiro";
      return MonthTxt;
    case 1:
      MonthTxt = "Fevereiro";
      return MonthTxt;
    case 2:
      MonthTxt = "Março";
      return MonthTxt;
    case 3:
      MonthTxt = "Abril";
      return MonthTxt;
    case 4:
      MonthTxt = "Maio";
      return MonthTxt;
    case 5:
      MonthTxt = "Junho";
      return MonthTxt;
    case 6:
      MonthTxt = "Julho";
      return MonthTxt;
    case 7:
      MonthTxt = "Agosto";
      return MonthTxt;
    case 8:
      MonthTxt = "Setembro";
      return MonthTxt;
    case 9:
      MonthTxt = "Outubro";
      return MonthTxt;
    case 10:
      MonthTxt = "Novembro";
      return MonthTxt;
    case 11:
      MonthTxt = "Dezembro";
      return MonthTxt;
    default:
      MonthTxt = "ERRO: MÊS NÃO ESPECIFICADO.";
      return MonthTxt;
  }
}
