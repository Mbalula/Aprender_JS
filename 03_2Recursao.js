/*
Testes JS
*/

//Exercício 03_2 Recursão


// Your code here.

//console.log(false);

/*var test = function(){
    if (true)
        return true
}
*/

//console.log(test())


//var n=0

var isEven = function(n){
    if (n == 0)
       return true;

    else if (n == 1)
        return false;

    else
        return isEven(n-2);
}

console.log(isEven(50)); // → true
document.write (isEven(50),"<br>");

console.log(isEven(75)); // → false
document.write (isEven(75),"<br>");

console.log(isEven(-1)); // → ??
document.write (isEven(-1),"<br>");
