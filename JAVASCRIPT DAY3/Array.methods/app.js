let arr=[10,20,30,40,50];


// 1. Length
// console.log(arr.length);

// 2. Push
// let returnType= arr.push("sam");
// let returnType= arr.push("sam",20); //multiple valid
// console.log(returnType); //return length
// console.log(arr);

// 3. Pop
// arr.pop(50);
// let returnType=arr.pop();
// console.log(returnType); // returns deleted element and single pop at a time
// console.log(arr);


// 4. unshift() -> push() but from starting
// let returnType=arr.unshift("monu bhaiya ki shaadi");
// let returnType=arr.unshift("monu bhaiya ki shaadi","in december"); multiple unshift possible
// console.log(returnType);
// console.log(arr);

// 5. ahift() -> pop() but from starting
let returnType=arr.shift();
console.log(returnType);
console.log(arr);