/*


FALSY VALORES QUE RETORNAM EM FALSE
false
0
"", '', ``
null / undefined
NaN
*/

console.log("Luiz" && "Maria"); // RETORNA O ULTIMO VALOR DE UM TRUE
console.log("Luiz" && "" && "Maria"); // RETORNA O VALOR "FALSY"
console.log("Luiz" && NaN && "Maria"); // RETORNA O VALOR "FALSY"

function falaOi() {
  return "Oi";
}

const vaiExec = "Rebert Richards";

console.log(vaiExec && falaOi());

console.log(0 || false || null || "Roberto" || true); // || -> sempre retorna o 1º valor verdadeiro (!= falsy)

const userColor = "Purple";
const defaultColor = userColor || "Black";
console.log(defaultColor);

const a = 0;
const b = null;
const c = "false"; // here
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
