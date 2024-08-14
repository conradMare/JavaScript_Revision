prompt("What is your name?");
prompt("What is their name?");

let loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;

// Combing comparators to get alerts for different result
if (loveScore > 0 && loveScore <= 30) {
    alert("Your love score is: " + loveScore + "%, You go together like oil and water.");
} else if (loveScore > 30 && loveScore <= 50) {
    alert("Your love score is: " + loveScore + "%, You go together like bees and badgers.");
} else if (loveScore > 50 && loveScore <= 80) {
    alert("Your love score is: " + loveScore + "%, You go together like Winnie the Pooh and Honey.");
} else {
    alert("Your love score is: " + loveScore + "%, You go together like cookies and cream.");
}