function ShowAlert(){
    alert("click Me Button using HTML Events");
}

document.getElementById("clickButton")
addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("click Me Button clicked using js events");
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked"
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
