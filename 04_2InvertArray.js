/*
Testes JS
*/

//Exercício 04_2 Invertendo um array


// Your code here.

var arr = ["A", "B", "C"];

var arrrev = arr.reverse();

console.log(arr);
// → ["C", "B", "A"];

console.log(arrrev);
// → ["C", "B", "A"];

arr = ["A", "B", "C"];

function reverseArray(a){
    var ainv=[]
    for (i=0; i<a.length; i++){
        ainv.unshift(a[i])
    }
    return ainv
}

console.log(reverseArray(arr));
// → ["C", "B", "A"];

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


var arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(a){
    var x=0
    for (i=0; (i+1)<=(a.length/2); i++){
        x=a[i];
        a[i]=a[a.length-1-i];
        a[a.length-1-i]=x;
    }
    return a
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


  document.write (hash,"<br>");
    }
    nimpress += 1;
}
