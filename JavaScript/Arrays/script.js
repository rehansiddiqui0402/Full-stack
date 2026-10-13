// const ar1 = [1,2,3,4,5];

// const ar2 = [1,2,3,4,5];

// console.log(ar1);
// console.log(ar2);

// ar1[3] = 30;
// ar2 = 10;

// console.log(ar1);
// console.log(ar2);

// const ch1 = ["abcd", "defg", "hijk"];
// console.log(ch1);

// const arr = ["Apple", "2kg", "Himanchal", 20,99.1,true];


// for(var i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// console.log(arr[2]);
// console.log(arr[-4]);

const ar1 = [1, 2, 3, 4, 5];
let ar2 = [1, 2, 3, 4, 5];   

console.log(ar1);
console.log(ar2);

ar1[3] = 30;   // works with const (changing an item inside the array)
ar2 = 10;      // works now because ar2 is declared with let

console.log(ar1);
console.log(ar2);

const ch1 = ["abcd", "defg", "hijk"];
console.log(ch1);

const arr = ["Apple", "2kg", "Himanchal", 20, 99.1, true];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr[2]);
console.log(arr[-4]);   

arr.push("Delhi");
console.log(arr);

arr.pop();
console.log(arr);


let abc = arr.filter((item) => != "Himanchal");
console.log(abc);

const Name = "Rehan siddiqui";

console.log(Name);

arr3.forEach(element => {
    console.log(elements);   
});




// shift and unshift

// foreach

