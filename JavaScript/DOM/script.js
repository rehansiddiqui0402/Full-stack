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

function submit2(){
    const formData = document.querySelectorALL("input, select").forEach((item) => {

        formData.push(item.value.trim());

    });

    const fieldName = [];

    document.querySelectorALL("input, select").forEach((item) => {

        fieldName.push(item.name);
    });

    for(var i = 0; i< fieldName.length; i++)

    // console.log(formData);
    
}


