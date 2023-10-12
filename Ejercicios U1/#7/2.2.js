

function addOnlyNums(...numeros){
    var total = 0;
    for(let i= 0; i< numeros.length; i++){
    if(!isNaN(numeros)){
        total += numeros[i];
    }
    }
    return total;
}

console.log(addOnlyNums(1, 'cat', 3, 4)); 