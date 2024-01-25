// two types of loops in javascript for-in, for-of
// for-in loop is used to iterate over the properties of an object. It does not guarantee any specific order.
// for-of loop is used to iterate over iterable items (arrays). ordered


// //  for-in 
// let obj = {name: 'John', age: 25};
// for(let key in obj){
//     // console.log(`${key}: ${obj[key]}`);
//     console.log(obj[key]);    
// }


// console.log(obj.name);
// // console.log(obj[name]); 
// console.log(obj["name"]);

// key is stored as string in the backend in object we have to give string in object[name] to access the value
// accessing property using bracket notation with variable
// let propName = "age";
// console.log(obj[propName]);
// // accessing property using dot notation
// console.log(obj.age);

// // for-of loop
let arr = [10, 20, 30,true,40];
for(let value of arr){
    console.log(value);
}

