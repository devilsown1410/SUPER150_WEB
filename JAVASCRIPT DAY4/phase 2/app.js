let a=100; 
console.log(a);
function hello(){
    let c=10;
    console.log(c);
}
let b=10;
console.log(b);
hello();

// For MCP
// a=undefined
// hello{} full function as it is
// b=undefined

// For CEP
// a=100
// hello{} same as it is
// b=10

// now Function execution is run hello execution context is run

// for mcp
// c=undefined

// for cep
// c=10;