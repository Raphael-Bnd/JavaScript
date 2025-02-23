// (CONDIÇÃO) ? 'VALOR TRUE' : 'VALOR FALSE';
const pontUser = 1000;
const userLevel = pontUser >= 1000 ? "User VIP" : "User";

const userColor = 'Purple';
const defaultColor = userColor || 'White';

console.log(userLevel, defaultColor);

// if (pontUser >= 1000) {
//   console.log("User VIP");
// } else {
//   console.log("User");
// }
