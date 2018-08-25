/*
Testes JS
*/

//Exercício 04_3 A Lista


// Your code here.


function arrayToList(arr){
    list = {value: arr[arr.length-1], rest: null};
    for(var i=arr.length-2; i>=0; i--)
        list = {value: arr[i], rest: list} 
    return list
}

console.log(JSON.stringify(arrayToList([10, 20])));
// → {value: 10, rest: {value: 20, rest: null}}


function listToArray(list){
    var arr=[]
    for (var node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

console.log(JSON.stringify(listToArray(arrayToList([10, 20, 30]))));
 // → [10, 20, 30]


function prepend(elem, list){
    ob={};
    ob.value=elem;
    ob.rest=list;
    return ob
}

console.log(JSON.stringify(prepend(10, prepend(20, null))));
// → {value: 10, rest: {value: 20, rest: null}}

function nth (list, num){
    var valor=list.value;
    var aux="";
    var cont=-1
    for (var node = list; node; node = node.rest) {
        if (cont==num){
            ////cont=cont+1;
            ////node.rest=null;
            //console.log("1if");
            break
        }
        else if (aux==undefined){
            cont=cont+1;
            valor=aux;
            //console.log("2if");
            break
        }  
        else if (node.rest==null){
            ////valor=undefined;
            cont=cont+1;
            aux=undefined;
            valor=node.value;
            //console.log("3if");
            node.rest=true
        }
        else{
            cont=cont+1;
            valor=node.value;
            //console.log("4if");
        }
    //console.log(num);
    //console.log(cont);
    //console.log(valor);
    //console.log(JSON.stringify(node));
    //console.log("______")
    }
    return valor
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//var x=0

function nthrec (list, num){
  //var x=list.value
  //console.log("-------");
  //console.log(list.value);
  //console.log(num);
  //console.log(JSON.stringify(list));
    
    if (num==0){
        //var x=list.value;
        return list.value
    }
    else if (list.rest==null){
        //var x=list.value;
        return undefined
    }
    else{
        var ls = list.rest;
        return nthrec(ls, num-1)
    }
}
console.log("rec "+nthrec(arrayToList([10, 20, 30]), 1));
// → 20

/*
function test (yyy){
  var x=4+yyy
  console.log("-------");
  console.log(yyy);
  console.log(x);
    
    if (yyy==0){
        //var x=list.value;
        return x
    }
    else{
        xyy=yyy-1
        return (yyy-1)
    }
}
console.log("teste 1 "+test(6));


function test2 (yyy){
    function test3 (yyy){
      var x=40+yyy
      return x
    }
    return test3(yyy)
}
console.log("teste 2 "+test2(2));
*/



  document.write (hash,"<br>");
    }
    nimpress += 1;
}
