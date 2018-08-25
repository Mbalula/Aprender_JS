/*
Testes JS
*/

//Exercício 1 Triângulo com Loop
var hash = "";
var nimpress= 1;
var contador = 0;

while (nimpress <= 7) {

  while (contador < nimpress) {
    hash += "#";
    contador += 1;

  document.write (hash,"<br>");
    }
    nimpress += 1;
}
