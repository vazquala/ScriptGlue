let name = prompt("What is your name?");

if (name === null) {
    name = "Anonymous Wizard";
} else if (name.trim() === "") {
    name = "Nameless Wonder";
} else {
    name = name.trim();
}

const nameSpan = document.getElementById("studentName");
nameSpan.innerText = name;

let luckyInput = prompt("Pick a lucky number (0-100)");
let luckyNumber = parseInt(luckyInput);

const luckyNumberSpan = document.getElementById("luckyNumber");
luckyNumberSpan.innerText = luckyNumber.toString();

