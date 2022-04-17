// Arrays

console.log('-EXERCISE 3: ARRAYS');

/* a) Given a whole year month array, show in console the month 5 and 11.*/

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];
var arrayForExerciseG = Object.assign([], months)
console.log('The result of exercise 3-a is: ', months[4], ' and ', months[10]);

/*b) Sort the array of months alphabetically and show in console.*/

months.sort();
console.log('The result of exercise 3-b is: ', months);

/*c) Add an element at the beggining and the end of the array*/

months.unshift("First Element");
months.push("Last Element");
console.log('The result of exercise 3-c is: ', months);

/*d) Remove an element at the beggining and at the end of the array*/

months.shift();
months.pop();
console.log('The result of exercise 3-d is: ', months);

/*e) Invert the array order*/

months.reverse();
console.log('The result of exercise 3-e is: ', months);

/*f) Join all the elements of the array in a single string where each month is separated by a hyphen*/

var joinedArrayElements = months.join('-');
console.log('The result of exercise 3-f is: ', joinedArrayElements);

/*g) Create a copy of the array that contains the elements from Mayo to Noviembre*/

var monthsCopy = arrayForExerciseG.slice(4, 11);
console.log('The result of exercise 3-g is: ', monthsCopy);