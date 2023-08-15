/* 
    Get last n characters of string

        Write a function that takes a string as argument. 
        Extract the last 3 characters from the string. Return the result

    Test Cases:
    
        myFunction('abcdefg')   Expected    'efg'
        myFunction('1234')      Expected    '234'
        myFunction('fgedcba')   Expected    'cba'

*/

function myFunction(str) {
  return str.slice(-3);
}

console.log(myFunction("abcdefg"));
console.log(myFunction("1234"));
console.log(myFunction("fgedcba"));
