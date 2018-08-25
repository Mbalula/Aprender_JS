/*
Testes JS
*/

//Exercício 03_3 Contando Feijões

var contador=0;
//var palavraBs="";
var N=0;

var countBs = function(palavraBs){

    while (N < palavraBs.length ) {

        if (palavraBs.charAt (N)== "B"){
            console.log("LetrasB"+"-"+ palavraBs.charAt (N))
            N=N+1;
            contador+=1;
    }
        else {
            console.log("LetrasB"+"-"+ palavraBs.charAt (N));
            N=N+1;
            }
/*    console.log("N1"+"-"+N)
    console.log("LetrasB"+"-"+ palavraBs.charAt (N))
    console.log("tamanho de palavras"+"-"+palavraBs.length) */

    }
console.log("N total letras"+"-"+N)
return contador
}

console.log("n de Bs"+"-"+countBs("BBC")); // → 2
document.write (countBs("BBC"),"<br>");

/*
console.log(countBs("BBCB")); // → 2
console.log("contador"+"-"+contador);
console.log(N);
console.log("LetrasB"+"-"+palavraBs.charAt (N));
console.log("tamanho de palavras"+"-"+palavraBs.length);
*/
N=0
letra_="xxx"
contador=0
countChar = function(palavra, letra){
    letra_=letra
    while (N < palavra.length ) {

        if (palavra.charAt (N)== letra){
            console.log("Letras "+letra_+"-"+ palavra.charAt (N))
            N=N+1;
            contador+=1;
    }
        else {
            console.log("Letras "+letra_+"-"+ palavra.charAt (N));
            N=N+1;
            }
/*    console.log("N1"+"-"+N)
    console.log("LetrasB"+"-"+ palavraBs.charAt (N))
    console.log("tamanho de palavras"+"-"+palavraBs.length) */

    }
console.log("N total letras"+"-"+N)
console.log(letra_)
return contador

}
console.log(letra_)
console.log("n de letras "+letra_+"-"+countChar("kakkerlak", "k")); // → 4
document.write (countChar("kakkerlak", "k"),"<br>");
