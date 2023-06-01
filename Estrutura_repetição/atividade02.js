let num = Number(prompt("Digite o numero para descobrir seu fatorial:"));
let fato = 1;

for (let i = num; i > 0; i--) {
    fato *= i;
}
document.write(`O fatorial de ${num} é ${fato}!`)