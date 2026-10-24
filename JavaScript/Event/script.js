function ShowAlert(){
    alert("click Me Button using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("click Me Button clicked using js events");
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked"
});

document.getElementById("box2").addEventListener("mouseenter", () => {
  document.getElementById("box2").innerText = "The mouse Entered to Box";
});
document.getElementById("box2").addEventListener("mouseout", () => {
  document.getElementById("box2").innerText = "The mouse Exit From Box";
});

document.getElementById("nameSubmit").addEventListener("click", () => {
  console.log(document.getElementById("fullName").value.trim());
});

function ShowMessage() {
    alert("Wellcome to RICR!");
}

function onmouseover() {
    alert("Pointer is over the paragraph!");
}

document.getElementById("mouseover").addEventListener("click", () => {
    document.getElementById("mouseover").innerText = "Pointer is over the paragraph!"
});

document.getElementById("mouseover").addEventListener("mousr", () => {
    document.getElementById("mouseover").innerText = "Pointer is over the paragraph!"
});


document.getElementById("mouseover").addEventListener("click", () => {
    document.getElementById("mouseover").innerText = "Pointer is over the paragraph!"
});


function ShowMessage() {
    alert("Box Clicked");
}


document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});