/* 
    Return the longest string from an array of strings

        Write a function that takes an array of strings as argument. 
        Return the longest string.

    Test Cases:
    
        myFunction(['help', 'me'])          Expected    'help'
        myFunction(['I', 'need', 'candy'])  Expected    'candy'

*/

function myFunction(arr) {
  return arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
}

console.log(myFunction(["help", "me"]));
console.log(myFunction(["I", "need", "candy"]));
