// let tweet = prompt("Write a tweet: ");

// alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");

let tweet = prompt("Compose your tweet: ");
let tweetCountUnder140 = tweet.slice(0, 140);
alert(tweetCountUnder140);

alert(prompt("Compose your tweet: ".slice(0, 140)));