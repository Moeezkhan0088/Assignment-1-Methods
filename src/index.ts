// const a = Number("5")
// const b = Number("3")

// const sum = (a: number, b: number)=>{
//     return a + b;
// };
// console.log(sum(a, b));

// const multiply = (a: number, b: number)=>{
//     return a * b;
// };

// console.log(multiply(a, b));



// ----------- Number Methods In TypeScript ----------------

// -------------To String --------------------------------


let num: number = 20;
let str: string = num.toString();


console.log(typeof(str));

 console.log(str);
 

 //-------------To Fixed --------------------------------

let num1: number = 20.567;
let fixed = num1.toFixed(2);

console.log(typeof(fixed));

 console.log(fixed);

 //-------------To Precision --------------------------------

 let num2: number = 20.567;
 let precision = num2.toPrecision(3);
 
 console.log(typeof(precision));
 
 console.log(precision);


 //-------------ToExponential --------------------------------

let num3: number = 20321;
let exponential = num3.toExponential(3);

 console.log(typeof(exponential));
 
 console.log(exponential);



//  ---------------value of---------------------------


let num4: number = 203;
let value = num4.valueOf();

console.log(typeof(value));

 console.log(value);










