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

let str6 : string = "123.45abc";

let numFloat2 : number = parseFloat(str6);

console.log(numFloat2);






// -------------String Methods ------------------------------   ----------------------------------------------------------------

let str10 : string = "Hello, world!";

console.log(str10.charAt(0));
console.log(str10.charAt(8));


console.log(str10.charCodeAt(0));
console.log(str10.charCodeAt(8));

let str11 : string = "Moeez";

let results :string = str10.concat(" " + " My Name is " + str11 );

console.log(results);


console.log(results.includes("world"))
console.log(results.includes("world",7))


console.log(str10.indexOf("world"));
console.log(str10.indexOf("world",8));

console.log(str10.lastIndexOf("world"));

console.log(str10.startsWith("world"));
console.log(str10.startsWith("Hello"));


// console.log(str10,endswith("world"));         issue occur




console.log(str10.repeat(10));
console.log(str10.replace("world", "Hamza"));


let str12: string = "hello Moeez, Hello hamza";

console.log(str12.replace("hello", "Hi"));                      //   #issue occur hear 


let str13:string = "Hello moeez";

console.log(str13.split(" ",2));
console.log(str13.split(""));



console.log(str13.slice(6));
console.log(str13.slice(0,5));



console.log(str13.substring(6));
console.log(str13.substring(0,7));



console.log(str13.toUpperCase());


console.log(str13.toLowerCase());



// --------------Array Methods----------------------------

let a : string[] = ["1","2","3"]
  a.push("4");
console.log(a);
  a.push("4","5");
console.log(a);


a.pop();
console.log(a);



a.shift();
console.log(a);


a.unshift("1");
console.log(a);



let b : (string|number)[] = ["1", "2", "3", "4", "5", 6];
let c : string[]=["20"];

let result = b.concat(c);
console.log(result);



 let remove = result.slice(1,5);
console.log(remove);






