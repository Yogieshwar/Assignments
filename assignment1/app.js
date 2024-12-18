import {add,subtract} from"./math.js";
import greeting from "./greeting.js";
import { setUser,getUser } from "./user.js";
import divide,{ multiply } from "./calculator.js";
import { calculateSum as sum } from "./mathOperations.js";
import { toUpperCase,toLowerCase,capitalize } from "./stringUtils.js";
import { application } from "./config.js";
import { person } from "./Person.js";



//task 1
console.log(add(10,55));
console.log(subtract(20,5));
//task 2
greeting("react");

//task 3
// setUser();
// getUser();

//task 4
console.log(divide(20,5));
console.log(multiply(5,3));

//task 5
console.log(sum(33,7))

//task 6
const str="hello react"
console.log(toUpperCase(str));
console.log(toLowerCase(str));
console.log(capitalize(str));


//task 7
console.log(application.appName);
console.log(application.version);
console.log(application.developer);

//task 8
const p=new person("yogie",22);
p.getDetails();

// //task 9
// funA();

// task 10
import {addition,upperCase} from "./index.js"
console.log(addition(10,9));
console.log(upperCase("react"))

//task 11
import { capitalise } from "./string1.js";
console.log(capitalise("react"));



//tas 12
import subtraction,{ multi } from "./MathOperations1.js";
console.log(subtraction(55,4));
console.log(multi(5,10))