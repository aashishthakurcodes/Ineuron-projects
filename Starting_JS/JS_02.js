// Array and its method:-

// Declaration Of Array:-
// 1.JS Array literal
let arr1=["Aashish","Arun","Shivani","Hariom", 45 ,14]
console.log(arr1)

// 2. Directly new keyword
let x=new Array("Aashish","Keshu","Jitesh",85,96,751,4562)
console.log(x);

// Array method
// push add at the last position in the array
let q=[1,2,3,4]
q.push(5)
console.log(q);

//2. pop remove the last item
let w=[1,2,"Aashish",85,"lokesh",5]
w.pop()
console.log(w);

//3.shift remove the first element of hte array
let e=[45,56,78,"Rahul","Ashu"]
e.shift()
console.log(e);

//4. Add One or more element at the startting position of hte array.

let r=["Rahul","Arun",56,85,"Gopal"]
r.unshift("Hariom","Shubham")
console.log(r);

//5. Used to add more than one array
let t=[1,2,3,4,5]
let y=[6,2,3,4,7]
let u=[8,2,3,4,9]
console.log(t.concat(y,u));

//6. slice This method slices out a piece of an array into a new array. 

let o=[1,23,45,78,"Arun","Ramesh"]
console.log(o.slice(1,5));

//7.