// function checkName() {
//     const name = document.getElementById("fullName").value.trim();
//     const result = document.getElementById("result");
//     const letters = "abcdefghijklmnopqrstuvwxyz";

//     let isValid = true;

//     if (name === "") 
//         {
//         isValid = false;
//     }

//     for (let i = 0; i < name.length; i++) 
//         {
//         const char = name[i].toLowerCase();

//         if (char === " ") 
//             {
//             if (name[i + 1] === " ") 
//                 {
//                 isValid = false;
//             }
//         } else if (!letters.includes(char)) 
//             {
//             isValid = false;
//         }
//     } 

//     if (isValid) {
//         console.log(name + " valid");
//         result.innerText = "Valid";
//         result.style.color = "green";
//     } else {
//         console.log("invalid");
//         result.innerText = "Invalid";
//         result.style.color = "red";
//     }
// }

const form = document.getElementById("checkName");

form.addEventListener("submit", function (checkName) {
  checkName.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const result = document.getElementById("result");

  let isValid = true;

  if (name === "") {
    isValid = false;
  }

  for (let i = 0; i < name.length; i++) {
    const char = name.charAt(i);

    if (
        (char >= "a" && char <= "z") ||
     (char >= "A" && char <= "Z") || 
     char === " ") 
     {
     
    } else {
      isValid = false;
    }
  } 
//   if (isValid) {
//     console.log(name + " valid");
//     result.innerText = "Valid";
//     result.style.color = "green";
//   } else {
//     console.log("invalid");
//     result.innerText = "Invalid";
//     result.style.color = "red";
//   }
}); // the listener ends here


