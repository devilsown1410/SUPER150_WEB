

// function sam(){
//     let out=sam();
//     console.log(out); // undefined
// }

// Constructor Function

// Convention--Always start the constructor function with a capital letter
// new keyboard is used while creating constructor
// function Sam(){
//     let out=new Sam();
//     console.log(out); // sam {}
// }


function sam(){
    this.name="Sam";
    this.umar=2;

}

let out=new sam();
console.log(out);
// we never return anything from constructor because constructor's actual work is creating new object.
// so, there is no need to use return statement in constructor function.
// out.__proto__===sam.prototype  true
// out.__proto__.__proto__=Object.prototype true
