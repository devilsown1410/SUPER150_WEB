// ------------------------------- FOREACH FUNCTION --------------------------------------

let arr = [10,20,30,40,50];
arr.forEach(
    function(item,index){
        console.log(`index: ${index} -- item: ${item}`);
});


// ------------------------------- MAP FUNCTION --------------------------------------

// let arr = [10,20,30,40,50];
// let newArr = arr.map(function(item,index){
//     return 2*item;
// })
// console.log(arr);         // [10,20,30,40,50]
// console.log(newArr);      // [20,40,60,80,100]

// ------------------------------- FILTER FUNCTION --------------------------------------


// let arr = [10,20,30,40,50];
// let newArr = arr.filter(function(item,index){
//    if (item>=30){
//     return true
//    }
// })
// console.log(arr);         // [10,20,30,40,50] 
// console.log(newArr);      // [30,40,50]