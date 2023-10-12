1//
const sum = (num1, num2) => num1 + num2;

console.log(sum(40, 2));
console.log(sum(42, 0));
console.log("the answer to everything is", sum(42, 0));

2//
const stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

stringLength(longestCityNameInTheWorld);

3//
const stringLength = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
};

stringLength("willynilly");

4//
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

const showAlert = (name) => {
    alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};

showAlert("you ball of fluff");

5//
const oneTwoThreeRotate = () => {
    Array.from(document.querySelectorAll('div, p, span, img, a, body')).forEach((tag) => {
        tag.style.transform = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
    });
};

oneTwoThreeRotate();

6//
const greet = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;


7//
const sumArray = (arr) => arr.reduce((acc, current) => acc + current, 0);


8//
let eye = "eye";

const fire = () => `bulls-${eye}`;

9//
const fibonacci = (n) => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

