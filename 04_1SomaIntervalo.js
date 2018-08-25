/*
Testes JS
*/

//Exercício 04_1 Soma de um Intervalo


// Your code here.

//var arrnum=range(1, 10);

//console.log(arr.length)
/*
function range0(start, end){
    var arr=[];
    for(var i=start; i<=end; i++)
        arr.push(i);
    return arr
}
*/

function range(start, end, incr){
    var arr=[];
    if (incr==undefined)
        incr=1;

    if (start<end) {
        for(var i=start; i<=end; i=i+Math.abs(incr))
            arr.push(i);
    }
    else if (start>end) {
        for(var i=start; i>=end; i=i-Math.abs(incr))
            arr.push(i);
    }
    return arr
}


function sum(arrarg){
    total=0;
    for(var j=0;j<arrarg.length;j++)
        total=total+arrarg[j];
        //console.log(total);
        //console.log(j+"-j");
        //console.log(arrarg+"-arr");
    return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write (range(1, 10),"<br>");

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
document.write (range(5, 2, -1),"<br>");

console.log(sum(range(1, 10)));
// → 55
document.write (sum(range(1, 10)),"<br>");

console.log(range(10, 3, 3));
document.write (range(10, 3, 3),"<br>");

//console.log(sum(arrnum));
