let tweet = prompt("Enter your tweet: ");
let count = tweet.length;
let finalCount = 140 - count;

alert("You have written " + count + " number of characters. You have " + finalCount + " characters left.");