let weight = prompt("What is your weight?");
let height = prompt("What is your height?");

function bmiCalculator(weight, height) {

    let bmi = Math.floor(weight / (height * height));
    let interpretation;

    if (bmi < 18.5) {
        interpretation = "Your bmi is: " + bmi + ", you are under weight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your bmi is: " + bmi + ", you have a normal weight.";
    } else {
        interpretation = "Your bmi is: " + bmi + ", You are overweight.";
    }

    return interpretation;
}