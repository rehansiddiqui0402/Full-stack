function b1ON() {
    const b1 = document.getElementById("bulb1");

    b1.classList.add("bON");
}

function b1OFF() {
    const b1 = document.getElementById("bulb1");

    b1.classList.remove("bON");
}

function b2ON_OFF() {
    const b2 = document.getElementById("bulb2");
    
    b2.classList.toggle("bON");
}