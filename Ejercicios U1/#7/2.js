const numeros=[1,'cat',3,4];

function addOnlyNums(...numeros){
    var total = 0;
    const num = parseInt(numeros);
    for(let i= 0; i< numeros.length; i++){
    total += numeros[i];
    if(!isNaN(numeros)){
        return numeros;
    }
    }
    
}

console.log(addOnlyNums(1, 2, '3', '4', 'five', 6));