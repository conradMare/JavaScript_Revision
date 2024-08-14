prompt("What is your name?");
prompt("What is their name?");

let loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;

if (loveScore > 0 && loveScore <= 50) {
    alert("Your love score is " + loveScore + "%, You go together like water and oil.");
} else if (loveScore > 50 && loveScore <= 80) {
    alert("Your love score is " + loveScore + "%, You go together like peanut butter and jelly.");
} else {
    alert("Your loveScore is " + loveScore + "%, You go together like Winnie the Pooh and Honey.");
}
