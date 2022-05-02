"use strict";
let a = 20;                // This will not cause an error

let arguments = 3.14;      // Cause an error

let x = 010;               // Cause an error

let y = "\010";            // Cause an error

let eval = 3.14;           // Cause an error

eval ("var b = 2");
alert (b);                 // Cause an error

function name(){
   "use strict"; 
    x = 45;                // Cause an error
}
console.log(a);
console.log(arguments);
console.log(x);
console.log(y);
console.log(eval);
console.log(name());