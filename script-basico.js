// Desenvolva um algoritmo que realize a soma entre 188 e 73.

const sumOfArray = numbers => numbers.reduce((a, b) => a + b, 0);
const sumOfNumbers = (number, otherNumber) => number + otherNumber;

console.log(sumOfArray([188, 73]))
console.log(sumOfNumbers(188, 73))

/* ------------- */

// Desenvolva um algoritmo que realize a subtração entre 133 e 87. 

const subtraction = (number, otherNumber) => number - otherNumber;

console.log(subtraction(87, 133))

/* ------------- */

// Desenvolva um algoritmo que realize a divisão de 192 por 12. 

const division = (number, otherNumber) => number / otherNumber;

console.log(division(192, 12))

/* ------------- */

/* 
    Escreva um algoritmo que faça conversão 
    de temperatura em graus Fahrenheit
    para graus Celsius e retorne a temperatura em Celsius. 
*/

const fahrenheitForCelsius = value => (value - 32) / 1.8

console.log(fahrenheitForCelsius(50))

/* ------------- */

/* 
    Sabendo que o fuso 
    horário da França em relação ao 
    Brasil é de +5 horas (no horário de verão na França), 
    elabore um programa que leia a hora no Brasil e informe 
    a hora na França.
*/

const timezone = hour => `Hora no Brasil: ${hour}\nHora na frança: ${hour + 5}`

console.log(timezone(12.30))

/* ------------- */



