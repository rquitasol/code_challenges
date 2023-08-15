/* 
    Merge two arrays with duplicate values
    
        Write a function that takes two arrays as arguments. 
        Merge both arrays and remove duplicate values. 
        Sort the merge result in ascending order. 
        Return the resulting array

    Test Cases:
    
        myFunction([1, 2, 3], [3, 4, 5])                        Expected    [ 1, 2, 3, 4, 5 ]
        myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])    Expected    [ -11, -10, 5, 22, 41,  42, 333]


*/

function myFunction(a, b) {
  return Array.from(new Set(a.concat(b).sort((a, b) => a - b)));
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
