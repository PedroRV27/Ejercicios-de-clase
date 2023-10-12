    // Función para comprobar si un número es impar
    function isOdd(x) {
        return x % 2 !== 0;
    }
    
    // Función para comprobar si un número está dentro de un rango
    function inRange(x, min, max) {
        return x >= min && x <= max;
    }
    
    // Función para obtener el número más grande de un array
    function getBiggestNumber(numbers) {
        return Math.max(...numbers);
    }
    
    // Función para obtener un porcentaje de un número
    function getPercentage(number, percentage) {
        return (number * percentage) / 100;
    }
    
    // Función para obtener una secuencia aleatoria de colores
    function getRandomColorSequence(colors, length) {
        const sequence = [];
        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        sequence.push(colors[randomIndex]);
        }
        return sequence;
    }
    
    // Función para obtener una jugada aleatoria de piedra, papel o tijera
    function getRockPaperScissor() {
        const options = ["rock", "paper", "scissor"];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    
    // Función para obtener una secuencia aleatoria de jugadas de piedra, papel o tijera
    function getRockPaperScissorRandomSequence(length) {
        const sequence = [];
        for (let i = 0; i < length; i++) {
        sequence.push(getRockPaperScissor());
        }
        return sequence;
    }
    
    // Función para filtrar números mayores que un valor dado
    function filterNumbersGreaterThan(numbers, filter) {
        return numbers.filter((num) => num < filter);
    }
    
    // Función para calcular el factorial de un número
    function getFactorial(x) {
        if (x === 0 || x === 1) {
        return 1;
        } else {
        return x * getFactorial(x - 1);
        }
    }
    
    // Función para comprobar si dos arrays son iguales
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
        return false;
        }
        for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
        }
        return true;
    }
    
    // Función para convertir un texto a "Hacker Speak"
    function toHackerSpeak(text) {
        const replacements = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5',
        };
        return text.split('').map((char) => replacements[char] || char).join('');
    }
    
    // Función para obtener la extensión de un archivo
    function getFileExtension(file) {
        return file.split('.').pop();
    }
    
    // Función para aplanar un array 2D a un array 1D
    function flatArray(arr) {
        return arr.flat();
    }
    
    // Función para eliminar duplicados de un array
    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
    
    // Función para contar la cantidad de veces que una letra aparece en un texto
    function countLetter(letter, text) {
        const regex = new RegExp(letter, 'g');
        const matches = text.match(regex);
        return matches ? matches.length : 0;
    }
    
    // Función para determinar si se puede jugar una carta en el juego Uno
    function canPlay(hand, face) {
        for (const card of hand) {
        const [handColor, handNumber] = card.split(' ');
        const [faceColor, faceNumber] = face.split(' ');
    
        if (handColor === faceColor || handNumber === faceNumber) {
            return true;
        }
        }
        return false;
    }
    
    // Función para eliminar palabras de un texto
    function removeWords(str, words) {
        for (const word of words) {
        str = str.replace(new RegExp(word, 'g'), '');
        }
        return str;
    }
    
    // Función para obtener un rango de números
    function getRange(a, b, inclusive = true) {
        const result = [];
        const increment = a < b ? 1 : -1;
        for (let i = a; inclusive ? i <= b : i < b; i += increment) {
        result.push(i);
        }
        return result;
    }
    