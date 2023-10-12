//Condicionales

//1
var numero =  6

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número no es par.");
}

//2
var edad = 19
if (parseInt(edad) >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

//3
var  edad = 26
var localidad = "madrid"


if (edad > 25 && localidad.toLowerCase === "madrid") {
    console.log("Enhorabuena");
} else {
    console.log("No cumples los requisitos.");
}

//4
const numero = prompt("Introduce un número:");

if (parseInt(numero) > 100) {
    const descuento = numero * 0.15;
    const nuevoNumero = numero - descuento;
    console.log(`El nuevo número con descuento es: ${nuevoNumero}`);
} else {
    console.log("El número no es superior a 100.");
}

//5
const nombre = prompt("Introduce tu nombre:");

if (nombre.toLowerCase() === "pablo" || nombre.toLowerCase() === "eduardo") {
    console.log("Bienvenido.");
} else if (nombre.toLowerCase() === "ana" || nombre.toLowerCase() === "clara") {
    console.log("Bienvenida.");
} else {
    console.log("Nombre no reconocido.");
}

//6
const localidad = prompt("¿Dónde vives?");
const edad = prompt("¿Cuántos años tienes?");

if (localidad.toLowerCase() === "madrid" && (edad >= 18 && edad <= 30)) {
    console.log("Puedes acceder al carnet de empresarios emprendedores.");
} else {
    console.log("No cumples los requisitos.");
}


// IF / ELSE

//1 
const nombre = prompt("Introduce tu nombre:");

if (nombre.toLowerCase() === "ricardo") {
    const apellidosricardo = "García Nuñez";
    document.write("Apellidos: " + apellidosricardo);
} else {
    const apellidos = prompt("Introduce tus apellidos:");
    document.write(`Apellidos: ${apellidos}`);
}

//2 
const edad = prompt("Introduce tu edad:");

if (edad >= 67) {
    console.log("Puedes jubilarte.");
} else {
    console.log("No puedes jubilarte aún.");
}

//3
const edad = prompt("Introduce tu edad:");

if (edad < 5) {
    console.log("Debes estar en el jardín de infancia.");
} else if (edad >= 6 && edad <= 11) {
    console.log("Debes estar en primaria.");
} else if (edad >= 12 && edad <= 16) {
    console.log("Debes estar en la ESO.");
} else if (edad >= 17 && edad <= 21) {
    console.log("Debes estar en Bachillerato o Ciclos.");
} else {
    console.log("Debes estar en la Universidad.");
}

//4
const numHermanos = parseInt(prompt("Introduce el número de hermanos que tienes:"));
const cantidad = parseFloat(prompt("Introduce una cantidad:"));

if (numHermanos > 3) {
    const descuento = cantidad * 0.15;
    console.log(`Cantidad con un 15% de descuento: ${cantidad - descuento}`);
} else if (numHermanos < 3) {
    const descuento = cantidad * 0.05;
    console.log(`Cantidad con un 5% de descuento: ${cantidad - descuento}`);
} else {
    console.log(`Cantidad sin descuento: ${cantidad}`);
}

//5
const notaExamen1 = parseFloat(prompt("Introduce la nota del primer examen:"));
const notaExamen2 = parseFloat(prompt("Introduce la nota del segundo examen:"));
const notaTrabajo1 = parseFloat(prompt("Introduce la nota del primer trabajo:"));
const notaTrabajo2 = parseFloat(prompt("Introduce la nota del segundo trabajo:"));

const mediaExamen = (notaExamen1 + notaExamen2) / 2;
const mediaTrabajo = (notaTrabajo1 + notaTrabajo2) / 2;
const mediaTotal = (mediaExamen * 0.75) + (mediaTrabajo * 0.25);

if (mediaTotal >= 4.5 && mediaExamen >= 4.5 && mediaTrabajo >= 4.5) {
    console.log("Has aprobado la asignatura.");
} else {
    console.log("No has aprobado la asignatura.");
}

//Switch
//1
const mes = prompt("Introduce el nombre de un mes:");

switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes tiene 31 días.");
        break;
    case "febrero":
        console.log("El mes tiene 28 o 29 días, dependiendo del año.");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("El mes tiene 30 días.");
        break;
    default:
        console.log("Nombre de mes no válido.");
}

//2
const numero = prompt("Introduce un número:");

switch (true) {
    case numero % 2 === 0:
        console.log("El número es par.");
        break;
    case numero % 3 === 0:
        console.log("El número es múltiplo de tres.");
        break;
    case numero % 5 === 0:
        console.log("El número es múltiplo de cinco.");
        break;
    default:
        console.log("El número no es par ni múltiplo de tres ni múltiplo de cinco.");
}

//3
const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));
const operacion = prompt("Introduce la operación (+, -, *, /):");

var resultado;

switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación no válida.");
}

//BUCLES
//1
for (let i = 1; i <= 10; i++) {
    document.write(i + "<hr>");
}

//2
const numeroUsuario = prompt("Introduce un numero:");

for (let i = numeroUsuario; i <= 100; i++) {
    document.write(i + "<br>");
}

//3
let numero;

do {
    numero = prompt("Introduce un numero (0 para salir):");
    if (numero !== 0) {
        console.log(numero);
    }
} while (numero !== 0);

//4
let palabra;

do {
    palabra = prompt("Introduce una palabra (SALIR para terminar):");
    document.write(palabra + "<br>");
} while (palabra.toLowerCase() !== "salir");

//5
let suma = 0;

for (let i = 1; i <= 10; i++) {
    const numero = parseInt(prompt(`Introduce el numero ${i}:`));
    suma += numero;
}

console.log(`La suma de los numeros es: ${suma}`);

//6
const numero = parseInt(prompt("Introduce un numero:"));

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);

}

//7
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroUsuario;

do {
    numeroUsuario = prompt("Adivina el número (entre 1 y 100):");
    intentos++;

    if (numeroUsuario < numeroAleatorio) {
        console.log("El numero buscado es mayor.");
    } else if (numeroUsuario > numeroAleatorio) {
        console.log("El numero buscado es menor.");
    } else {
        console.log(`¡Adivinaste el numero ${numeroAleatorio} en ${intentos} intentos!`);
    }
} while (numeroUsuario !== numeroAleatorio);



