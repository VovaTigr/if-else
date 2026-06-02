let d = prompt("Enter a number between 1 and 7");

if (d >= 6 && d <= 7) {
    alert("Today is a weekend");
} else if (d >= 1 && d <= 5) {
    alert("Today is a weekday");
} else if (d < 1 || d > 7) {
    alert("Enter a number between 1 and 7");
} else {
    alert("Invalid input");
}

let timeOfTheYear = prompt("Enter a season (spring, summer, autumn, winter)".toLowerCase());

switch (timeOfTheYear) {
    case "spring":
        alert("The season is spring");
        break;
    case "summer":
        alert("The season is summer");
        break;
    case "autumn":
        alert("The season is autumn");
        break;
    case "winter":
        alert("The season is winter");
        break;
    default:
        alert("Invalid input");
}

function checkSquaredNumber() {
    let num = prompt("Enter a number to check if it can be squared");
    if (isNaN(num)) {
        alert("Please enter a valid number");
    } else {
        alert("The square of " + num + " is " + (num * num));
    }
}

function checkCubedNumber() {
    let num = prompt("Enter a number to check if it can be cubed");
    if (isNaN(num)) {
        alert("Please enter a valid number");
    } else {
        alert("The cube of " + num + " is " + (num * num * num));
    }
}

function perimeter(len, wid) {
    if (len <= 0 || wid <= 0) {
        alert("Length and width must be positive numbers, rectangle doesn't exist");
        return;
    } else if (isNaN(len) || isNaN(wid)) {
        alert("Length and width must be numbers");
        return;
    }
    alert("Perimeter of the rectangle is: " + (2 * (len + wid)));
}

function area(len, wid) {
    if (len <= 0 || wid <= 0) {
        alert("Length and width must be positive numbers, rectangle doesn't exist");
        return;
    } else if (isNaN(len) || isNaN(wid)) {
        alert("Length and width must be numbers");
        return;
    }
    alert("Area of the rectangle is: " + (len * wid));
}

function checkFactorial() {
    let num = prompt("Enter a number to check its factorial");
    if (num < 0) {
        alert("Factorial is not defined for negative numbers");
    } else {
        let result = 1;
        for (let i = num; i > 0; i--) {
            result *= i;
        }
        alert("The factorial of " + num + " is " + result);
    }
}

function recursiveFactorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return num * recursiveFactorial(num - 1);
    }
}
