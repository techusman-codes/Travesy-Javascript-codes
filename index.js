
// // function add(num1, num2){
// //     console.log(num1 + num2)
// // }

// // add(5,10)
// //More on parameter and Argument

// function SayHello() {
//     console.log('hello world')
// }


// // to cll the function then add the following code

// SayHello();
// // when you pass anything at the first line of a function that is parameter
// // when you call a functio you are using an Argument.

// // function add(num1, num2) {
// //     console.log(num1 + num2)
// // }

// // add(2, 5);

// // function subtract(num3, num4){
// //     return num3 - num4
// // }
// // const result = (10, 19);
// // console.log(result,  subtract(10, 20))

// // Argument and paramters
// // create a parameter of User and pass an argument of Usman is registerd on a function

// function Registerd(user) {
//     return user + " is registerd"
// }

// console.log(Registerd('usman'))

// //  Array as Params

//  function getRandom(arr){
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     const item = arr[randomIndex];
//     console.log(item)
//  }
//  getRandom([1,2,4,5,6,7,7,8,9,9]);

// // Global scope
// // function scope
// // below is the example of nested scope

// function first() {
//      const x = 100;

//      function second() {
//         const y = 200;
//         console.log(x + y);
//      }
  
//      second();
     
// }

// first();

// // Funcrtion Declearation


// // function addDollarSign (value){
// //     return '$' + value;
// // }

// // console.log(addDollarSign(100));

// // Arrow function it declear in 2015 ES6

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(1, 2));
// // implicit function 
// const substract = (a, b) => a - b;
// console.log(substract(10, 5));

// // can leave off () with a single param
// const double = a => a * 2;
// console.log(double(10));

// // Returning an object

// const createObj = () => ({
//     name: 'usman'
// });

// console.log(createObj())

// // IIFE  immediate invork function experssions

// // (function (name) {
// //     console.log('hello ' + name)
// // })('usman');

// function challenge 

// function getCelsius(f) {
//    const celsius = ((f - 32) * 5) / 9;
//    return celsius;
// }
// // to make it one line arrow function
// const  getCelsius = (f) => ((f - 32) * 5) / 9;
// console.log(getCelsius(40));



// Switches Case, they are use  mostly when you have too many if else statements

const d = new Date (2024, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hours = d.getHours();

switch(month){
  case 1:
  console.log('its january');
  break;
}

switch(month){
    case 2:
    console.log('its febuary');
    break;
  }
  
  
  switch(month){
    case 3:
    console.log('its March');
    break;
    default:
    console.log('its not January, Not Febuary, and Not March');
  }

  switch (true) {
    case hours < 12:
       console.log('Good Morning'); 
        break;
    case hours < 18:
      console.log('Good Afternoon');
        break;
    default:
     console.log('Good Night');      
  };

//   calculator Challenge

function calculator (num1, num2, operator){
    let result;

    switch (operator) {
        case '+':
           result = num1 + num2; 
            break;
        case '-':
         result = num1 - num2; 
            break;
        case '/':
         result = num1 / num2;
             break;
        
        case '*':
         result = num1 * num2;
           break;
           
        default:
           result = 'invalid result';
    }
    console.log(result);
    return result;
}

calculator(5, 2, '%');

// Truthy and Falsy Values

const x = function name(params) {
    
};
if (x) {
    console.log('this is truthy');
} else {
    console.log('this is a falsy');
}

// Truth and Falsy Caveats, lets create a form that is asking how many children we have

const children = 0;

if (children !== undefined) {
    console.log(`you have ${children} children`);
} else{
    console.log(`please enter the Number of your children`);
}

// checking empty Arrays

const posts = ['post one', 'post two'];
if (posts.length > 0) {
    console.log('list posts');
} else {
    console.log('No post To list');
}

// checking for empty Object  

const user = {
    name: 'usman',
};

if (user) {
   console.log('list user'); 
//    use object.keys then pass the argument.lenght to check an empty object
} else{
    console.log('no user')
}

// Logical operators(&& true || false)

// && will return first falsy value or the last value

// let a;
//  a = 10 && 20;
//  a = 10 && 20 && 30;
//  a = 10 && '' && 0 && 30;
// console.log(a)


// Ternary Operator 

// const age = 20;

// age >= 18 ? console.log('you can vote') : console.log('you can not vote');

// // Assigning a conditional value to a variable

//  const canVote = age >= 18 ? true : false;

//  console.log(canVote);

// //  Multiple Statement
// const auth = '0';


// // if (auth) {
// //   alert('welcome to the Dashboard');
// //   redirect = '/dashboard';  
// // } else{
// //     alert('Access Denied');
// //     redirect = '/login';

// const redirect = auth ? 
// (alert('welcome to the Dashboard'), '/dashboard') 
// : (alert('Access Denied'), '/login');

// console.log(redirect);

// Loops itteration and High order Array Methods

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
      console.log('7 is my lucky number')  
    }else{
        console.log('Numbers' + i);
    }      
}

// Nested Loops

for (let i = 1; i <= 10; i++) {
 console.log('Number' + 1);

 for (let j = 1; j <= 5; j++){
    console.log(`${i} * ${j} = ${i * j}`);
 }
}

// for Loop through an array 

const names = ['Brad', 'sam', 'sara', 'john', 'tim'];

for (let i = 0; i < names.length; i++){
     
    
if (i === 2) {
    console.log(names[i] + ' is the Best');
}else{
    console.log(names[i]);
}
}

// Break and countinue Starement

// for (let i = 0; i<= 20; i++) {

//     if (i === 15){
//         console.log('Breaking...');
//         break;
//     }
//     console.log(i)
// }

// Countinue

for (let i = 0; i<=20; i++){
 if (i === 13){
    console.log('Skipping 13...');
    continue;
 }
 console.log(i)
}

// while Loop and DO-while loop
 
  let i = 0;

  while (i <= 20) {
    console.log('Number ' + i);
    i++;
  }

 
  



