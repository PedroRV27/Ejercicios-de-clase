const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroUsuario;

do {
    numeroUsuario = prompt("Adivina el número (entre 1 y 100):");
    intentos++;

    if (numeroUsuario < numeroAleatorio) {
        console.log("El número buscado es mayor.");
    } else if (numeroUsuario > numeroAleatorio) {
        console.log("El número buscado es menor.");
    } else {
        console.log('¡Numero adivinido  ${numeroAleatorio} en ${intentos} intentos');
    }
} while (numeroUsuario !== numeroAleatorio);