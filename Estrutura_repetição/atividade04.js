let n = Number(prompt("Digite um número"));

if (n==1 || n===2){
    document.write("O número é primo!");
}
else if (n>2){
    let div=0;
    for (let i = 2; i<=n; i++){
        if (n%i==0){
          div++;
        }
    }
    if(div==2){
        document.write("O número é primo!");
    }
    else {
        document.write("O número não é primo!");
    }
}