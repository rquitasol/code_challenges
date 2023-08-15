/* 
    Check whether a string contains another string and concatenate

        Write a function that takes two strings (a and b) as arguments. 
        If a contains b, append b to the beginning of a. 
        If not, append it to the end. 
        Return the concatenation

    Test Cases:

        myFunction('cheese', 'cake')                    Expected    'cheesecake'
        myFunction('lips', 's')                         Expected    'slips'
        myFunction('Java', 'script')                    Expected    'Javascript'
        myFunction(' think, therefore I am', 'I')       Expected    'I think, therefore I am'

*/

function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}

console.log(myFunction("cheese", "cake"));
console.log(myFunction("lips", "s"));
console.log(myFunction("Java", "script"));
console.log(myFunction(" think, therefore I am", "I"));
