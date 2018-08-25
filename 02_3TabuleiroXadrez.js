/*
Testes JS
*/

//Exercício 02_3 Tabuleiro de Xadrez

var string="";
var string2="";
var size=6;
var colunaI=1;
var colunaP=1;
var linha=1;

while (linha<=size){
    while (colunaI<=size){
        if(colunaP%2==0){
        string+="   ";
        string2+="   ";
        colunaI+=1;
        colunaP+=1;
        }
        else if(colunaP%2!=0){
        string+=" # ";
        string2+=" # ";
        colunaI+=1;
        colunaP+=1;
        }
//        else{
//        coluna+=1;
//        }
    }
string+="\n";
string2+="<br>";
//console.log("colunaI"+coluna);
//console.log("linhaI"+linha);
linha+=1;
if(linha%2==0){
        colunaI=1;
        colunaP=0;
        }
        else{
        colunaI=1;
        colunaP=1;
        }
//console.log("colunaD"+coluna);
//console.log("linhaD"+linha);
}
console.log(string);
//alert (string)
document.write (string2,"<br>");
