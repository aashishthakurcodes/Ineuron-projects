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

//7.splice This method can be used to add new items to an array. 
let p=[12,23,45,56,78,89]
p.splice(3,2,"Aashish") //2 here means skip two item and replace with "Aashish"
console.log(p);

//8.split convert a string in a comma seperated array
let a="Thakur"
let s=a.split('')
console.log(s);

//9.reverse
let d=["Aashish","Arun","Gopal","Kishan"]
d.reverse()
console.log(d);

//10.join it join string value to all array

let f=[1,2,3,4,5,6,7,8]
let g=f.join("*5 ")
console.log(g);

//11.sort This method sorts the array's elements alphabetically
let h=["Aashish","shubham","Jitesh","sagar",56,5841.25,55.26]
h.sort()
console.log(h);

//12.includes it return true or false value if the element is present or not

let j=["Sameer",58,96,74,32]
let k=j.includes(74);
console.log(k);

//13.index of= it return the first occurence of the value of the  array
let l=[45,56,"Aashu",89,78,45,56,45,45]
console.log(l.indexOf(45));

//14. lastindexof  This method returns the last index of the first occurrence of a value in the array.
let z=[45,56,"Aashu",89,78,45,56,45,45,56,89,95,45,7541]
console.log(z.lastIndexOf(45));

//15.isarray it return boolean value 
let c=[,56,"Aashu",89,78,45,]
console.log(Array.isArray(c));