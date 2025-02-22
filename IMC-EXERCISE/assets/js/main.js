const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválido", false);
    return;
  }

  document.querySelector(".resultado").style.display = "block";
});

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  // resultado.innerHTML = msg;
  resultado.innerHTML = "";
  const p = createP();
  p.innerHTML = msg;
  resultado.appendChild(p);
}
