let obj={
    a:10,
    b:"samarth",
    c:function(){
        console.log("rahul singh");
    }
}
// when nothing is returned from function inside an object nothing is returned
// console.log(obj.c()); // undefined
// console.log(obj.d); // undefined
// console.log(obj.e()); // error e is not a function

console.log(obj.toString()); // [object object]
// Proto-type are kind of objects which acts like a fall back source for an object that is being created.

// __proto__ (dendere proto)
// obj.__proto__ === Object.prototype  (true)
// In javascript every object has a property called __proto__ or dendere proto which points
// to the prototye of the constructor function of that object.

// obj.__proto__ -> Object.prototype -> null
// obj.__proto__.__proto__   (null)

//  whenever we create a handwritten/hard-coded objects, it's dender proto is Object.Prototype and its dender 
// proto is null


// Array

// let arr=[10,20,30];
// console.log(arr.__proto__===Array.prototype); // true
// methods available in array prototype
// arr.__proto__ -> Array.Prototype.__proto__ -> Object.protoype ->null
// so all properties and methodes of object are also there in array

// String

// str.__proto__ -> String.prototype.__proto__ -> Object.prototype -> null

