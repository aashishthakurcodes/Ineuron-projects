 
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


// #Template Literals (Use backticks )
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


// 3. Operations:-
// Arithmetic operator
// Comparison operator
// Assignment Operator

console.log("Addition",7+96);
console.log("Comparison",67>96);




// 4. Conditiona in JS
// 1.if else
// 2.Switch case
// 3.Ternary Operator

// 1.ifelse

let user="visiter";
if(user=="Admin"){
    console.log('Welcome Admin Sir you have all access');
}
else if(user=="user"){
    console.log("Hello new user. you can access only your profile");
}
else if(user=="visiter"){
    console.log("Visiter can only visit the website you haven't any access");
}else{
    console.log("Something Went wrong try again");
}


//2.Switch Case:- we cant add condition like (even odd etc)
let entrnum=3;
switch (entrnum) {
    case 1:
        console.log("User enters 1");
        break;
    case 2:
         console.log("User enters 2");
            break;   
     case 3:
         console.log("User enters 3");
                   break; 
    default:
        console.log("try again");
        break;
}

//Ex-2

let student="Aliya";
switch (student) {
    case "Aashish":
        console.log("Hello Aashish, you got 83%");
        break;
    case "Arun":
         console.log("Hello Arun,you got 78% ");
            break;   
     case "Aliya":
         console.log("Hello Aliya cpngrats,you got 98% ");
                   break; 
    default:
        console.log("No result found");
        break;
}

//# ternary Opeartor / Ternary Condition

// Condition?True:False

let i=185252;
(i%5==0)?console.log("Number is divided by 5"):console.log("Number isn't divided by 5");

// date 
 let dt=new Date()
 console.log(dt.toDateString());
 console.log(dt.getHours());
 console.log(dt.getDate());
 console.log(dt.getMinutes());
 console.log(dt.getDay()); //Sunday index is 0

 //Math
 let mt=1245118.9;
 console.log(Math.round(mt));
 console.log(Math.sqrt(mt));
 console.log(Math.floor(mt)); //it give the lowest
 console.log(Math.ceil(mt));// it give the highest
 console.log(Math.pow(2,5));


 console.log(Math.max(58,96,75,35,977,125,954));
 console.log(Math.min(58,96,75,35,977,125,954));

 let r=Math.random();
 console.log(r);
 console.log("Your OTP is:-",Math.round(r*10000));

 //Loops:-
//  1.while loop
//  2.dowhile loop
//  3.for Loop


//while
let ik=0;
while(ik<=10){
    console.log("The value is",ik);
    ik++;
}


//dowhile
let kd=6;
do {
    console.log("The value is:-",kd);
    kd++;
} while (kd<5);


//for loop:-


for(let u = 0; u <= 12; u++){
console.log("The given value is:-" ,u);
}
