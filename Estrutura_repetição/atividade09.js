let n = Number(prompt("Digite a quantidade de números para exibir da sequência de Fibonacci:"))
let el1 = 1;
let el2 = 1;
document.write(`Sequência de Fibonacci é `);
for (let i = 1; i<=n; i++){
    document.write(`${el1}, ${el2}, `);
    el1 += el2;
    el2 += el1;
}