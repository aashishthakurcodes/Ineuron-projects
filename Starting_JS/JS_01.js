 
//  Basics of any programming languages:-

// 1.Values
// 2.Variable
// 3.Operations
// 4.Conditions 
// 5.Loops
// 6.Function


// Values

// 1./Number values:-All number including Float and int ex. 56,4.5
let x=45;
console.log(typeof(x));

let u=96.5;
console.log(typeof(u));

//2.String
let g="Aashish Singh"
console.log(typeof(g));

// Similarly we have boolean , null and undefined values
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));

//above all the values are primitive data type value  => One Single Value
// below are non-primitive data types are:-
// Non- primitive Data Types => Will More then one value
// 1.Array
// 2.Objects

let arr=[1,89,63,7452,"Arun",63.5]
console.log(arr);
console.log(arr[3]);

//2.Objects
let obj={
    fname:"Aashish",
    lnmae:"Singh",
    num:9865327412
}
console.log(obj.lnmae);
console.log(obj);


// #Template Literals (Use backtics )
console.log(`My name is ${obj.fname} ${obj.lnmae} and my number is ${obj.num}`);



// Variables

// We can declare variable by using var let and const
//1. By using var:- we can declare an another variable with same name also assign different value in it.

// var a="Aashish Singh"
// var a="Aashish thakur"
// console.log(a);

//For assigning values
var a="Hello world";
    a="Hello ineurin team";
console.log(a);

//2. By using let:- we cannot declare an another variable with same name also assign different value in it.

let b="Anurag tiwari";
// let b="Ineuron team member" it will give an error
// But we can assign other value in it
   b="Ineuron team member"
   console.log(b);

 
//3. By using const:- we cannot declare an another variable with same name and we cannot assign other value in it.

const c="this is a const variable"
// const c="this is another const variable" this will give also an error
        // c="by changing values" // it will also givd error bcz c is constant


// Operations:-
// Arithmetic operator
// Comparison operator
// Assignment Operator

console.log("Addition",7+96);
console.log("Comparison",67>96);



