let n = Number(prompt("Digite um número:"));
let s = "";
document.write(`n = ${n} <br/>`);
for (let i=1; i<=n; i++){
    s = s + " " + i;
    document.write(`${s} <br/>`)
}