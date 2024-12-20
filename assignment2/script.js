// Basic Level Questions

// 1. Destructure the following object to extract its properties `name` and `age`.

//  const person = { name: 'John', age: 30 };
//  let {name,age}=person;
//  console.log(name,age);

//  2. Swap the values of variables `a` and `b` using destructuring.
//  let a = 10;
//  let b = 20;

//  [a, b] = [b, a];
//  console.log(a,b)

// 3. Destructure the following nested object to extract the properties `name` and `city`.

//  const user = {
//  name: 'Alice',
//  address: {
//  city: 'New York',
//  country: 'USA'
//  }
//  };

//  let {name, address:{ city }}=user
//  console.log(name,city)

// 4. Destructure the following array to extract the first two elements.

//  const numbers = [10, 20, 30, 40];
// let [n1,n2]=numbers;
// console.log(n1,n2);

// 5. Use destructuring to extract and print `name` and `age` from the following object with default
// values in case they are missing.

//  const person = { name: 'John' };
//  let {name,age="not avaliable"}=person;
//  console.log(name,age);


// Medium Level Questions
// 1. Destructure the following nested object to extract `name`, `age`, and `city`.


//  const user = {
//  details: {
//  name: 'Alice',
//  age: 25,
//  address: {
//  city: 'New York',
//  country: 'USA'
//  }
//  }
//  };

//  let {details:{name,age,address:{city}}}=user;
//  console.log(name,age,city)

// 2. Destructure the following array of objects to extract the `name` property from each object.
//  const users = [
//  { name: 'John', age: 30 },
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 35 }
//  ]
//  let [{name:name1},{name:name2},{name:name3}]=users;
//  console.log(name1,name2,name3);

// 3. Use destructuring to extract `name` and `age` from the following object and collect the remaining
// properties into a variable called `details`.


//  const person = { name: 'John', age: 30, city: 'New York', country: 'USA' };
//  const {name,age,...details}=person;
//  console.log(name,age,details)

//4. Destructure the following object dynamically using a variable `prop` to extract `name` and `age`.
//  const prop = 'user';
//  const data = { user: { name: 'Alice', age: 25 } };
//  const {[prop]:{name,age}}=data;
//  console.log(name,age)

// 5. Destructure the following object to extract the properties `name` and `age`, and use aliases to
//rename them as `fullName` and `yearsOld`, respectively.


//  const person = { name: 'Alice', age: 30 };
//  const {name:fullname,age:yearsOld}=person;
//  console.log(fullname,yearsOld)

// Advanced Level Questions
// 1. Destructure the following object to extract the properties `name`, `age`, and `city`, and use aliases
// `firstName` for `name` and `location` for `city`.

//  const user = {
//  name: 'John',
//  age: 30,
//  address: {
//  city: 'New York',
//  country: 'USA'
//  }
//  };
//  const {name:firstname,age,address:{city:location}}=user;
//  console.log(firstname,age,location);


// 2. Write a function `printEmployee` that accepts an `employee` object and uses destructuring with
// default values for `name`, `position`, and `salary`. Use the rest pattern to collect additional properties
// and print all the details.

// const employee1 = { name: 'John', position: 'Manager', salary: '$70,000', department: 'Sales' };

// function printEmployee(employee1){
//     const {name,position,salary,department}=employee1;
//     console.log(name,position,salary,department);
// }
// printEmployee(employee1);


// 3. Destructure the following nested object to extract `name`, `age`, and `city`, where `city` is a
// property of the `address` object inside the `details` object.


//  const data = {
//  details: {
//  name: 'Alice',
//  age: 25,
//  address: {
//  city: 'Los Angeles',
//  country: 'USA'
//  }
//  }
//  };

//  const {details:{name,age,address:{city} } } =data;
//  console.log(name,age,city);

// 4. Use destructuring to extract the `firstName` and `lastName` properties from `userInfo` and
// rename them as `first` and `last`, respectively. Then print them using a function.

//  const userInfo = { firstName: 'John', lastName: 'Doe' };
//  const {firstName:first,lastName:last}=userInfo;
//  function display(first,last){
//     console.log(first,last)

//  }
//  display(first,last);

// 5. Write a function `getUserInfo` that accepts an object with nested properties and destructures it to
// return the `name` and `city`. Use a fallback value for `city` if it's missing.


 const user = {
 name: 'John',
 address: {
 country: 'USA'
 }
 }
function getUserInfo(user){
    const {name,address:{city="city not avaliable"}}=user;
    console.log(name,city)
}
getUserInfo(user);