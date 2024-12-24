// # Assignments on Array Methods


// ## **Basic Level**
// ### **1. Transform Elements with `.map()`**
// **Task:** 
// You have an array of names. Convert all names to uppercase.

// const names = ["alice", "bob", "charlie"];
// let arr=names.map((ele)=>{
    
//     return ele.toUpperCase();
// })
// console.log(arr);


// ### **2. Filter Items with `.filter()`**
// **Task:** 
// You have an array of numbers. Filter out all numbers less than 10.


// const numbers = [5, 12, 8, 20, 3];
// let arr=numbers.filter((ele)=>{
//     return ele>10;
// })
// console.log(arr)



// ### **3. Calculate Total with `.reduce()`**

// Find the sum of all elements in an array.

// const expenses = [100, 200, 50, 300];
// let sum=expenses.reduce((pre,nex)=>{
//     return pre+nex
// },0)
// console.log(sum)



// ### **4. Find an Item with `.find()`**
// **Task:** 
// You have a list of tasks. Find the first task that is marked as `completed`.

// const tasks = [
//  { name: "Task 1", completed: false },
//  { name: "Task 2", completed: true },
//  { name: "Task 3", completed: false }
// ];

// let arr=tasks.find(ele=>ele.completed===true)
// console.log(arr)


// ### **5. Sort Items with `.sort()`**
 
// Sort an array of numbers in ascending order.

//  const scores = [45, 10, 85, 30];
//  let arr=scores.sort((a,b)=>{
//     return a-b;
//     
//  })
//  console.log(arr)



// ## **Medium Level**

// ### **1. Chain Methods**
// **Task:** 
// Filter numbers greater than 10, then double them using `.map()`.

// const numbers = [5, 12, 8, 20, 3];
// let filteredarr=numbers.filter(ele=>ele>10)
// //console.log(filteredarr)
// let doubledarr=filteredarr.map(doubleele=>doubleele*2)
// console.log(doubledarr)


// ### **2. Find Total Stock**
// **Task:** 
// Calculate the total stock from an array of products using `.reduce()`.

// const products = [
//  { name: "Laptop", stock: 10 },
//  { name: "Phone", stock: 5 },
//  { name: "Tablet", stock: 8 }
// ];
// let productarr=products.reduce((total,ele)=>{
//     return total+ele.stock;
// },0)

// ### **3. Validate Data with `.every()`**
// **Task:** 
// Check if all users in an array are verified.

// const users = [
//  { name: "Alice", verified: true },
//  { name: "Bob", verified: true },
//  { name: "Charlie", verified: false }
// ];
// let verifiedUsers=users.every(ele=>ele.verified===true)
// console.log(verifiedUsers)

// ### **4. Identify Urgent Tasks with `.some()`**
// **Task:** 
// Check if there are any urgent tasks in the list.

const tasks = [
 { name: "Task 1", urgent: false },
 { name: "Task 2", urgent: true },
 { name: "Task 3", urgent: false }
];

let urgentTask=tasks.some(ele=>ele.urgent===true);
console.log(urgentTask);

// ### **5. Custom Sorting**
// **Task:** 
// Sort an array of objects by age in descending order.

// const people = [
//  { name: "Alice", age: 25 },
//  { name: "Bob", age: 30 },
//  { name: "Charlie", age: 20 }
// ];
// let ageArr=people.sort((a,b)=>b.age-a.age)
// console.log(ageArr)

// ## **Advanced Level**

// ### **1. Group Items by Category**
// **Task:** 
// Group products by their category using `.reduce()`.

// const products = [
//  { name: "Laptop", category: "Electronics" },
//  { name: "Shirt", category: "Clothing" },
//  { name: "Phone", category: "Electronics" },
//  { name: "Pants", category: "Clothing" }
// ];

// const arr=products.reduce((array,product)=>{
//     if(!array[product.category]){
//         array[product.category]=[];
//     }
//     array[product.category].push(product);
//     return  array

// },{});
// console.log(arr)


// ### **2. Chain Multiple Methods**
// **Task:** 
// Filter products in stock, then map their names, and sort alphabetically.

// const products = [
//  { name: "Laptop", stock: 10 },
//  { name: "Phone", stock: 0 },
//  { name: "Tablet", stock: 5 }
// ];
// const filtredArray=products.filter(ele=>ele.stock>0)
// //console.log(filtredArray)
// const mapedArray=filtredArray.map(ele=>ele.name)
// const sortedArray=mapedArray.sort();
// console.log(sortedArray)


// ### **3. Advanced Search with `.find()` and `.filter()`**
// **Task:** 
// Find the first product in a specific category that is in stock.

const products = [
 { name: "Laptop", category: "Electronics", stock: 0 },
 { name: "Shirt", category: "Clothing", stock: 5 },
 { name: "Phone", category: "Electronics", stock: 10 }
];

const arr=products.find(ele=>ele.category=="Electronics"&&ele.stock>0)
console.log(arr)

// **Expected Output:**
// ```javascript
// { name: "Phone", category: "Electronics", stock: 10 }
// ```
// ---
// ### **4. Nested Data Transformation**
// **Task:** 
// Flatten and extract unique tags from a list of posts.
// **Input:**
// ```javascript
const posts = [
 { id: 1, tags: ["javascript", "web"] },
 { id: 2, tags: ["javascript", "react"] },
 { id: 3, tags: ["web", "css"] }
];
const flattenArray=posts.reduce((arr,post)=>{
    if(!arr[post.tags]){
        arr[post.tags].push(post)
    }
    return arr
},[]);
console.log(flattenArray)

// ```
// **Expected Output:**
// ```javascript
// ["javascript", "web", "react", "css"]
// ```
// ---
// ### **5. Implement Custom Methods**
// **Task:** 
// Write your own version of `.map()` as a function.
// **Input:**
// ```javascript
// const numbers = [1, 2, 3];
// const double = customMap(numbers, num => num * 2);
// ```
// **Expected Output:**
// ```javascript
// [2, 4, 6]
// ```
// **Hint:**
// ```javascript
// function customMap(array, callback) {
//  const result = [];
//  for (let i = 0; i < array.length; i++) {
//  result.push(callback(array[i], i, array));
//  }
//  return result;
// }
// ```