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


// console.log(str10,endswith("world"));         issue occur  here




console.log(str10.repeat(10));
console.log(str10.replace("world", "Hamza"));


let str12: string = "hello Moeez, Hello hamza";

console.log(str12.replace("hello", "Hi"));                      //   #issue occur here


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

let numbers: number[] = [1, 2, 3, 4, 5];


numbers.push(6); 
console.log(numbers); 

numbers.pop(); 
console.log(numbers); 

numbers.unshift(0); 
console.log(numbers);

numbers.shift();
console.log(numbers); 


numbers.forEach(num => console.log(num));

let doubled = numbers.map(num => num * 2); 
console.log(doubled); 

let evenNumbers = numbers.filter(num => num % 2 === 0); 
console.log(evenNumbers); 

let firstGreaterThanThree = numbers.find(num => num > 3); 
console.log(firstGreaterThanThree); 

let indexOfThree = numbers.findIndex(num => num === 3); 
console.log(indexOfThree); 

let hasNegative = numbers.some(num => num < 0); 
console.log(hasNegative);

let allPositive = numbers.every(num => num > 0); 
console.log(allPositive); 

let sum = numbers.reduce((acc, num) => acc + num, 0); 
console.log(sum); 


let moreNumbers: number[] = [6, 7, 8];
let combined = numbers.concat(moreNumbers); 
console.log(combined); 

let sliced = numbers.slice(1, 4); 
console.log(sliced);

numbers.splice(2, 1, 10); 
console.log(numbers);


let indexOfTwo = numbers.indexOf(2); 
console.log(indexOfTwo); 

let includesTen = numbers.includes(10); 
console.log(includesTen); 


let joined = numbers.join('-'); 
console.log(joined); 

let nestedNumbers: (number | number[])[] = [1, [2, 3], 4];
let flattened = nestedNumbers.flat(); 
console.log(flattened); 


numbers.sort((a, b) => a - b); 
console.log(numbers); 

numbers.reverse(); 
console.log(numbers); 



// Object methods

// let person = {
//   namee: "John",
//   age: 30,
//   address: {
//       city: "New York",
//       zip: "10001"
//   },
//   hobbies: ["reading", "cycling"]
// };

// person.namee = "Jane";
// console.log(person.namee);

// let age = person["age"];
// console.log(age);

// person.address.zip = "10002";
// console.log(person.address.zip);

// person.email = "jane@example.com";
// console.log(person.email);

// delete person.email;
// console.log(person.email);

// let keys = Object.keys(person);
// console.log(keys);

// let values = Object.values(person);
// console.log(values);

// let entries = Object.entries(person);
// console.log(entries);

// let additionalInfo = {
//   profession: "Engineer",
//   hobbies: ["reading", "cycling", "hiking"]
// };

// Object.assign(person, additionalInfo);
// console.log(person);

// Object.freeze(person);
// person.age = 31;
// console.log(person.age);

// Object.seal(person);
// person.namee = "John";
// console.log(person.namee);
// delete person.address;
// console.log(person.address);

// let { namee, address: { city } } = person;
// console.log(namee);
// console.log(city);

// let newPerson = { ...person, phone: "123-456-7890" };
// console.log(newPerson);

// let key = "email";
// let obj = {
//   [key]: "example@example.com"
// };
// console.log(obj.email);

// let proto = { greet() { return "Hello"; } };
// let newObject = Object.create(proto);
// console.log(newObject.greet());

// console.log(person.hasOwnProperty("namee"));
// console.log(person.hasOwnProperty("toString"));



// factorial finder


import * as readlineSync from 'readline-sync';


function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}


const input = readlineSync.question('Enter a number to compute its factorial: ');
const num10 = parseInt(input, 10);

if (isNaN(num10) || num10 < 0) {
    console.log('Please enter a non-negative integer.');
} else {
    const result = factorial(num10);
    console.log(`Factorial of ${num10} is ${result}`);
}





// 2nd question


function calculateWorkingDays(startDate: Date, endDate: Date): number {
    let count = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        
        if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return count;
}


const startInput = readlineSync.question('Enter the start date (YYYY-MM-DD): ');
const endInput = readlineSync.question('Enter the end date (YYYY-MM-DD): ');
const dailyRateInput = readlineSync.question('Enter the daily rate: ');

const startDate = new Date(startInput);
const endDate = new Date(endInput);
const dailyRate = parseFloat(dailyRateInput);

if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || isNaN(dailyRate)) {
    console.log('Invalid input. Please make sure dates are in YYYY-MM-DD format and daily rate is a number.');
} else {
    const workingDays = calculateWorkingDays(startDate, endDate);
    const totalSalary = workingDays * dailyRate;

    console.log(`Number of working days: ${workingDays}`);
    console.log(`Total salary: $${totalSalary.toFixed(2)}`);
}






// 3rd ques





type User = {
  name: string;
  age: number;
  email?: string;  
  phone?: string; 
}


function promptForUserInput(): User {
  const name = readlineSync.question('Enter your name: ');
  const ageInput = readlineSync.question('Enter your age: ');

  
  if (!name) {
      throw new Error('Name is required.');
  }
  if (!ageInput || isNaN(parseInt(ageInput, 10))) {
      throw new Error('Valid age is required.');
  }

 
  const age = parseInt(ageInput, 10);

 
  const email = readlineSync.question('Enter your email (optional): ');
  const phone = readlineSync.question('Enter your phone number (optional): ');

  
  const user: User = {
      name,
      age,
      email: email || undefined,
      phone: phone || undefined  
  };

  return user;
}


try {
  const user = promptForUserInput();
  console.log('User object created:', user);
} catch (error) {
  if (error instanceof Error) {
      console.error(error.message);
  } else {
      console.error('An unexpected error occurred.');
  }
}





//----------------- assignments of objects with inheritance and interfaces---------



interface Animal {
  name: string;
  age: number;
  isWild: boolean;
}


interface Bird extends Animal {
  canFly: boolean;
  wingSpan: number; 
}


interface Human extends Animal {
  occupation: string;
  hasDrivingLicense: boolean;
}




const lion: Animal = {
  name: "Lion",
  age: 8,
  isWild: true,
};


const eagle: Bird = {
  name: "Eagle",
  age: 5,
  isWild: true,
  canFly: true,
  wingSpan: 220, 
};


const johnDoe: Human = {
  name: "Moeez",
  age: 30,
  isWild: false,
  occupation: "Engineer",
  hasDrivingLicense: true,
};




interface Car {
  brand: string;
  model: string;
  year: number;
  isElectric: boolean;
}


interface Computer {
  brand: string;
  processor: string;
  ramSize: number; 
  isGaming: boolean;
}



const tesla: Car = {
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};


const gamingPC: Computer = {
  brand: "Alienware",
  processor: "Intel Core i9",
  ramSize: 32, 
  isGaming: true,
};


console.log("Animal (Lion):", lion);
console.log("Bird (Eagle):", eagle);
console.log("Human (John Doe):", johnDoe);
console.log("Car (Tesla):", tesla);
console.log("Computer (Gaming PC):", gamingPC);
