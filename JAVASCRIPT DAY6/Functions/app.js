//why are functions in js are called First class citizen?
// whenever a variable assigned to a value and the value is function then that finction will be 
//  called as first class function and this concept of assigning a variable to a value function is called 
//  first class citizen.

// what are higher order functions?
// There are two possible situations for higher order functions -
//   1) when you have two functions (function 1 , function 2) and any of these functions (assuming function 2)
//     is being sent as an argument to the other function (function 1) then function is called higher order function.

//   2)when you have two functions (f1 and f2) if one of the function (f1) can return the other function (f2)
//     from itself then again function f1 is called higher order function.

// Note- when nothing is returned from the function by default undefined is returned

// function fun1(fn){
//     console.log('fun1');
//     fn();
// }
// function fun2(){
//     console.log('fun2');
// }

// fun1(fun2);

// O/P - fun1
//       fun2

// function fun1(){                         higher order function
//     console.log("inside fun1");
    // function fun2(){                     
//         console.log("inside fun2");
//     }
//     return fun2;
// }
// let returnedValue= fun1();
// returnedValue();

// What is CallBack Function?
// A callback function in JavaScript is a function passed into another function as an argument, which is 
//  then invoked inside the outer function to complete some kind of action. 
// OR
// A callback function is basically when you pass it as an argument to some high order function and that passed function 
//  inside higher order function this calling criteria is a must then only it will be called as callback function.

// function fun1(fn){
//     console.log('fun1');
//     fn();                 #callback function fn as the argument function is called here.
// }
// function fun2(){
//     console.log('fun2');
// }

// fun1(fun2); #higher order function
