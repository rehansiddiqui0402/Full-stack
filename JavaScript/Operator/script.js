let a= 10;
let b= 20;
let c= "10";
let d= "20";

console.log(a==b); // 
console.log(a==c);
console.log(a===c);
console.log(a!= b);
console.log(a !== c);

let x = 5;
let y= 2;

console.log(x % y);

let p = 10;
let q = 3;
console.log(p / q);

// And &&
// 

let m = true;
let n = false;
let o = true;

console.log(m && n);
console.log(n && m);
console.log(!m && o);
console.log(!n || o);
console.log(!m || n);
console.log(!m || o);


console.log(a++);
console.log(a--);
console.log(a);


console.log(b--);
console.log(b);
console.log(--b);


console.log(a > b ? "Hello" : "Bye");

if(a>b){
    console.log("Hello");
} else {
    console.log("bye");
}


//loop

for(var i = 0; i< 5; i++){
    console.log("We are learning Java Script", i+1);
}

var i = 0;
while(i!=5){
    console.log("We are learning Java Script", i + 1)
    i++;
}

var i = 0;
do{
    console.log("We are learning Java Script do-while loop", i + 1);
    i++;
} while(i<=5);

