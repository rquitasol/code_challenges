// This file contains all JavaScript challenges organized by category
export const challenges = {
  fundamentals: [
    {
      id: 1,
      title: "Sum Two Numbers",
      description:
        "Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result",
      testCases: [
        { input: "1, 2", expected: "3" },
        { input: "1, 10", expected: "11" },
        { input: "99, 1", expected: "100" },
      ],
      starterCode: `function myFunction(a, b) {\n  // Write your code here\n  \n}`,
      solution: `function myFunction(a, b) {
  return a + b;
}`,
    },
    {
      id: 2,
      title: "Comparison Operators Strict Equality",
      description:
        "Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type",
      testCases: [
        { input: "2, 3", expected: "false" },
        { input: "3, 3", expected: "true" },
        { input: "1, '1'", expected: "false" },
        { input: "'10', '10'", expected: "true" },
      ],
      starterCode: `function myFunction(a, b) {\n  // Write your code here\n  \n}`,
      solution: `function myFunction(a, b) {
  return a === b;
}`,
    },
    {
      id: 3,
      title: "Get Type Of Value",
      description:
        "Write a function that takes a value as argument. Return the type of the value.",
      testCases: [
        { input: "1", expected: "'number'" },
        { input: "false", expected: "'boolean'" },
        { input: "{}", expected: "'object'" },
        { input: "null", expected: "'object'" },
        { input: "'string'", expected: "'string'" },
        { input: "['array']", expected: "'object'" },
      ],
      starterCode: `function myFunction(val) {\n  // Write your code here\n  \n}`,
      solution: `function myFunction(val) {
  return typeof val;
}`,
    },
    {
      id: 4,
      title: "Get Nth Character Of String",
      description:
        "Write a function that returns the nth character of a string",
      testCases: [
        { input: "'abcd', 1", expected: "'a'" },
        { input: "'zyxbwpl', 5", expected: "'w'" },
        { input: "'gfedcba', 3", expected: "'e'" },
      ],
      starterCode: `function myFunction(str, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, n) {
  return str[n - 1];
}`,
    },
    {
      id: 5,
      title: "Remove First N Characters Of String",
      description:
        "Write a function that removes the first n characters from a string",
      testCases: [
        { input: "'abcdefg', 3", expected: "'defg'" },
        { input: "'1234', 3", expected: "'4'" },
        { input: "'fgedcba', 3", expected: "'dcba'" },
      ],
      starterCode: `function myFunction(str, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, n) {
  return str.slice(n);
}`,
    },
    {
      id: 6,
      title: "Get Last N Characters Of String",
      description:
        "Write a function that returns the last n characters of a string",
      testCases: [
        { input: "'abcdefg', 3", expected: "'efg'" },
        { input: "'1234', 3", expected: "'234'" },
        { input: "'fgedcba', 3", expected: "'cba'" },
      ],
      starterCode: `function myFunction(str, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, n) {
  return str.slice(-n);
}`,
    },
    {
      id: 7,
      title: "Get First N Characters Of String",
      description:
        "Write a function that returns the first n characters of a string",
      testCases: [
        { input: "'abcdefg', 3", expected: "'abc'" },
        { input: "'1234', 3", expected: "'123'" },
        { input: "'fgedcba', 3", expected: "'fge'" },
      ],
      starterCode: `function myFunction(str, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, n) {
  return str.slice(0, n);
}`,
    },
    {
      id: 8,
      title: "Find The Position Of One String In Another",
      description:
        "Write a function that finds the position of one string in another",
      testCases: [
        { input: "'praise', 'is'", expected: "3" },
        { input: "'risky', 'is'", expected: "1" },
        { input: "'paris', 'is'", expected: "3" },
      ],
      starterCode: `function myFunction(str, search) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, search) {
  return str.indexOf(search);
}`,
    },
    {
      id: 9,
      title: "Extract First Half Of String",
      description: "Write a function that extracts the first half of a string",
      testCases: [
        { input: "'abcdefgh'", expected: "'abcd'" },
        { input: "'1234'", expected: "'12'" },
        { input: "'gedcba'", expected: "'ged'" },
      ],
      starterCode: `function myFunction(str) {
  // Write your code here
  
}`,
      solution: `function myFunction(str) {
  return str.slice(0, Math.ceil(str.length / 2));
}`,
    },
    {
      id: 10,
      title: "Remove Last N Characters Of String",
      description:
        "Write a function that removes the last n characters from a string",
      testCases: [
        { input: "'abcdefg', 3", expected: "'abcd'" },
        { input: "'1234', 3", expected: "'1'" },
        { input: "'fgedcba', 3", expected: "'fged'" },
      ],
      starterCode: `function myFunction(str, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, n) {
  return str.slice(0, -n);
}`,
    },
    {
      id: 11,
      title: "Return The Percentage Of A Number",
      description:
        "Write a function that calculates the percentage of a number",
      testCases: [
        { input: "100, 50", expected: "50" },
        { input: "10, 1", expected: "0.1" },
        { input: "500, 25", expected: "125" },
      ],
      starterCode: `function myFunction(num, percent) {
  // Write your code here
  
}`,
      solution: `function myFunction(num, percent) {
  return (num * percent) / 100;
}`,
    },
    {
      id: 12,
      title: "Basic JavaScript Math Operators",
      description:
        "Write a function that performs basic math operations Sum a and b. " +
        "Then substract by c. " +
        "Then multiply by d and divide by e. " +
        "Finally raise to the power of f and return the result. " +
        "Tip: mind the order.",
      testCases: [
        { input: "6, 5, 4, 3, 2, 1", expected: "10.5" },
        { input: "6, 2, 1, 4, 2, 3", expected: "2744" },
        { input: "2, 3, 6, 4, 2, 3", expected: "-8" },
      ],
      starterCode: `function myFunction(a, b, c, d, e, f) {
  // Write your code here
  
}`,
      solution: `return (((a + b - c) * d) / e) ** f;`,
    },
    {
      id: 13,
      title: "Check Whether A String Contains Another String And Concatenate",
      description:
        "Write a function that takes two strings (a and b) as arguments. If a ends with b, prepend b to a. If a contains b (but doesn't end with it), return a unchanged. Otherwise, append b to a.",
      testCases: [
        { input: "'cheese', 'cake'", expected: "'cheesecake'" },
        { input: "'lips', 's'", expected: "'slips'" },
        { input: "'Java', 'script'", expected: "'Javascript'" },
        {
          input: "' think, therefore I am', 'I'",
          expected: "' think, therefore I am'",
        },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(a, b) {
  return a.endsWith(b) ? b + a : a.includes(b) ? a : a + b;
}`,
    },
    {
      id: 14,
      title: "Check If A Number Is Even",
      description: "Write a function that checks if a number is even",
      testCases: [
        { input: "10", expected: "true" },
        { input: "-4", expected: "true" },
        { input: "5", expected: "false" },
        { input: "-111", expected: "false" },
      ],
      starterCode: `function myFunction(num) {
  // Write your code here
  
}`,
      solution: `function myFunction(num) {
  return num % 2 === 0;
}`,
    },
    {
      id: 15,
      title: "How Many Times Does A Character Occur",
      description: "Count how many times a character occurs in a string",
      testCases: [
        {
          input:
            "'m', 'how many times does the character occur in this sentence?'",
          expected: "2",
        },
        {
          input:
            "'h', 'how many times does the character occur in this sentence?'",
          expected: "4",
        },
        {
          input:
            "'?', 'how many times does the character occur in this sentence?'",
          expected: "1",
        },
        {
          input:
            "'z', 'how many times does the character occur in this sentence?'",
          expected: "0",
        },
      ],
      starterCode: `function myFunction(char, str) {
  // Write your code here
  
}`,
      solution: `function myFunction(str, char) {
  return str.split(char).length - 1;
}`,
    },
    {
      id: 16,
      title: "Check If A Number Is A Whole Number",
      description: "Write a function that checks if a number is a whole number",
      testCases: [
        { input: "4", expected: "true" },
        { input: "1.123", expected: "false" },
        { input: "1048", expected: "true" },
        { input: "10.48", expected: "false" },
      ],
      starterCode: `function myFunction(num) {
  // Write your code here
  
}`,
      solution: `function myFunction(num) {
  return Number.isInteger(num);
}`,
    },
    {
      id: 17,
      title: "Multiplication Division And Comparison Operators",
      description: "Perform multiplication, division and comparison operations",
      testCases: [
        { input: "10, 100", expected: "0.1" },
        { input: "90, 45", expected: "4050" },
        { input: "8, 20", expected: "0.4" },
        { input: "2, 0.5", expected: "1" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(a, b, c) {
  return (a * b) === c;
}`,
    },
    {
      id: 18,
      title: "Round A Number To 2 Decimal Places",
      description: "Write a function that rounds a number to 2 decimal places",
      testCases: [
        { input: "2.12397", expected: "2.12" },
        { input: "3.136", expected: "3.14" },
        { input: "1.12397", expected: "1.12" },
        { input: "26.1379", expected: "26.14" },
      ],
      starterCode: `function myFunction(num) {
  // Write your code here
  
}`,
      solution: `function myFunction(num) {
  return Math.round(num * 100) / 100;
}`,
    },
    {
      id: 19,
      title: "Split A Number Into Its Digits",
      description: "Write a function that splits a number into its digits",
      testCases: [
        { input: "10", expected: "[1, 0]" },
        { input: "931", expected: "[9, 3, 1]" },
        { input: "193278", expected: "[1, 9, 3, 2, 7, 8]" },
      ],
      starterCode: `function myFunction(num) {
  // Write your code here
  
}`,
      solution: `function myFunction(num) {
  return num.toString().split('').map(Number);
}`,
    },
  ],
  arrays: [
    {
      id: 1,
      title: "Get Nth Element Of Array",
      description:
        "Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'",
      testCases: [
        { input: "myFunction([1,2,3,4,5],3)", expected: "3" },
        { input: "myFunction([10,9,8,7,6],5)", expected: "6" },
        { input: "myFunction([7,2,1,6,3],1)", expected: "7" },
      ],
      solution: `function myFunction(a, n) {
  return a[n - 1];
}`,
    },
    {
      id: 2,
      title: "Remove First N Elements Of An Array",
      description: "Remove the first n elements from an array",
      testCases: [
        { input: "[1,2,3,4]", expected: "[4]" },
        { input: "[5,4,3,2,1,0]", expected: "[2,1,0]" },
        { input: "[99,1,1]", expected: "[]" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, n) {
  return arr.slice(n);
}`,
    },
    {
      id: 3,
      title: "Get Last N Elements Of An Array",
      description: "Get the last n elements from an array",
      testCases: [
        { input: "[1,2,3,4]", expected: "[2,3,4]" },
        { input: "[5,4,3,2,1,0]", expected: "[2,1,0]" },
        { input: "[99,1,1]", expected: "[99,1,1]" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, n) {
  return arr.slice(-n);
}`,
    },
    {
      id: 4,
      title: "Get First N Elements Of An Array",
      description: "Get the first n elements from an array",
      testCases: [
        { input: "[1,2,3,4]", expected: "[1,2,3]" },
        { input: "[5,4,3,2,1,0]", expected: "[5,4,3]" },
        { input: "[99,1,1]", expected: "[99,1,1]" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, n) {
  return arr.slice(0, n);
}`,
    },
    {
      id: 5,
      title: "Return Last N Array Elements",
      description: "Return the last n elements from an array",
      testCases: [
        { input: "[1, 2, 3, 4, 5], 2", expected: "[4, 5]" },
        { input: "[1, 2, 3], 6", expected: "[1, 2, 3]" },
        { input: "[1, 2, 3, 4, 5, 6, 7, 8], 3", expected: "[6, 7, 8]" },
      ],
      starterCode: `function myFunction(a, n) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, n) {
  return arr.slice(-n);
}`,
    },
    {
      id: 6,
      title: "Remove A Specific Array Element",
      description: "Remove a specific element from an array",
      testCases: [
        { input: "[1,2,3], 2", expected: "[1, 3]" },
        { input: "[1,2,'2'], '2'", expected: "[1, 2]" },
        { input: "[false,'2',1], false", expected: "['2', 1]" },
        { input: "[1,2,'2',1], 1", expected: "[2, '2']" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, val) {
  return arr.filter(item => item !== val);
}`,
    },
    {
      id: 7,
      title: "Count Number Of Elements In JavaScript Array",
      description: "Count the number of elements in an array",
      testCases: [
        { input: "[1,2,2,4]", expected: "4" },
        { input: "[9,9,9]", expected: "3" },
        { input: "[4,3,2,1,0]", expected: "5" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.length;
}`,
    },
    {
      id: 8,
      title: "Count Number Of Negative Values In Array",
      description: "Count how many negative values are in an array",
      testCases: [
        { input: "[1,-2,2,-4]", expected: "2" },
        { input: "[0,9,1]", expected: "0" },
        { input: "[4,-3,2,1,0]", expected: "1" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.filter(num => num < 0).length;
}`,
    },
    {
      id: 9,
      title: "Sort An Array Of Strings Alphabetically",
      description: "Sort an array of strings in alphabetical order",
      testCases: [
        { input: "['b', 'c', 'd', 'a']", expected: "['a', 'b', 'c', 'd']" },
        {
          input: "['z', 'c', 'd', 'a', 'y', 'a', 'w']",
          expected: "['a', 'a', 'c', 'd', 'w', 'y', 'z']",
        },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.sort();
}`,
    },
    {
      id: 10,
      title: "Sort An Array Of Numbers In Descending Order",
      description: "Sort an array of numbers in descending order",
      testCases: [
        { input: "[1,3,2]", expected: "[3,2,1]" },
        { input: "[4,2,3,1]", expected: "[4,3,2,1]" },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}`,
    },
    {
      id: 11,
      title: "Calculate The Sum Of An Array Of Numbers",
      description: "Calculate the sum of all numbers in an array",
      testCases: [
        { input: "[10,100,40]", expected: "150" },
        { input: "[10,100,1000,1]", expected: "1111" },
        { input: "[-50,0,50,200]", expected: "200" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}`,
    },
    {
      id: 12,
      title: "Return The Average Of An Array Of Numbers",
      description: "Calculate and return the average of an array of numbers",
      testCases: [
        { input: "[10,100,40]", expected: "50" },
        { input: "[10,100,1000]", expected: "370" },
        { input: "[-50,0,50,200]", expected: "50" },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}`,
    },
    {
      id: 13,
      title: "Return The Longest String From An Array Of Strings",
      description: "Find and return the longest string from an array",
      testCases: [
        { input: "['help', 'me']", expected: "'help'" },
        { input: "['I', 'need', 'candy']", expected: "'candy'" },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );
}`,
    },
    {
      id: 14,
      title: "Check If All Array Elements Are Equal",
      description: "Check if all elements in an array are equal",
      testCases: [
        { input: "[true, true, true, true]", expected: "true" },
        { input: "['test', 'test', 'test']", expected: "true" },
        { input: "[1,1,1,2]", expected: "false" },
        { input: "['10',10,10,10]", expected: "false" },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr) {
  return arr.every(val => val === arr[0]);
}`,
    },
    {
      id: 15,
      title: "Merge An Arbitrary Number Of Arrays",
      description: "Merge multiple arrays into one",
      testCases: [
        { input: "[1, 2, 3], [4, 5, 6]", expected: "[1, 2, 3, 4, 5, 6]" },
        {
          input: "['a', 'b', 'c'], [4, 5, 6]",
          expected: "['a', 'b', 'c', 4, 5, 6]",
        },
        {
          input: "[true, true], [1, 2], ['a', 'b']",
          expected: "[true, true, 1, 2, 'a', 'b']",
        },
      ],
      starterCode: `function myFunction(...arrays) {
  // Write your code here
  
}`,
      solution: `function myFunction(...arrays) {
  return [].concat(...arrays);
}`,
    },
    {
      id: 16,
      title: "Sort Array By Object Property",
      description: "Sort an array of objects by a specific property",
      testCases: [
        { input: "[{a:1,b:2},{a:5,b:4}]", expected: "[{a:1,b:2},{a:5,b:4}]" },
        { input: "[{a:2,b:10},{a:5,b:4}]", expected: "[{a:5,b:4},{a:2,b:10}]" },
        { input: "[{a:1,b:7},{a:2,b:1}]", expected: "[{a:2,b:1},{a:1,b:7}]" },
      ],
      starterCode: `function myFunction(arr) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}`,
    },
    {
      id: 17,
      title: "Merge Two Arrays With Duplicate Values",
      description: "Merge two arrays and remove duplicates",
      testCases: [
        { input: "[1, 2, 3], [3, 4, 5]", expected: "[1, 2, 3, 4, 5]" },
        {
          input: "[-10, 22, 333, 42], [-11, 5, 22, 41, 42]",
          expected: "[-11, -10, 5, 22, 41, 42, 333]",
        },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}`,
    },
  ],
  objects: [
    {
      id: 1,
      title: "Accessing Object Properties One",
      description:
        "Write a function that takes an object with two properties as argument. It should return the value of the property with key country.",
      testCases: [
        {
          input: "myFunction({ continent: 'Asia', country: 'Japan' })",
          expected: "'Japan'",
        },
        {
          input: "myFunction({ country: 'Sweden', continent: 'Europe' })",
          expected: "'Sweden'",
        },
      ],
      solution: `function myFunction(obj) {
  return obj.country;
}`,
    },
    {
      id: 2,
      title: "Accessing Object Properties Two",
      description: "Access object properties using bracket notation",
      testCases: [
        { input: "{one: 1, 'prop-2': 2}", expected: "2" },
        { input: "{'prop-2': 'two', prop: 'test'}", expected: "'two'" },
      ],
      starterCode: `function myFunction(obj) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj, key) {
  return obj[key];
}`,
    },
    {
      id: 3,
      title: "Accessing Object Properties Three",
      description: "Access nested object properties",
      testCases: [
        {
          input: "{continent: 'Asia', country: 'Japan'}, 'continent'",
          expected: "'Asia'",
        },
        {
          input: "{country: 'Sweden', continent: 'Europe'}, 'country'",
          expected: "'Sweden'",
        },
      ],
      starterCode: `function myFunction(obj, key) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj) {
  return obj.prop.nested;
}`,
    },
    {
      id: 4,
      title: "Check If Property Exists In Object",
      description: "Check if a property exists in an object",
      testCases: [
        { input: "{a:1,b:2,c:3}, 'b'", expected: "true" },
        { input: "{x:'a',y:'b',z:'c'}, 'a'", expected: "false" },
        { input: "{x:'a',y:'b',z:undefined}, 'z'", expected: "true" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj, key) {
  return key in obj;
}`,
    },
    {
      id: 5,
      title: "Check If Property Exists In Object And Is Truthy",
      description: "Check if a property exists and has a truthy value",
      testCases: [
        { input: "{a:1,b:2,c:3}, 'b'", expected: "true" },
        { input: "{x:'a',y:null,z:'c'}, 'y'", expected: "false" },
        { input: "{x:'a',b:'b',z:undefined}, 'z'", expected: "false" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj, key) {
  return Boolean(obj[key]);
}`,
    },
    {
      id: 6,
      title: "Creating Javascript Objects One",
      description: "Create a JavaScript object with specific properties",
      testCases: [
        { input: "'a'", expected: "{key:'a'}" },
        { input: "'z'", expected: "{key:'z'}" },
        { input: "'b'", expected: "{key:'b'}" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(a, b) {
  return { a, b };
}`,
    },
    {
      id: 7,
      title: "Creating Javascript Objects Two",
      description: "Create an object with dynamic keys",
      testCases: [
        { input: "'a', 'b'", expected: "{a:'b'}" },
        { input: "'z', 'x'", expected: "{z:'x'}" },
        { input: "'b', 'w'", expected: "{b:'w'}" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(key, value) {
  return { [key]: value };
}`,
    },
    {
      id: 8,
      title: "Creating Javascript Objects Three",
      description: "Create an object from arrays of keys and values",
      testCases: [
        { input: "['a','b','c'], [1,2,3]", expected: "{a:1,b:2,c:3}" },
        {
          input: "['w','x','y','z'], [10,9,5,2]",
          expected: "{w:10,x:9,y:5,z:2}",
        },
        { input: "[1,'b'], ['a',2]", expected: "{1:'a',b:2}" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(keys, values) {
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
}`,
    },
    {
      id: 9,
      title: "Extract Keys From Javascript Object",
      description: "Extract all keys from a JavaScript object",
      testCases: [
        { input: "{a:1,b:2,c:3}", expected: "['a','b','c']" },
        { input: "{j:9,i:2,x:3,z:4}", expected: "['j','i','x','z']" },
        { input: "{w:15,x:22,y:13}", expected: "['w','x','y']" },
      ],
      starterCode: `function myFunction(a) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj) {
  return Object.keys(obj);
}`,
    },
    {
      id: 10,
      title: "Return Nested Object Property",
      description: "Return a nested property from an object",
      testCases: [
        { input: "{a:1}", expected: "undefined" },
        { input: "{a:{b:{c:3}}}", expected: "{c:3}" },
        { input: "{b:{a:1}}", expected: "undefined" },
        { input: "{a:{b:2}}", expected: "2" },
      ],
      starterCode: `function myFunction(obj) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj) {
  return obj.a.b;
}`,
    },
    {
      id: 11,
      title: "Sum Object Values",
      description: "Calculate the sum of all numeric values in an object",
      testCases: [
        { input: "{a:1,b:2,c:3}", expected: "6" },
        { input: "{j:9,i:2,x:3,z:4}", expected: "18" },
        { input: "{w:15,x:22,y:13}", expected: "50" },
      ],
      starterCode: `function myFunction(obj) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj) {
  return Object.values(obj).reduce((sum, val) => sum + val, 0);
}`,
    },
    {
      id: 12,
      title: "Remove A Property From An Object",
      description: "Remove a specific property from an object",
      testCases: [
        { input: "{a: 1, b: 7, c: 3}", expected: "{a: 1, c: 3}" },
        { input: "{b: 0, a: 7, d: 8}", expected: "{a: 7, d: 8}" },
        { input: "{e: 6, f: 4, b: 5, a: 3}", expected: "{e: 6, f: 4, a: 3}" },
      ],
      starterCode: `function myFunction(obj) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj, key) {
  const { [key]: removed, ...rest } = obj;
  return rest;
}`,
    },
    {
      id: 13,
      title: "Merge Two Objects With Matching Keys",
      description:
        "Merge two objects, with the second object's values taking precedence",
      testCases: [
        {
          input: "{a: 1, b: 2}, {c: 3, b: 4, e: 5}",
          expected: "{a: 1, b: 2, c: 3, e: 5, d: 4}",
        },
        {
          input: "{a: 5, b: 4}, {c: 3, b: 1, e: 2}",
          expected: "{a: 5, b: 4, c: 3, e: 2, d: 1}",
        },
      ],
      starterCode: `function myFunction(x, y) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj1, obj2) {
  return { ...obj1, ...obj2 };
}`,
    },
    {
      id: 14,
      title: "Multiply All Object Values By X",
      description: "Multiply all numeric values in an object by x",
      testCases: [
        { input: "{a:1,b:2,c:3}, 3", expected: "{a:3,b:6,c:9}" },
        { input: "{j:9,i:2,x:3,z:4}, 10", expected: "{j:90,i:20,x:30,z:40}" },
        { input: "{w:15,x:22,y:13}, 6", expected: "{w:90,x:132,y:78}" },
      ],
      starterCode: `function myFunction(a, b) {
  // Write your code here
  
}`,
      solution: `function myFunction(obj, x) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [key, val * x])
  );
}`,
    },
  ],
};

export const categories = [
  {
    id: "fundamentals",
    name: "Fundamentals",
    description:
      "Basic JavaScript concepts including strings, numbers, and operators",
    icon: "📚",
    count: challenges.fundamentals.length,
  },
  {
    id: "arrays",
    name: "Arrays",
    description: "Array manipulation, iteration, and transformation techniques",
    icon: "📊",
    count: challenges.arrays.length,
  },
  {
    id: "objects",
    name: "Objects",
    description: "Object creation, property access, and manipulation",
    icon: "🎯",
    count: challenges.objects.length,
  },
];
