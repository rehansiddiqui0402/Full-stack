const ary = ["Apple", 2.5, 99, "Himanchal", "a"];

console.log("With for Each");

ary.forEach((element) => {
    console.log(element);
    
});

ary.forEach((element) => {
    if(typeof element === "Number"){
        return element;
        // console.log(element);
        
    }
});

// console.log("x = ", x);

// console.log("With map");

// ary.map((element) => {
//     console.log(element);
    

// });

const ar2 = ["Apple", 2.5, 99, "Himanchal", "a"];

var F = ar2.filter((item) => item !== 99);

console.log("F = ", F);

var Fi = ar2.find((item) => item === 99);

console.log("Fi = ", Fi);

var Fix = ar2.findIndex((item) => item === 99);

console.log("Fix = ", Fix);


const ar3 = [2, 5, 1, 7, 8, 9];

var s = ar3.sort();

console.log("S = ", s);




