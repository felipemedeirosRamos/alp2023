let ano = Number(prompt("Digite o ano"));

if (ano>1) {
    if (ano%4==0 && (100!=0 || ano%400)){
        document.write(` ${ano} é bissexto`);
    } else{
        document.write(` ${ano} não é bissexto`);
    }

}
else{
    document.write("digite um ano valido");
}