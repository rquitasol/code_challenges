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
        "Write a function that compares two values using strict equality",
      solution: `function myFunction(a, b) {
  return a === b;
}`,
    },
    {
      id: 3,
      title: "Get Type Of Value",
      description: "Write a function that returns the type of a given value",
      solution: `function myFunction(val) {
  return typeof val;
}`,
    },
    {
      id: 4,
      title: "Get Nth Character Of String",
      description:
        "Write a function that returns the nth character of a string",
      solution: `function myFunction(str, n) {
  return str[n - 1];
}`,
    },
    {
      id: 5,
      title: "Remove First N Characters Of String",
      description:
        "Write a function that removes the first n characters from a string",
      solution: `function myFunction(str, n) {
  return str.slice(n);
}`,
    },
    {
      id: 6,
      title: "Get Last N Characters Of String",
      description:
        "Write a function that returns the last n characters of a string",
      solution: `function myFunction(str, n) {
  return str.slice(-n);
}`,
    },
    {
      id: 7,
      title: "Get First N Characters Of String",
      description:
        "Write a function that returns the first n characters of a string",
      solution: `function myFunction(str, n) {
  return str.slice(0, n);
}`,
    },
    {
      id: 8,
      title: "Find The Position Of One String In Another",
      description:
        "Write a function that finds the position of one string in another",
      solution: `function myFunction(str, search) {
  return str.indexOf(search);
}`,
    },
    {
      id: 9,
      title: "Extract First Half Of String",
      description: "Write a function that extracts the first half of a string",
      solution: `function myFunction(str) {
  return str.slice(0, Math.ceil(str.length / 2));
}`,
    },
    {
      id: 10,
      title: "Remove Last N Characters Of String",
      description:
        "Write a function that removes the last n characters from a string",
      solution: `function myFunction(str, n) {
  return str.slice(0, -n);
}`,
    },
    {
      id: 11,
      title: "Return The Percentage Of A Number",
      description:
        "Write a function that calculates the percentage of a number",
      solution: `function myFunction(num, percent) {
  return (num * percent) / 100;
}`,
    },
    {
      id: 12,
      title: "Basic JavaScript Math Operators",
      description: "Write a function that performs basic math operations",
      solution: `function myFunction(a, b, operator) {
  switch(operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
}`,
    },
    {
      id: 13,
      title: "Check Whether A String Contains Another String And Concatenate",
      description:
        "Check if a string contains another string and concatenate them",
      solution: `function myFunction(str1, str2) {
  return str1.includes(str2) ? str1 : str1 + str2;
}`,
    },
    {
      id: 14,
      title: "Check If A Number Is Even",
      description: "Write a function that checks if a number is even",
      solution: `function myFunction(num) {
  return num % 2 === 0;
}`,
    },
    {
      id: 15,
      title: "How Many Times Does A Character Occur",
      description: "Count how many times a character occurs in a string",
      solution: `function myFunction(str, char) {
  return str.split(char).length - 1;
}`,
    },
    {
      id: 16,
      title: "Check If A Number Is A Whole Number",
      description: "Write a function that checks if a number is a whole number",
      solution: `function myFunction(num) {
  return Number.isInteger(num);
}`,
    },
    {
      id: 17,
      title: "Multiplication Division And Comparison Operators",
      description: "Perform multiplication, division and comparison operations",
      solution: `function myFunction(a, b, c) {
  return (a * b) === c;
}`,
    },
    {
      id: 18,
      title: "Round A Number To 2 Decimal Places",
      description: "Write a function that rounds a number to 2 decimal places",
      solution: `function myFunction(num) {
  return Math.round(num * 100) / 100;
}`,
    },
    {
      id: 19,
      title: "Split A Number Into Its Digits",
      description: "Write a function that splits a number into its digits",
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
      solution: `function myFunction(arr, n) {
  return arr.slice(n);
}`,
    },
    {
      id: 3,
      title: "Get Last N Elements Of An Array",
      description: "Get the last n elements from an array",
      solution: `function myFunction(arr, n) {
  return arr.slice(-n);
}`,
    },
    {
      id: 4,
      title: "Get First N Elements Of An Array",
      description: "Get the first n elements from an array",
      solution: `function myFunction(arr, n) {
  return arr.slice(0, n);
}`,
    },
    {
      id: 5,
      title: "Return Last N Array Elements",
      description: "Return the last n elements from an array",
      solution: `function myFunction(arr, n) {
  return arr.slice(-n);
}`,
    },
    {
      id: 6,
      title: "Remove A Specific Array Element",
      description: "Remove a specific element from an array",
      solution: `function myFunction(arr, val) {
  return arr.filter(item => item !== val);
}`,
    },
    {
      id: 7,
      title: "Count Number Of Elements In JavaScript Array",
      description: "Count the number of elements in an array",
      solution: `function myFunction(arr) {
  return arr.length;
}`,
    },
    {
      id: 8,
      title: "Count Number Of Negative Values In Array",
      description: "Count how many negative values are in an array",
      solution: `function myFunction(arr) {
  return arr.filter(num => num < 0).length;
}`,
    },
    {
      id: 9,
      title: "Sort An Array Of Strings Alphabetically",
      description: "Sort an array of strings in alphabetical order",
      solution: `function myFunction(arr) {
  return arr.sort();
}`,
    },
    {
      id: 10,
      title: "Sort An Array Of Numbers In Descending Order",
      description: "Sort an array of numbers in descending order",
      solution: `function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}`,
    },
    {
      id: 11,
      title: "Calculate The Sum Of An Array Of Numbers",
      description: "Calculate the sum of all numbers in an array",
      solution: `function myFunction(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}`,
    },
    {
      id: 12,
      title: "Return The Average Of An Array Of Numbers",
      description: "Calculate and return the average of an array of numbers",
      solution: `function myFunction(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}`,
    },
    {
      id: 13,
      title: "Return The Longest String From An Array Of Strings",
      description: "Find and return the longest string from an array",
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
      solution: `function myFunction(arr) {
  return arr.every(val => val === arr[0]);
}`,
    },
    {
      id: 15,
      title: "Merge An Arbitrary Number Of Arrays",
      description: "Merge multiple arrays into one",
      solution: `function myFunction(...arrays) {
  return [].concat(...arrays);
}`,
    },
    {
      id: 16,
      title: "Sort Array By Object Property",
      description: "Sort an array of objects by a specific property",
      solution: `function myFunction(arr, key) {
  return arr.sort((a, b) => a[key] - b[key]);
}`,
    },
    {
      id: 17,
      title: "Merge Two Arrays With Duplicate Values",
      description: "Merge two arrays and remove duplicates",
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
      solution: `function myFunction(obj, key) {
  return obj[key];
}`,
    },
    {
      id: 3,
      title: "Accessing Object Properties Three",
      description: "Access nested object properties",
      solution: `function myFunction(obj) {
  return obj.prop.nested;
}`,
    },
    {
      id: 4,
      title: "Check If Property Exists In Object",
      description: "Check if a property exists in an object",
      solution: `function myFunction(obj, key) {
  return key in obj;
}`,
    },
    {
      id: 5,
      title: "Check If Property Exists In Object And Is Truthy",
      description: "Check if a property exists and has a truthy value",
      solution: `function myFunction(obj, key) {
  return Boolean(obj[key]);
}`,
    },
    {
      id: 6,
      title: "Creating Javascript Objects One",
      description: "Create a JavaScript object with specific properties",
      solution: `function myFunction(a, b) {
  return { a, b };
}`,
    },
    {
      id: 7,
      title: "Creating Javascript Objects Two",
      description: "Create an object with dynamic keys",
      solution: `function myFunction(key, value) {
  return { [key]: value };
}`,
    },
    {
      id: 8,
      title: "Creating Javascript Objects Three",
      description: "Create an object from arrays of keys and values",
      solution: `function myFunction(keys, values) {
  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
}`,
    },
    {
      id: 9,
      title: "Extract Keys From Javascript Object",
      description: "Extract all keys from a JavaScript object",
      solution: `function myFunction(obj) {
  return Object.keys(obj);
}`,
    },
    {
      id: 10,
      title: "Return Nested Object Property",
      description: "Return a nested property from an object",
      solution: `function myFunction(obj) {
  return obj.a.b;
}`,
    },
    {
      id: 11,
      title: "Sum Object Values",
      description: "Calculate the sum of all numeric values in an object",
      solution: `function myFunction(obj) {
  return Object.values(obj).reduce((sum, val) => sum + val, 0);
}`,
    },
    {
      id: 12,
      title: "Remove A Property From An Object",
      description: "Remove a specific property from an object",
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
      solution: `function myFunction(obj1, obj2) {
  return { ...obj1, ...obj2 };
}`,
    },
    {
      id: 14,
      title: "Multiply All Object Values By X",
      description: "Multiply all numeric values in an object by x",
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
