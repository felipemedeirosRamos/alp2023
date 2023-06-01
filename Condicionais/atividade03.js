let ano = Number(prompt("Digite o ano do século"));
let seculo = Math.floor(ano/100);
if(seculo % 100 !=0){
   let resultado = (seculo + 1);
   document.write(resultado);

}