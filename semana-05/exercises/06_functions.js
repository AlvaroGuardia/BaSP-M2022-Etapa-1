// Functions

console.log('-EXERCISE 6: FUNCTIONS');

/* a) Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the 
result in a variable, showing the value of said variable in the browser console.*/

function sum(a, b) {
    return a + b;
};
var resultSum = sum(80, 150);
console.log('The result of exercise 6-a is: ', resultSum);

/* b) To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert 
clarifying that one of the parameters has an error and return the NaN value as a result.*/

function validateAndSum(a, b) {
    if (typeof a !== 'number') {
        alert('The result of exercise 6-b is: the first variable is not a number');
        return;
    } else if (typeof b !== 'number') {
        alert('The result of exercise 6-b is: the second variable is not a number');
        return;
    }
    else {
        return a + b;
    }
};
var resultAlteredSum = sum(5, 4);
console.log('The result of exercise 6-b is:', resultAlteredSum);

/* c) Create a validate integer function that takes a number as a parameter and returns true if it is an integer.*/

function validateInteger(number) {
    if (typeof number !== 'number') {
        console.log('The result of exercise 6-c is: the parameter is not a number');
        return;
    } else if (number % 1 == 0) {
        return true;
    } else {
        return false;
    }
};
console.log('The result of exercise 6-c is:', validateInteger(8.6));

/* d) To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals,
 show an alert with the error and return the number converted to integer (rounded).*/

function completeValidateAndSum(param1, param2) {
    if (typeof param1 !== 'number') {
        alert('The result of exercise 6-d is: the first variable is not a number');
        return;
    } else if (typeof param2 !== 'number') {
        alert('The result of exercise 6-d is: the second variable is not a number');
        return;
    }
    else if (param1 % 1 != 0 || param2 % 1 != 0) {
        alert('The result of exercise 6-d is: one of the parameters is not integer. The result is going to be rounded.');
        return Math.round(param1 + param2);
    } else {
        return param1 + param2;
    }
};
console.log('The result of exercise 6-d is:', completeValidateAndSum(15, 4.98));

/* e) Convert the validation of exercise 6b) into a separate function and call it within the sum function, checking that
 everything continues to work the same.*/

function validateParameter(param) {
    if (typeof param !== 'number') {
        alert("The result of exercise 6-e is: the parameter is not a number");
        return;
    }
    return param;
};
function sumWithoutValidate(a, b) {
    return (validateParameter(a) + validateParameter(b));
};
console.log('The result of exercise 6-e is:', sumWithoutValidate(5, 'hello'));