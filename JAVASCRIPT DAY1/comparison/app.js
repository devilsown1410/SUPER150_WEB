// let a=10;
// if(a=="10"){
//     console.log("a is 10");
// }else{
//     console.log("a is not 10");
// }

let ans=29;
if(ans<18){
    console.log("No Entry");
}
else if(ans>=18 && ans<=25){
    console.log("Entry Permitted No Alcohol");
} else if(ans>25){
    console.log("Full Rights");
}

// Short-circuiting

let marks=100;
let attendance=88;
if(attendance>75|| mark>33){
    console.log("pass");
}
else{
    console.log("fail");
}

// ! -> not
let ans1 = !true==false;
console.log(ans1);
