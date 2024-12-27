// JavaScript Assignments 

// Basic Level

// Ternary Operator

// 1. Create a function `getGreeting` that takes a boolean `isMorning` as input and returns:
//  - "Good morning" if `isMorning` is true.
//  - "Good evening" otherwise.

// Example:
// const getGreeting = (isMorning) => {
//   const greet=(isMorning)?"Good Morning":"Good Evening"
//   return greet;
// };
// console.log(getGreeting(true)); 

// 2. Rewrite the following `if-else` block using a ternary operator:

// let message;
// if (status === "loading") {
//  message = "Loading...";
// } else {
//  message = "Loaded!";
// }

// let message=(status==="loading")?"loading":"loaded";
// console.log(message)

// Optional Chaining

// 3. Use optional chaining to retrieve the `email` of a user safely without causing an error:
// const user = {
//  profile: {
//  email: "john.doe@example.com",
//  },
// };
// console.log(user.profile?.email); 
 
// 4. Write a function `getUserCity` that takes a `user` object and returns the `city` from `address`
// safely. If `address` or `city` is missing, return "Unknown".

// Example:

// const user = { name: "Alice" }; // No address property
// const getUserCity = (user) => {
//     return user.address?.city??"Unknown"
 
// };
// console.log(getUserCity(user)); 
