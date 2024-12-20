

// Advanced Destructuring Questions

// Question 1: Extract Data from Nested Arrays

// Task: Write a function that destructures a nested array to extract specific elements and logs them.

// const numbers = [1, [2, 3, [4, 5]]];
// function extractNumbers([first,[second,,[...nested]]]) {
//  console.log(`First: ${first}, Second: ${second}, Nested: ${nested}`);
// }
// extractNumbers(numbers);



// Question 2: Pass Destructured Parameters
// Task: Write a function that accepts an object and destructures `name` and `skills` (an array), logging each skill in the
// array.
// const developer = { name: 'Eve', skills: ['HTML', 'CSS', 'JavaScript'] };

// function listSkills({name,skills:[...skills]}) {
//  console.log(`${name}'s skills:`);
//  skills.forEach(skill => console.log(skill));
// }
// listSkills(developer);


// Question 3: Extract Multiple Levels of Data

// Task: Write a function that destructures a deeply nested object and extracts `name`, `email`, and `city`.

// const user = {
//  id: 1,
//  personalInfo: {
//  name: 'Frank',
//  email: 'frank@example.com',
//  address: { city: 'Paris', country: 'France' },
//  },
// };
// function getUserInfo({personalInfo:{name,email,address:{city}}}) {
//  console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
// }
// getUserInfo(user);



// Question 4: Rename and Use Defaults

// Task: Write a function that destructures an object, renames `name` to `userName`, and provides a default for `age`.
// const user = { name: 'Grace' };
// function displayUserInfo({name:userName,age="25"}) {
//  console.log(`User: ${userName}, Age: ${age}`);
// }
// displayUserInfo(user);



// Question 5: Extract and Reconstruct


// Task: Write a function that destructures an object to extract `name` and `email`, then returns a new object with those
// properties.
// const user = { name: 'Hank', email: 'hank@example.com', age: 40 };
// function createUserObject({name,email}) {
//  return {name,email};
// }
// console.log(createUserObject(user));


// Question 6: Swap Variables Using Destructuring

// Task: Write a function that swaps the values of two variables using destructuring.

// let x = 5;
// let y = 10;
// function swapVariables() {
//     [x, y] = [y, x];
 
// }
// swapVariables();
// console.log(`x: ${x}, y: ${y}`);


// Question 7: Combine Rest with Default Values

// Task: Write a function that destructures `name`, provides a default for `age`, and collects remaining properties into
// `details`.
// const person = { name: 'Ivy', country: 'USA', city: 'Seattle' };
// function displayPerson({name,age="30",...details}) {
//  console.log(`Name: ${name}, Age: ${age}, Details:`, details);
// }
// displayPerson(person);



// Question 8: Extract and Map Object Keys

// Task: Write a function that accepts an object, destructures `keys` dynamically, and logs their values.

// const person = { firstName: 'Jack', lastName: 'Smith', age: 28 };

// function logProperties(person) {
//  Object.keys(person).forEach(key => console.log(`${key}: ${person[key]}`));
// }
// logProperties(person);

// Question 9: Destructure Function Return Values

// Task: Write a function that returns an object. Use destructuring to extract values from the returned object.

// function getData() {
//  return { id: 123, name: 'Kate', role: 'Developer' };
// }
// const {id,name,role} = getData();
// console.log(`ID: ${id}, Name: ${name}, Role: ${role}`);


// Question 10: Use Array Destructuring for Multiple Return Values
// Task: Write a function that returns an array and destructures its elements into variables.

// function getScores() {
//  return [85, 90, 95];
// }
// const [math,science,english] = getScores();
// console.log(`Math: ${math}, Science: ${science}, English: ${english}`);

// Question 11: Destructure in Loops
// Task: Write a function that loops through an array of objects and destructures properties for logging.

// const books = [
//  { title: 'Book A', author: 'Author A' },
//  { title: 'Book B', author: 'Author B' },
// ];
// function logBooks(books) {
//  books.forEach(({title,author})=> {
//     console.log(`Title: ${title} Author: ${author}`);
//  });

//  }
// logBooks(books);

// Question 12: Dynamic Nested Destructuring
// Task: Write a function that accepts a key name dynamically and destructures it from a nested object.


const data = { user: { id: 1, name: 'Liam' }, meta: { role: 'Admin' } };
function dynamicExtract({meta:{role:value}}) {
 console.log(`Value: ${value}`);
}
dynamicExtract(data, 'role');

