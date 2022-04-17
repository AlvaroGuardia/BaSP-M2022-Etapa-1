// For

console.log('-EXERCISE 5: FOR');

/*a)  Create an array that contain five words and go over the array using a loop for of JavaScript to show an alert using
each words.*/

var fiveWordsArray = ['my', 'name', 'is', 'alvaro', 'guardia'];
alert('The result of exercise 5-a is: ');
for (counter = 0; counter < fiveWordsArray.length; counter++) {
    alert(fiveWordsArray[counter]);
};

/*b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word. */

alert('The result of exercise 5-b is: ');
for (counter = 0; counter < fiveWordsArray.length; counter++) {
    alert(fiveWordsArray[counter].substring(0, 1).toUpperCase() + fiveWordsArray[counter].substring(1));
};

/*c) Create a variable called "sentence" that has an empty string, then to the array from point a) go through it with 
a "for" loop to save each word within the sentence variable. At the end show a single alert with the complete chain.*/

var emptySentence = '';
for (counter = 0; counter <= fiveWordsArray.length - 1; counter++) {
    emptySentence += (fiveWordsArray[counter]);
};
alert('The result of exercise 5-c is: ' + emptySentence);

/*d) Create an empty array and with a for loop of 10 repetitions, fill the array with the number of the repetition, that is, at the 
end of the execution of the for loop, there should be 10 elements within the array, from number 0 to number 9. 
Show by the browser console the final array*/

var numericalArray = [];
for (counter = 0; counter <= 9; counter++) {
    numericalArray[counter] = counter;
}
console.log('The result of exercise 5-d is: ', numericalArray);