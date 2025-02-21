// if (hora > 12) {
//   console.log("Boa Tarde!");
// } else if (hora == 12) {
//   console.log("É hora de almoçar!");
// } else {
//   console.log("Bom dia!");
// }

const hora = 53;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  // pode-se ter varios else if em um sistema
  console.log("Boa Tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite!");
} else { // só posso ter um else na checagem
  console.log("ERRO: HORARIO NÃO PREVISTO PELO SISTEMA!");
}


const hvMoney = true;
if (hvMoney){
  console.log("I'll go out today.");
} else {
  console.log("Nah, i'm not going out today.")
}