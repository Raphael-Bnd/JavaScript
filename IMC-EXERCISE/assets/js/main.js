const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Evento previnido");
  setResult("Olá mundo");
  document.querySelector(".resultado").style.display = "block";
});

function setResult(msg) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = msg;
}
