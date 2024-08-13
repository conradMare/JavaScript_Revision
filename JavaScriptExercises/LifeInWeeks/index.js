
function lifeInWeeks(age) {

    let yearsRemaining = 80 - age;
    let months = yearsRemaining * 12;
    let weeks = yearsRemaining * 52;
    let days = yearsRemaining * 365;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left");
}

lifeInWeeks(35);