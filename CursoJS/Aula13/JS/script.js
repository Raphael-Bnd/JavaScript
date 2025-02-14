const numero = Number(prompt('Digite seu número:'));
const numeroPrin = document.getElementById('numero-prin');
const DiviLugar = document.getElementById('divPor2');
const divididoPor2 = numero / 2;

numeroPrin.innerHTML = numero;
DiviLugar.innerHTML = divididoPor2;
