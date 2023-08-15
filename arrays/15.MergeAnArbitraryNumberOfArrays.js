/* 
    Merge an arbitrary number of arrays

        Write a function that takes arguments an arbitrary number of arrays. 
        It should return an array containing the values of all arrays.

    Test Cases:
    
        myFunction([1, 2, 3], [4, 5, 6])                Expected    [1, 2, 3, 4, 5, 6]
        myFunction(['a', 'b', 'c'], [4, 5, 6])          Expected    ['a', 'b', 'c', 4, 5, 6]
        myFunction([true, true], [1, 2], ['a', 'b'])    Expected    [true, true, 1, 2, 'a', 'b']

*/

function myFunction(...arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
console.log(myFunction(["a", "b", "c"], [4, 5, 6]));
console.log(myFunction([true, true], [1, 2], ["a", "b"]));
