/* 
    How many times does a character occur?

        Write a function that takes two strings (a and b) as arguments. 
        Return the number of times a occurs in b.

    Test Cases:

        myFunction('m', 'how many times does the character occur in this sentence?')    Expected        2
        myFunction('h', 'how many times does the character occur in this sentence?')    Expected        4
        myFunction('?', 'how many times does the character occur in this sentence?')    Expected        1
        myFunction('z', 'how many times does the character occur in this sentence?')    Expected        0

*/

function myFunction(a, b) {
  return b.split(a).length - 1;
}

console.log(myFunction("m", "how many times does the character occur in this sentence?"));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));
