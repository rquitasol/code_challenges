/* 
    Multiplication, division, and comparison operators

        Write a function that takes two numbers (a and b) as arguments.
        If a is smaller than b, divide a by b.
        Otherwise, multiply both numbers. 
        Return the resulting value

    Test Cases:

        myFunction(10, 100)     Expected    0.1
        myFunction(90, 45)      Expected    4050
        myFunction(8, 20)       Expected    0.4
        myFunction(2, 0.5)      Expected    1

*/

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
console.log(myFunction(8, 20));
console.log(myFunction(2, 0.5));
