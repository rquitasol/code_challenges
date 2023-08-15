/* 
    Return the average of an array of numbers

        Write a function that takes an array of numbers as argument. 
        It should return the average of the numbers.

    Test Cases:
    
        myFunction([10,100,40])     Expected    50
        myFunction([10,100,1000])   Expected    370
        myFunction([-50,0,50,200])  Expected    50

*/

function myFunction(arr) {
  return arr.reduce((acc, curr) => acc + curr) / arr.length;
}

console.log(myFunction([10, 100, 40]));
console.log(myFunction([10, 100, 1000]));
console.log(myFunction([-50, 0, 50, 200]));
