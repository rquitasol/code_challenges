/* 
    Sort an array of strings alphabetically

        Write a function that takes an array of strings as argument. 
        Sort the array elements alphabetically. Return the result.

    Test Cases:
    
        myFunction(['b', 'c', 'd', 'a'])                    Expected    ['a', 'b', 'c', 'd']
        myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])     Expected    ['a', 'a', 'c', 'd', 'w', 'y', 'z']

*/

function myFunction(arr) {
  return arr.sort();
}

console.log(myFunction(["b", "c", "d", "a"]));
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"]));
