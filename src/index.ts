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








//----------Converting variables to numbers -------------------------------- 

let str1: String = "123";
let  numb:number= Number(str1);

console.log(numb);


//  ---------------isNaN---------------------------

let str2: string = "hello";
let numb1: number = Number(str2);

if(isNaN(numb1)){
    console.log("Not a number");
}else{
    console.log("Is a number");
}

// --------------strFLoat -----------------


let strFloat : string = "123.456";
let numfloat : number = Number(strFloat);

console.log(numfloat);


// -------boolean ----------------

let bool : boolean = false;

console.log(typeof(bool));


let bool2 : boolean = true;

console.log(typeof(bool2));


// -----------parseint() ----------------


let str3 : string = "123abc";

let numInt : number = parseInt(str3);

console.log(numInt);




let str4: string ="123";

let numInt2 : number = parseInt(str4);

console.log(numInt2);



let str5 : string = "123abc";
let numInt3: number = parseInt(str5);

console.log(isNaN(numInt3)); 



// ------------parse float ------------------------

