/*
Testes JS
*/

//Exercício 2 FizzBuzz

var num=1;

while (num<=100) {
    if (num%3==0 & num%5==0){
    console.log(num+"FizzBuzz");
    document.write ("FizzBuzz","<br>");
    num+=1;
    }
    else if (num%3==0 || num%5==0) {
      if (num%3==0) {
      console.log(num+"Fizz");
      document.write ("Fizz","<br>");
      num+=1;
      }
      else {
      console.log(num+"Buzz");
      document.write ("Buzz","<br>");
      num+=1;
      }
    }
    else {
    console.log(num);
    document.write (num,"<br>");
    num+=1;
    }
}
