/* 
    Count number of negative values in array

        Write a function that takes an array of numbers as argument. 
        Return the number of negative values in the array.

    Test Cases:
    
        myFunction([1,-2,2,-4])     Expected    2
        myFunction([0,9,1])         Expected    0
        myFunction([4,-3,2,1,0])    Expected    1

*/

function myFunction(a) {
  return a.filter((num) => num < 0).length;
}

console.log(myFunction([1, -2, 2, -4]));
console.log(myFunction([0, 9, 1]));
console.log(myFunction([4, -3, 2, 1, 0]));
