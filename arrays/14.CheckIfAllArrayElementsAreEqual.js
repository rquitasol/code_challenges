/* 
    Check if all array elements are equal

        Write a function that takes an array as argument. 
        It should return true if all elements in the array are equal. 
        It should return false otherwise.

    Test Cases:
    
        myFunction([true, true, true, true])    Expected    true 
        myFunction(['test', 'test', 'test'])    Expected    true 
        myFunction([1,1,1,2])                   Expected    false 
        myFunction(['10',10,10,10])             Expected    false 

*/

function myFunction(arr) {
  return new Set(arr).size === 1;
}

console.log(myFunction([true, true, true, true]));
console.log(myFunction(["test", "test", "test"]));
console.log(myFunction([1, 1, 1, 2]));
console.log(myFunction(["10", 10, 10, 10]));
