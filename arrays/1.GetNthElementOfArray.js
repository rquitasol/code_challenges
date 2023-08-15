/* 
    Get nth element of array

        Write a function that takes an array (a) and a value (n) as argument. 
        Return the nth element of 'a'

    Test Cases:
    
        myFunction([1,2,3,4,5],3)       Expected    3
        myFunction([10,9,8,7,6],5)      Expected    6
        myFunction([7,2,1,6,3],1)       Expected    7

*/

function myFunction(a, n) {
  return a[n - 1];
}

console.log(myFunction([1, 2, 3, 4, 5], 3));
console.log(myFunction([10, 9, 8, 7, 6], 5));
console.log(myFunction([7, 2, 1, 6, 3], 1));
