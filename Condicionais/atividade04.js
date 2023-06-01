let a, b, c, delta, x1, x2;
 
a = prompt("a = ");
b = prompt("b = ");
c = prompt("c = ");
 
if (a != 0) {
  delta = b * b - 4 * a * c;
 
  if (delta < 0) {
    alert("DELTA = " + delta + "\n" + "Não existem raízes reais!");
  } else if (delta == 0) {
    x1 = -b / (2 * a);
    alert("DELTA = " + delta + "\n" + "x' = x'' = " + x1.toFixed(2));
  } else {
    x1 = (-b - Math.sqrt(delta)) / (2 * a);
    x2 = (-b + Math.sqrt(delta)) / (2 * a);
    alert("x' = " + x1.toFixed(2) + "\n" + "x'' = " + x2.toFixed(2));
  }
} else {
  alert("Não é uma equação do 2º grau!");
}