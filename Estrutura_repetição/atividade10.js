alert(`Digite quantas temperaturas desejar! Para encerrar a leitura digite "0"!`);
let maxTempo = null;
let minTempo = null;
let sTempo = 0;
let qTempo = 0;
for(;;){
    tempo = Number(prompt(`Digite uma temperatura ou "0" para encerrar:`));
    if (tempo!=0){
        sTempo += tempo;
        qTempo++;
        document.write(tempo + "<br/>");
        if (tempo>maxTempo){
            maxTempo = tempo;
        }
        if (tempo<minTempo){
            minTempo = tempo;
        }
    }
    else {
        break;
    }
}
document.write(`Maior temperatura apresentada: ${maxTempo}°<br/>`);
document.write(`Menor temperatura apresentada: ${minTempo}°<br/>`);
document.write(`A média das temperaturas apresentadas é: ${sTempo/qTempo}`);