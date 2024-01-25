// Lexical Scoping - Local Memory(MCP) + Parents Lexical Scope 
// var a=100;
// console.log(a);
// fun();
// function fun(){
//     console.log(a);
//}

// let a=10;
// function f1(){
//     let b=100;
//     function  f2(){
//         console.log(b);
//         function f3(){
//             console.log(a);
//         }
//         f3();
//     }
//     f2();
// }
// f1();

// var a=10;
// if (true){
//     console.log(a);
//     var a=200;
//     console.log(b);
//     console.log(a);
// }
// let b=300;
// console.log(b);

var a=100;
let b=200;

if (a=='100'){
    var a=300;
    let b=400;
    console.log(a);
    console.log(b);
}
console.log(a);

console.log(b);


