/* 
    Get type of value

      Write a function that takes a value as argument. Return the type of the value.

    Test Cases:
    
      myFunction(1)           Expected        'number'
      myFunction(false)       Expected        'boolean'
      myFunction({})          Expected        'object'
      myFunction(null)        Expected        'object'
      myFunction('string')    Expected        'string'
      myFunction(['array'])   Expected        'object'
*/

function myFunction(a, b) {
  return typeof a;
}

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction("string"));
console.log(myFunction(["array"]));
console.log();
