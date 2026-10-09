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

console.log("1. check Balance");
console.log("2. Withdraw Money ");
console.log("3. Mini Statement");
console.log("4. Pin change");
console.log("5. Check Balnace");
console.log("6. Exit");


let Choice=1;

switch(Choice){
    case 1: {
        console.log("Checking Your Balance");
        break;
    }

    case 2: {
        console.log("Please Collect your cash");
         break;
    }

     case 3: {
        console.log("Please find your transaction below");
         break;
    }

    case 4: {
        console.log("Enter Your new pin");
         break;
    }

    case 5: {
        console.log("Put your Cah into Machine");
         break;
    }

    case 6: {
        console.log("Thankyou for");
         break;
    }

    default: {
        console.log("Wrong choice")
    }

}
choice===1;
if(Choice===1){
    console.log("Check your Balance");
} else if(choice===2){
    console.log("Check your Balance");   
}else if(choice===3){
    console.log("Please find your transaction below");
}
