
const numeros = [a,b,c];

function suma(...numeros){
    var total = 0;
    for(let i= 0; i< numeros.length; i++){
    total += numeros[i];
    }
    return total;
}

console.log(suma(1,3,5,6));





