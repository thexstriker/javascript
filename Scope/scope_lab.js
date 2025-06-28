// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// console.log(blockVar);
// console.log(blockLet);

// function show() {
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
// }
// show();
// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

{
    var anotherVar = "another Var";
    //Var has global or functional scope
}


const anotherConst = "another Const";
let anotherLet = "another Let";
//const and let both have block-level scope

console.log(anotherVar);
console.log(anotherConst);
console.log(anotherLet);
