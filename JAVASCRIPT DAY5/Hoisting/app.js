// DTZ
console.log(a);

// let a=10; gives error of Dead Temporal Zone
// var a=10; gives undefined of DTZ
// const a=10; gives error of DTZ

// var a=10;
// console.log(a);
// var a=100;
// console.log(a);

// function fun(){
//     var a=200;
//     console.log(a);
// }
// fun();
// console.log(a);

var a=10;
console.log(a);
a=100;
console.log(a);

if (true){
    let a=200;
    console.log(a);
    

}

console.log(a);