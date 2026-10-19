const ar = [
    "rehan",
    "rupesh",
    "waquar",
    "hanzala",
    "yoyo",
    "yehhhh",
    "lalalala"
];

const list = document.createElement("ol");

ar.forEach((item) => {
    const L = document.createElement("li");
    L.textContent = item;
    list.appendChild(1);
});

document.getElementById("myList").appendChild(list);