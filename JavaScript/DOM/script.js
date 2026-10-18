let text = document.querySelector("h1").innerText;

console.log(text + " Rehan siddiqui");

function submit(){
    console.log("Submit Buttom Clicked"); 
    
    const nm = document.querySelector("#fullName").value.trim;
    const em = document.getElementById("#Email").value.trim;
    const pn = document.querySelector("#phone").value.trim;
    const dob = document.getElementById("#DOB").value.trim;
    const gender = document.querySelector("#Gender").value.trim;
   

    console.log("Full Name:", nm);
    console.log("Email:", em);
    console.log("phone:", phn);
    console.log("DOB:", dob);
    console.log("Gender:", gender);   
}

function submit2() {
  const formData = [];

  document.querySelectorAll("input, select").forEach((item) => {
    formData.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formData[i]);
  }
}

const coursediv = document.getElementById("course");

console.log(coursediv);

const heading = document.querySelector("h2");

console.log(heading);

console.log(heading.parentElement.firstElementChild);
console.log(heading.parentElement.children);
console.log(heading.parentElement.lastElementChild);





