// If Else

console.log('-EXERCISE 4: IF ELSE');

/*a) Create a random number between 0 and 1 using the function Math.random(). If the value is greater or equal than 0,5, 
show an alert with a message "Greater than 0,5". If not, then show an alert with a message "Lower than 0.5"  */

var randomNumber = Math.random(0, 1);
if (randomNumber >= 0.5) {
    alert('The result of exercise 4-a is: Greater than 0,5');
} else {
    alert('The result of exercise 4-a is: Lower than 0,5');
};

/*b) Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
"Bebé" if the age is less than 2 years
"Niño" if the age is between 2 and 12 years
"Adolescente" if the age is between 13 and 19 years
"Joven" if the age is between 20 and 30 years
"Adulto" between 31 and 60 years
“Adulto mayor” between 61 and 75 years
"Anciano" if older than 75 years*/

var age = Math.round(Math.random() * 100);
if (age < 2) {
    alert('The result of exercise 4-b is: Baby')
} else if (age <= 12) {
    alert('The result of exercise 4-b is: Child');
} else if (age <= 19) {
    alert('The result of exercise 4-b is: Teenager');
} else if (age <= 30) {
    alert('The result of exercise 4-b is: Young');
} else if (age <= 60) {
    alert('The result of exercise 4-b is: Adult');
} else if (age <= 75) {
    alert('The result of exercise 4-b is: older Adult');
} else {
    alert('The result of exercise 4-b is: Old');
};