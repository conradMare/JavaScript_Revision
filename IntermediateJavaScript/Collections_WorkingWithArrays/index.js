let guestList = ["Adam", "Ben", "Chuck", "David", "Jeff"];

let guestName = prompt("What is your name, I'll check if you are on the list.");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, your not on the guest list...");
}