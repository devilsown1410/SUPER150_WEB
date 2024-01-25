// function outer(){
//     let a=100;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let out=outer();
// out();
// whenever you return a functions that function is never returned along it always takes along
// their lexical environment with it so that if in future we ever want to run that returned function 
// then it should not throw an error.

// function outer(){
//     let a=100;
//     let b=200;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let out=outer();
// out();

// Note- Use case of Closure before the class syntax was introduced we had no way to privatize our variables
//  or functions so in that case we used closures.

function counter(){
    let count=0;
    return{
        getCount: function(){
            console.log(count);
        },
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        reset: function(){
            count=0;
        }
    }
}
let count1=counter();
console.log(count1.getCount());
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.getCount());
console.log(count1.reset());
console.log(count1.getCount());