const showAssBTN = document.getElementById("showAssingmentNotification");
const showAttBTN = document.getElementById("showNotification");
const stopAssBTN = document.getElementById("showAssingmentNotification");

const assPara = document.getElementById("AssingmentNotification");
const attPara = document.getElementById("AttendenceNotification");

function showAssingment() {
    assPara.textContent = "Your assignment deadline is approaching!";
}

showAssBTN.addEventListener("click", showAssingment);

showAssBTN.addEventListener("click", () => {
    attPara.textContent = "Please check your attendance status!";
});

stopAssBTN.addEventListener("click", () => {
   showAssBTN.removeEventListener("click " , showAssingment);

   showAttBTN.removeEventListener("click", () => {
    attPara.textContent = "Please check your attendance status";
   });

//    assPara.textContent = "Your assignment Notification is Stopped!";
});