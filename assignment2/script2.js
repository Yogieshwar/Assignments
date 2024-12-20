
// #### 1. Extract User Details

// Write a function that extracts `name` and `email` from a user object and logs them.

// const user = { name: 'Alice', email: 'alice@example.com' };
// function displayUser({name,email}){
    
//     console.log(`Name : ${name} email:${email}`)
// }
// displayUser(user);


// #### 2. Process Product Data
// Write a function that extracts `name` and `price` from a product object and logs them, with a default
// value for `price`.

// const product = { name: 'Laptop' };
// function displayProduct({name,price="$500"}){
//     console.log(`${name} costs ${price}`)
// }
// displayProduct(product);

// #### 3. Handle API Response

// Write a function that extracts `status` and `data` from an API response and logs them.



// const apiResponse = { status: 200, data: { id: 101, title: 'Learn JavaScript' } };
// function handleResponse({status,data:{id,title}}){
   
//     console.log(`Status: ${status}, Data: {id: ${id}, title: ${title}}`)

// }
// handleResponse(apiResponse);




// #### 4. Update Settings
// Write a function that extracts `theme` and `notifications` from a settings object and logs them, with a
// default value for `notifications`.


// const settings = { theme: 'dark' };
// function updateSettings({theme,notifications="true"}){
//     console.log(`Theme ${theme} , Notifications: ${notifications}`)

// }
// updateSettings(settings);



// #### 5. Filter Search Parameters
// Write a function that extracts `query` and `page` from a search parameter object and logs them.

// const searchParams = { query: 'JavaScript', page: 1 };
// function filterSearch({query,page}){
//     console.log(`Query: ${query}, Page:${page}`)

// }
// filterSearch(searchParams);

// #### 6. Log Task Details

// Write a function that extracts `id` and `completed` from a task object and logs them.

// const task = { id: 1, title: 'Do homework', completed: false };
// function logTaskDetails({id,completed}){
//     console.log(`Task ID: ${id}, Completed: ${completed}`)

// }
// logTaskDetails(task);



// #### 7. Extract Nested Profile Information

// Write a function that extracts `name` and `city` from a nested profile object and logs them.

// const profile = { name: 'Bob', location: { city: 'Berlin', country: 'Germany' } };
// function showProfile({name,location:{city}}){
//     console.log(`${name} Lives in ${city}`)

// }
// showProfile(profile);


// #### 8. Map Over Users
// Write a function that logs the `name` and `email` of each user in an array of user objects.

// const users = [
//  { name: 'Alice', email: 'alice@example.com' },
//  { name: 'Bob', email: 'bob@example.com' },
// ];
// function logUsers(users){
    
//     users.map(({name,email})=>
//         console.log(`Name: ${name}, Email: ${email}`));
    

// }
// logUsers(users);



// #### 9. Combine Properties Using Rest
// Write a function that extracts `name` and combines the remaining properties of a user object into a
// separate object.

// const user = { name: 'Charlie', age: 30, country: 'USA' };
// function extractUserDetails({name,...details}){
  
//     console.log(`Name ${name} Details ${JSON.stringify(details)}`);

// }

// extractUserDetails(user);


// #### 10. Handle Dynamic Destructuring
// Write a function that dynamically extracts a value from an object using a provided key.

// const user = { name: 'Dave', age: 35, email: 'dave@example.com' };
// function getDynamicValue(obj,key){
//     return obj[key]

// }

// console.log(getDynamicValue(user, 'email'));

// #### 11. Extract Nested Properties with Default Values

// Write a function that extracts `host`, `port`, and a default `user` from a nested configuration object.

// const config = { database: { host: 'localhost', port: 5432 } };
// function displayConfig({database:{host,port,user="admin"}}){
//     console.log(`Host: ${host}, Port: ${port}, User: ${user}`)

// }
// displayConfig(config);



// #### 12. Swap Variables Using Destructuring

// Write a destructuring statement to swap the values of two variables.

// let a = 1, b = 2;
// [a, b]=[b, a];
// console.log(`a: ${a}, b:${b}`);



// #### 13. Handle Missing Keys Gracefully
// Write a function that extracts `id` and `name` from an object, providing a default value for `name`.

// const data = { id: 42 };
// function processData({id,name="Unknown"}){
//     console.log(`ID: ${id}, Name: ${name}`);

// }
// processData(data);

// #### 14. Merge Objects with Rest and Destructuring
// Write a function that combines two objects using destructuring and rest syntax.

// const user1 = { name: 'Eve', age: 28 };
// const user2 = { country: 'France' };
// function mergeUsers(user1,user2 ){
//     console.log(`{ ${JSON.stringify(user1)}}`)
// }
// mergeUsers({ ...user1, ...user2 });


// #### 15. Extract Coordinates from Object
// Write a function that extracts `x` and `y` coordinates from a point object and logs them.

// const point = { x: 10, y: 20, z: 30 };
// function extractCoordinates({x,y}){
//     console.log(`X ${x}, Y: ${y}`)

// }
// extractCoordinates(point);



// #### 16. Destructure Array Elements
// Write a function that extracts the first two elements from an array and logs them.

// const numbers = [100, 200, 300];
// function logFirstTwo([f,s]){
//     console.log(`First: ${f}, Second: ${s}`)

// }
// logFirstTwo(numbers);
// // Expected Output: First: 100, Second: 200

// #### 17. Extract Values with Aliases
// Write a function that destructures `id` and `name` from an object and logs them with aliases.

// const user = { userId: 7, userName: 'John' };

// function logUser({ userId:id, userName:name }){
//     console.log(`ID: ${id}, Name: ${name}`)

// }
// logUser(user);

// // Expected Output: ID: 7, Name: John

// #### 18. Flatten Nested Objects
// Write a function that extracts values from a deeply nested object and logs them in a flattened
// manner.

// const data = { user: { id: 1, profile: { name: 'Anna', age: 25 } } };
// function flattenObject({user:{id,profile:{name,age}}}){
//     console.log(`ID: ${id} Name: ${name}, Age: ${age}`)

// }
// flattenObject(data);


// #### 19. Destructure Function Parameters with Defaults
// Write a function that extracts `name` and `role` with a default value from its parameters.
// function logRole({ name ,role="user"}){{
//     console.log(`Name: ${name}, Role: ${role}`)

// }

// }
// logRole({ name: 'Ella' });

// // Expected Output: Name: Ella, Role: user

// #### 20. Destructure Arrays with Rest
// Write a function that extracts the first element of an array and logs the rest as a separate array.

// const items = [1, 2, 3, 4];
// function extractRest([a,...rest]){
//     console.log(`First: ${a}, Rest:[ ${rest}]`)


// }
// extractRest(items);

// #### 21. Dynamic Nested Destructuring
// Write a function that extracts a nested property dynamically using a key.
// **Test case:**
// ```javascript
// const obj = { details: { address: { city: 'Paris' } } };
// console.log(getNestedValue(obj, 'address.city'));
// // Expected Output: Paris
// ```
// ---
// #### 22. Validate and Destructure
// Write a function that validates the presence of specific properties before destructuring an object.

const settings = { theme: 'light' };

validateAndLog(settings);

// // Expected Output: Error: Missing required property "notifications"

// #### 23. Partial Destructuring
// Write a function that extracts only specific keys from a larger object and ignores the rest.

// const bigObject = { id: 1, name: 'Test', extra: 'Ignore me' };
// function extractImportant({id,name}){
//     console.log(`ID: ${id} Name: ${name}`)

// }
// extractImportant(bigObject);

// #### 24. Multi-Level Destructuring in Function Arguments

// Write a function that extracts values from multiple levels of nesting within the function arguments.

// const data = { user: { profile: { username: 'Max' } } };
// function displayUsername({user:{profile:{username}}}){
//     console.log(`username: ${username}`)

// }
// displayUsername(data);
