/*
Operators - Arithmetic operators , assignment operators , comparison operators
logical operators, ternary 
*/
//Arithmetic operators - This performs basic maths operations.
let x = 5;
let y = 12;
y +=5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x**y);

//assignment operator - assigning a value to a variable
let a = 1;
let b;
b = 3
console.log(a + '' + b);

//comparison operator - compare values
console.log(a === b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

//logical operator - gives a boolean true or false : || - or , && - and ,not
const xCard = 34;
const yCard = 79;
if(xCard > 30 && yCard < 100){
    console.log('Discount on card')
}
if(xCard < 25 || yCard > 70){
    console.log('Discount on card not allowed')
}
//Ternary operator
let min = 18;
let canV = min <= 18 ? 'yes': 'No';
console.log(canV)