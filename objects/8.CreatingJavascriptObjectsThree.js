/* 
    Creating Javascript objects three

        Write a function that takes two arrays (a and b) as arguments. 
        Create an object that has properties with keys 'a' and corresponding values 'b'. 
        Return the object.


    Test Cases:
    
        myFunction(['a','b','c'],[1,2,3])           Expected    {a:1,b:2,c:3}
        myFunction(['w','x','y','z'],[10,9,5,2])    Expected    {w:10,x:9,y:5,z:2}
        myFunction([1,'b'],['a',2])                 Expected    {1:'a',b:2}

*/

function myFunction(a, b) {
  let obj = {};
  a.map((curr, index) => {
    obj[curr] = b[index];
  });
  return obj;
}

console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunction([1, "b"], ["a", 2]));
