let a = Number(prompt("Digite o valor de (a)"));
let b = Number(prompt("Digite o valor de (b)"));
let c = Number(prompt("Digite o valor de (c)"));
 if(a<b+c && b<a+c && c<b+a){
    if(a==b && b==c){
        document.write(`O triangulo é equilatero`);
    }else if(a==b || b==c || a==c){
        document.write(`O triangulo é isósceles`);
    }else if(a!=b && b!=c && a!=c){
        document.write(`O triangulo é escaleno`);
    }
    
 }