lert(`Digite quantas idades desejar! Para encerrar a leitura digite "0"!`);
let id;
let sId = 0;
let qId = 0;
document.write(`Idades informadas:<br/>`);
for (;;){
    id = Number(prompt("Digite uma idade:"));
    if (id !== 0){
        if(id>=18){
            sId+=id;
            qId++;
        }
    }
    else{
        break;
    }
    document.write(`${id} <br/>`)
}
document.write("<p>");
let mId = sId/qId;
document.write(`Soma das pessoas maiores de idade: ${sId} <br/>`);
document.write(`Média das pessoas maiores de idade: ${mId.toFixed(2)}`);