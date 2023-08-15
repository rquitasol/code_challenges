/* 
    Return nested object property

        Write a function that takes an object as argument. 
        In some cases the object contains other objects with some deeply nested properties. 
        Return the property 'b' of object 'a' inside the original object if it exists. 
        If not, return undefined


    Test Cases:
    
        myFunction({a:1})           Expected    undefined
        myFunction({a:{b:{c:3}}})   Expected    {c:3}
        myFunction({b:{a:1}})       Expected    undefined
        myFunction({a:{b:2}})       Expected    2

*/

function myFunction(obj) {
  return obj?.a?.b;
}

console.log(myFunction({ a: 1 }));
console.log(myFunction({ a: { b: { c: 3 } } }));
console.log(myFunction({ b: { a: 1 } }));
console.log(myFunction({ a: { b: 2 } }));
