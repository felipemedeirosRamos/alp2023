let deposito = Number(prompt("Digite o valor do depósito em R$"));
let tx = Number(prompt("Digite a taxa de juros da poupança ao mês"));
let saldo = deposito;
let juros= 0;
for (t=1; t<=24; t++){
    juros = saldo * (tx/100);
    saldo = saldo + juros;
    document.write(`Saldo no ${t}º mês é R$ ${saldo.toFixed(2)} <br/>`);
}
let l = saldo-deposito;
document.write(`Lucro obtido com juros é R$ ${l.toFixed(2)}`);