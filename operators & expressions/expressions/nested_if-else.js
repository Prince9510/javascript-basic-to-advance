// Nested if-else 


// example 1

let number = 15;

if (number > 0) {
    if (number % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else if (number < 0) {
    if (number % 2 === 0) {
        console.log("The number is negative and even.");
    } else {
        console.log("The number is negative and odd.");
    }
} else {
    console.log("The number is zero.");
}

// example 2

let age = 25;

if (age >= 18) {
    if (age >= 21) {
        console.log("You are an adult and can legally drink alcohol.");
    } else {
        console.log("You are an adult but cannot legally drink alcohol.");
    }
} else {
    if (age >= 13) {
        console.log("You are a teenager.");
    } else {
        console.log("You are a child.");
    }
}

// example 3

let temperature = 30;

if (temperature > 0) {
    if (temperature > 25) {
        console.log("It's a hot day.");
    } else {
        console.log("It's a warm day.");
    }
} else {
    if (temperature < -10) {
        console.log("It's a freezing day.");
    } else {
        console.log("It's a cold day.");
    }
}

// example 4

let score = 85;

if (score >= 50) {
    if (score >= 90) {
        console.log("You passed with distinction.");
    } else if (score >= 75) {
        console.log("You passed with merit.");
    } else {
        console.log("You passed.");
    }
} else {
    if (score >= 30) {
        console.log("You failed but can retake the test.");
    } else {
        console.log("You failed and need to improve significantly.");
    }
}


// example 5

let time = 14;

if (time >= 0 && time < 12) {
    if (time < 6) {
        console.log("It's early morning.");
    } else {
        console.log("It's morning.");
    }
} else if (time >= 12 && time < 18) {
    if (time < 15) {
        console.log("It's early afternoon.");
    } else {
        console.log("It's late afternoon.");
    }
} else if (time >= 18 && time <= 23) {
    if (time < 21) {
        console.log("It's evening.");
    } else {
        console.log("It's night.");
    }
} else {
    console.log("Invalid time.");
}

// example 6 
let a = 25;
let b = 40;
let c = 35;

if (a > b) {
    if (a > c) {
        console.log("Largest number is: " + a);
    } else {
        console.log("Largest number is: " + c);
    }
} else {
    if (b > c) {
        console.log("Largest number is: " + b);
    } else {
        console.log("Largest number is: " + c);
    }
}
