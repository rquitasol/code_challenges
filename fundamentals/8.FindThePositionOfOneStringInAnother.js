/* 
    Find the position of one string in another

        Write a function that takes a string as argument. 
        The string contains the substring 'is'. Return the index of 'is'.

    Test Cases:
    
        myFunction("praise")    Expected    3
        myFunction("risky")     Expected    1
        myFunction("paris")     Expected    3

*/

function myFunction(a) {
  return a.indexOf("is");
}

console.log(myFunction("praise"));
console.log(myFunction("risky"));
console.log(myFunction("paris"));
