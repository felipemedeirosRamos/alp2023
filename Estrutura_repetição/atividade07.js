lert (`Digite quantos números positivos desejar! Quando quiser encerrar a leitura digite "0"!`);
let n;
let sn = 0;
let qn = 0;
let sPar = 0;
let sImpar = 0;
let qPar = 0;
let qImpar = 0;
for (;;){
    n = Number(prompt(`Digite um número ou "0" para encerrar:`));
    if(n!==0){
        sn+=n;
        qn++;
        if (n%2==0){
            qPar++;
            sPar += n;
        }
        else{
            qImpar++;
            sImpar += n;
        }
    }
    else{
        break;
    }
    document.write(`${qn}º número: ${n} <br/>`);
}
document.write("<p>");
let mPar = sPar/qPar;
let mGer = sn/qn;
document.write(`Quantidade de números pares: ${qPar}. <br/> Quantidade de números ímpares: ${qImpar}.<br/>`);
document.write(`A média dos números pares é ${mPar.toFixed(2)}. <br/> A média geral é ${mGer.toFixed(2)}`);