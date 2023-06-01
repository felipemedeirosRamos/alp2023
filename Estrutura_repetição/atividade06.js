let n = Number(prompt("Digite um número para conversão em binário:"));
let d = n;
let binario = "";
while (d > 0) {
    binario = (d % 2) + binario;
    d = Math.floor(d / 2);
  }
document.write(`O numero decimal ${n} em binário é ${binario}`)