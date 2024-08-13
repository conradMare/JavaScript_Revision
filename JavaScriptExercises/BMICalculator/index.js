let weight = prompt("What is you weight?");
let height = prompt("What is your height")

function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

let bmi = Math.floor(bmiCalculator(80, 1.79));

alert("Your body mass index is " + bmi);
