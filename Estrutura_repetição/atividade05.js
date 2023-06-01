let base = Number(prompt("Digite a base da potência:"));
let exp = Number(prompt("Digite o expoente da potência:"));
let p = 1;
for (let i = 1; i<=exp; i++){
    p = p * base;
}
document.write(`${base} elevado a ${exp} = ${p}`)